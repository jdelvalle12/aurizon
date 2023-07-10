import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Header.css';
import '../App.css';

const Header = () => {
  return (
    <header className="text-light mb-4 py-2 flex-row ">
      <div className="header-container flex-row justify-space-between-lg justify-center align-center">
          <div className="logo-relative">
        <Link className="no-underline" to="/">
            <span>DEV</span>erse 
        </Link>
          <nav className="navi">       
            <Link className='about-me'  to="/about">About</Link> 
            <Link className='projects' to="/projects">Projects</Link>
            <Link className='contact' to="/contact">Contact</Link>
            {/* <Link className='resume' to="/resume">Resume</Link> */}
          </nav>
          </div>
      </div>
  </header>
  );
}

export default Header;