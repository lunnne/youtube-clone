import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Root from './pages/Root';
import Home from './pages/Home';
import ErrorPage from './pages/error-page';
import VideoList from './components/VideoList';
import VideoDetail from './pages/VideoDetail';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: '/videos/:searchText', element: <VideoList /> },
      { path: '/videos/watch/:videoId/:channelId', element: <VideoDetail /> },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
