import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';

const Logo = () => {
  return (
    <div className="logo-container">

      <Link to="/" className="logo-link">
        <span className="logo-mark">A</span>
        URIZON
      </Link>

    </div>
  );
};

export default Logo;