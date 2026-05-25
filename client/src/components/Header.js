import React from 'react';
import Navbar from '../components/Navbar';
import Logo from './Logo';

import '../components/Header.css';
import '../index.css';
import '../App.css';

const Header = () => {

  return (
    <header className="header">

      <div className="header-container">

        {/* Logo */}
        <div className="logo-container">
          <Logo />
        </div>

        {/* Navigation */}
        <Navbar />

        {/* Optional CTA Button */}
        <div className="header-button">
          <button className="consultation-btn">
            Get Consultation
          </button>
        </div>

      </div>

    </header>
  );
};

export default Header;