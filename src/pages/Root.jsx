import React from 'react';
import { Outlet } from 'react-router-dom';
import SearchBar from '../components/SearchBar'

export default function Root() {
  return (
    <div className='w-3/4 h-full'>
      <SearchBar />
      <Outlet />
    </div>
  );
}
