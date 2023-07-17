import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import 'tailwindcss/tailwind.css';
import '../index.css';
import '../App.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isMobile = window.innerWidth <= 768; // Check if the screen width is less than or equal to 768px

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleMouseEnter = () => {
    setIsMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
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
        <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/about" className="nav-link">About</Link></li>
          <li
               className={`dropdown ${isDropdownOpen ? 'open' : ''}`}
               onClick={toggleDropdown}
          >
          <Link to="#" className="nav-link">
            Our technologies
            <span className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}>&#9662;</span></Link>
          <div className="mobile-dropdown-menu">
              {/* Dropdown menu content */}
              <ul>
                <li><Link to="/technologies/web-development">Web Development</Link></li>
                <li><Link to="/technologies/api-development">API Development</Link></li>
                <li><Link to="/technologies/mobile-development">Mobile Development</Link></li>
              </ul>
            </div>
          </li>
          <li><Link to="/portfolio" className="nav-link">Portfolio</Link></li>
          <li><Link to="/careers" className="nav-link">Careers</Link></li>
          <li><Link to="/news" className="nav-link">News</Link></li>
          <li><Link to="/contact" className="nav-link">Contact</Link></li>
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