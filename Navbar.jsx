import React, { useState } from 'react';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <nav className='flex items-center justify-between p-4 bg-gray-800 text-white'>
      <div className='flex items-center space-x-4'>
        <a href='#' className='text-2xl font-bold'>Logo</a>
        <a href='#' className='hover:text-gray-400'>Home</a>
        <a href='#' className='hover:text-gray-400'>About</a>
        <a href='#' className='hover:text-gray-400'>Services</a>
        <a href='#' className='hover:text-gray-400'>Contact</a>
      </div>
      <input
        type='text'
        placeholder='Search...'
        className='px-4 py-2 border border-gray-300 rounded-lg text-black'
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </nav>
  );
};

export default Navbar;
