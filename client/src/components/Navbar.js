import React, { useState } from 'react';
// import 'tailwindcss/tailwind.css';
import '../index.css';
import '../App.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800">
  <div className="mx-auto px-4 py-2 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
      <div className="flex-shrink-0">
        <div className="text-white">Logo</div>
      </div>
      <div className="hidden md:block">
        <div className="ml-4 flex items-baseline space-x-4">
          <a href="#" className="text-white hover:text-gray-300">Home</a>
          <a href="#" className="text-white hover:text-gray-300">About</a>
          <a href="#" className="text-white hover:text-gray-300">Services</a>
          <a href="#" className="text-white hover:text-gray-300">Products</a>
          <a href="#" className="text-white hover:text-gray-300">Portfolio</a>
          <a href="#" className="text-white hover:text-gray-300">Careers</a>
          <a href="#" className="text-white hover:text-gray-300">Contact</a>
        </div>
      </div>
      <div className="md:hidden">
        <button type="button" className="hamburger bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false" onClick={toggleMenu}>
          <span className={`line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`line ${isMenuOpen ? 'open' : ''}`}></span>
        </button>
      </div>
    </div>
  </div>
  <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
      <a href="#" className="text-white hover:text-gray-300 block">Home</a>
      <a href="#" className="text-white hover:text-gray-300 block">About</a>
      <a href="#" className="text-white hover:text-gray-300 block">Services</a>
      <a href="#" className="text-white hover:text-gray-300 block">Products</a>
      <a href="#" className="text-white hover:text-gray-300 block">Portfolio</a>
      <a href="#" className="text-white hover:text-gray-300 block">Careers</a>
      <a href="#" className="text-white hover:text-gray-300 block">Contact</a>
    </div>
  </div>
</nav>
  );
};

export default Navbar;