import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ currentPage, handlePageChange }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <button className="toggle-button" onClick={() => setShowMenu(!showMenu)}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </button>

      <ul className={`nav-tabs ${showMenu ? 'active' : ''}`}>
        <li className="nav-item">
          <a
            href="/home"
            onClick={() => handlePageChange('Home')}
            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
          >
            Home
          </a>
        </li>
        <li className="aboutme">
          <a
            href="/about"
            onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            href="/projects"
            onClick={() => handlePageChange('Projects')}
            className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
          >
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a
            href="/resume"
            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </a>
        </li>
        <li className="nav-item">
          <a
            href="/contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;