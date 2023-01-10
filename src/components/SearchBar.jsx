import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SearchBar() {
  const [text, setText] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setText('');
    if (text !== '') {
      navigate(`/videos/${encodeURIComponent(text)}`);
    }
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <nav className="flex flex-row flex-auto items-center border-b border-slate-500 my-5">
      <Link to="/" className="w-1/4">
        <img className="w-44" src="https://download.logo.wine/logo/YouTube/YouTube-White-Full-Color-Logo.wine.png" alt="logo" />
      </Link>
      <form className="w-2/4" action="submit" onSubmit={handleSubmit}>
        <input className="w-full h-12 px-2 bg-black" type="text" name="search" id="search" placeholder="Search.." onChange={handleChange} />
      </form>
    </nav>
  );
}
