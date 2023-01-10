import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className='text-2xl' id="error-page">
        <h1 className="text-4xl my-3">Oops!😬</h1>
        <p className="text-3xl my-3"> Sorry, an unexpected error has occurred.</p>
        <p className="text-3xl my-3">
          <i>{error.statusText || error.message}</i>
        </p>
    </div>
  );
}