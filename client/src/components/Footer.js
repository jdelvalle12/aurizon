import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from 'react-icons/fa'; // Import the GitHub and LinkedIn icons from the font icon library
import '../index.css';
import '../App.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <h3>AURIZON</h3>
      <div className='footer-column'>
        <h4>Products</h4>
          <ul>
            <li>Journeez</li>
            <li></li>
            <li></li>
          </ul>
      </div>
      <div className='footer-column'>
        <h4>Service</h4>
          <ul>
            <li>Web Development</li>
            <li>API Developemnt</li>
            <li>Mobile App Developemnt</li>
            <li>Business Solutions</li>
          </ul>
      </div>
      <div className='footer-column'>
        <h4>Resources</h4>
          <ul>
            <li>Technical Support</li>
            <li>Aurizon Community</li>
            <li>Marketplace</li>
            <li>My Account</li>
          </ul>
      </div>
      <div className='footer-column'>
        <h4>Company</h4>
          <ul>
            <li>Who we are</li>
            <li>Careers</li>
            <li>Events</li>
            <li>Blogs</li>
            <li>Insider</li>
            <li>Partners</li>
            <li>Contact Us</li>
          </ul>
      </div>
      <div className="footer-legal">
  <div className="footer-legal-content">
    <div className="copyright">© 2023 Aurizon Technologies, LLC</div>
  <p>Privacy Policy</p>
  <p>Terms of Service</p>
    <div className="social-icons">
      <a href="https://github.com/jdelvalle12" target="_blank" rel="noopener noreferrer">
        <FaGithub className="icon" />
      </a>
      <a href="https://linkedin.com/in/jose-del-valle-94993a124/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="icon" />
      </a>
      <a href="https://www.facebook.com/jose.j.delvalle.58" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="icon" />
      </a>
      <a href="mailto:jdelvalle88@live.com" target="_blank" rel="noopener noreferrer">
        <FaEnvelope className="icon" />
      </a>
    </div>
  </div>
</div>
    </footer>
  );
};

export default Footer;
