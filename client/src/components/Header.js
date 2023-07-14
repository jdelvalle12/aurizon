import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../components/Header.css';
import '../index.css';
import '../App.css';

const Header = () => {
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);

const toggleServiceDropdown = () => {
  setIsServiceDropdownOpen(!isServiceDropdownOpen);
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
      <Link className="about" to="/about">Who we are</Link>
      <div className="relative">
      <a
              href="#"
              className={`technologies inline-flex items-center space-x-1 font-medium text-gray-700 hover:text-gray-900 ${isServiceDropdownOpen ? 'active' : ''}`}
              onMouseEnter={toggleServiceDropdown}
              // onMouseLeave={toggleServiceDropdown}
            >
              Our technologies
              <span className={`dropdown-arrow ${isServiceDropdownOpen ? 'open' : ''}`}>&#9662;</span>
            </a>
            {isServiceDropdownOpen && (
              <ul className="dropdown-menu absolute z-10 hidden mt-2 py-1 text-gray-700 bg-white border rounded shadow">
                  <h2>Services</h2>
                  
                <li>
                  <Link
                    to="/technologies/full-stack-web-development"
                    className="flex px-4 py-2 hover:bg-gray-100"
                  >
                    Web Development
                  </Link>
                </li>
              <li>
                <Link to="/technologies/api-development" className="flex px-4 py-2 hover:bg-gray-100">API Development</Link>
              </li>
              <li>
                {/* <Link to="/technologies/mobile-app-development" className="block px-4 py-2 hover:bg-gray-100">Mobile App Development</Link> */}
              </li>
              <li>
                {/* <Link to="/technologies/back-end-development" className="block px-4 py-2 hover:bg-gray-100"></Link> */}
              </li>      
                <h2>Explore our apps</h2>
                <li>
                  <Link
                    // to="https://www.journeeztrip.com"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    In development
                  </Link>
                </li>
                <h2>Work tools</h2>
              <li>
                <Link 
                // to="/technologies/accorplan" 
                className="block px-4 py-2 hover:bg-gray-100">In development</Link>
              </li>
              {/* <li>
                <Link to="/technologies/front-end-development">Frontend-Development</Link>
              </li>
              <li>
                <Link to="/technologies/back-end-development">Backend-Development</Link>
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