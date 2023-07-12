import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../components/Header.css';
import '../index.css';
import '../App.css';

const Header = () => {
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);

const toggleServiceDropdown = () => {
  setIsServiceDropdownOpen(!isServiceDropdownOpen);
};

const toggleProductDropdown = () => {
  setIsProductDropdownOpen(!isProductDropdownOpen);
};

  return (
<header className="text-light mb-4 py-1">
  <div className="header-container flex flex-col lg:flex-row justify-between items-center">
    <div className="logo-relative">
      <Link className="no-underline flex items-center" to="/">
        <span className="bg-aqua text-black px-1">DEV</span>erse
      </Link>
    </div>
    <nav className="navi">
      <Link className="about" to="/about">About</Link>
      {/* <div className="services-container"></div> */}
        <Link
            className={`services ${isServiceDropdownOpen ? 'active' : ''}`}
            onClick={toggleServiceDropdown}
            to="#"
          >
            Services
            <span className={`dropdown-arrow ${isServiceDropdownOpen ? 'open' : ''}`}>&#9662;</span>
          </Link>
          {isServiceDropdownOpen && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/services/full-stack-web-development">Full Stack Web Development</Link>
              </li>
              <li>
                <Link to="/services/api-development">API Development</Link>
              </li>
              <li>
                <Link to="/services/front-end-development">Frontend-Development</Link>
              </li>
              <li>
                <Link to="/services/back-end-development">Backend-Development</Link>
              </li>
            </ul>
          )}
           <Link
            className={`products ${isProductDropdownOpen ? 'active' : ''}`}
            onClick={toggleProductDropdown}
            to="#"
          >
            Products
            <span className={`dropdown-arrow ${isProductDropdownOpen ? 'open' : ''}`}>&#9662;</span>
          </Link>
          {isProductDropdownOpen && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/products/journeez">JourneEZ</Link>
              </li>
              <li>
                <Link to="/products/accorplan">Coming Soon</Link>
              </li>
              {/* <li>
                <Link to="/products/front-end-development">Frontend-Development</Link>
              </li>
              <li>
                <Link to="/products/back-end-development">Backend-Development</Link>
              </li> */}
            </ul>
          )}
      <Link className="portfolio" to="/portfolio">Portfolio</Link>
      <Link className="process" to="/process">Process</Link>
      <Link className="careers" to="/process">Careers</Link>
      <Link className="contact" to="/contact">Contact</Link>
    </nav>
  </div>
</header>
  );
}

export default Header;