import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// import '../index.css';
import '../App.css';
import './Navbar.css';

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">

     {/* Navigation Menu */}
      <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <ul>

          {/* <li>
            <Link 
              to="/" 
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li> */}

          <li>
            <Link 
              to="/solutions" 
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Solutions
            </Link>
          </li>

          <li>
            <Link 
              to="/industries" 
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Industries
            </Link>
          </li>

          <li>
            <Link 
              to="/innovations" 
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Innovations
            </Link>
          </li>

          <li>
            <Link 
              to="/insights" 
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Insights
            </Link>
          </li>

          <li>
            <Link 
              to="/about" 
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </li>

          <li>
            <Link 
              to="/careers" 
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Careers
            </Link>
          </li>

          <li>
            <Link 
              to="/contact" 
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </li>

        </ul>
      </div>

      {/* Hamburger Button */}
      <button className="hamburger" onClick={toggleMenu}>
        <span className={`line ${isMenuOpen ? 'open' : ''}`}></span>
        <span className={`line ${isMenuOpen ? 'open' : ''}`}></span>
        <span className={`line ${isMenuOpen ? 'open' : ''}`}></span>
      </button>

    </nav>
  );
};

export default Navbar;