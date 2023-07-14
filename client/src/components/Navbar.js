import React, { useState } from 'react';
// import 'tailwindcss/tailwind.css';
import '../index.css';
import '../App.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = window.innerWidth <= 768; // Check if the screen width is less than or equal to 768px

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMouseEnter = () => {
    setIsMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className='mobile-nav'>
      {/* <div className="logo">Logo</div> */}
      <div
        className={`menu ${isMenuOpen ? 'open' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Our technologies</li>
          <li>Portfolio</li>
          <li>Careers</li>
          <li>News</li>
          <li>Contact</li>
        </ul>
      </div>
      {/* Hamburger menu button */}
      {isMobile && (
        <button className="hamburger" onClick={toggleMenu}>
          <span className={`line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`line ${isMenuOpen ? 'open' : ''}`}></span>
        </button>
      )}
    </nav>
  );
};

export default Navbar;