import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Header.css';
import '../App.css';

const Header = () => {
  return (
    <header className="text-light mb-4 py-2 flex-row ">
    <div className="header-container flex-row justify-space-between-lg justify-center align-center">
      <Link className="text-light" to="/">
      <div className="logo-relative">
         Del Valle Digital Designs {/* Your logo text */}
         <span className="absolute top-0 left-0 w-full h-full bg-cyan z-0 animate-glitch-1"></span>
          <span className="absolute top-0 left-0 w-full h-full bg-magenta z-0 animate-glitch-2"></span>
      </div>
      </Link>
      <nav className="navi">       
          <Link className='about-me'  to="/about">About</Link> 
          <Link className='projects' to="/projects">Projects</Link>
          <Link className='contact' to="/contact">Contact</Link>
          <Link className='resume' to="/resume">Resume</Link>
      </nav>
    </div>
  </header>
  );
}

export default Header;