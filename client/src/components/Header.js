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
      <div className="relative">
      <a
              href="#"
              className={`services inline-flex items-center space-x-1 font-medium text-gray-700 hover:text-gray-900 ${isServiceDropdownOpen ? 'active' : ''}`}
              onClick={toggleServiceDropdown}
            >
              Services
              <span className={`dropdown-arrow ${isServiceDropdownOpen ? 'open' : ''}`}>&#9662;</span>
            </a>
            {isServiceDropdownOpen && (
              <ul className="dropdown-menu absolute z-10 hidden mt-2 py-1 text-gray-700 bg-white border rounded shadow">
                <li>
                  <Link
                    to="/services/full-stack-web-development"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Web Development
                  </Link>
                </li>
              <li>
                <Link to="/services/api-development" className="block px-4 py-2 hover:bg-gray-100">API Development</Link>
              </li>
              <li>
                <Link to="/services/mobile-app-development" className="block px-4 py-2 hover:bg-gray-100">Mobile App Development</Link>
              </li>
              <li>
                <Link to="/services/back-end-development" className="block px-4 py-2 hover:bg-gray-100"></Link>
              </li>
            </ul>
          )}
          </div>
          <div className="relative">
          <a
              href="#"
              className={`products inline-flex items-center space-x-1 font-medium text-gray-700 hover:text-gray-900 ${isProductDropdownOpen ? 'active' : ''}`}
              onClick={toggleProductDropdown}
            >
              Products
              <span className={`dropdown-arrow ${isProductDropdownOpen ? 'open' : ''}`}>&#9662;</span>
            </a>
            {isProductDropdownOpen && (
              <ul className="dropdown-menu absolute z-10 hidden mt-2 py-1 text-gray-700 bg-white border rounded shadow">
                <li>
                  <Link
                    to="/products/journeez"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    JourneEZ
                  </Link>
                </li>
              <li>
                <Link to="/products/accorplan" className="block px-4 py-2 hover:bg-gray-100">Coming Soon</Link>
              </li>
              {/* <li>
                <Link to="/products/front-end-development">Frontend-Development</Link>
              </li>
              <li>
                <Link to="/products/back-end-development">Backend-Development</Link>
              </li> */}
            </ul>
          )}
          </div>
      <Link className="portfolio" to="/portfolio">Portfolio</Link>
      <Link className="careers" to="/process">Careers</Link>
      <Link className="contact" to="/contact">Contact</Link>
    </nav>
  </div>
</header>
  );
}

export default Header;