import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from 'react-icons/fa'; // Import the GitHub and LinkedIn icons from the font icon library
import '../App.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className='copyright'>
        © 2023 Del Valle Digital Designs
      </div>
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
      {/* <div className="contact-info">
      <h4>Email: <a href="mailto:jdelvalle88@live.com">jdelvalle88@live.com</a></h4>
      </div> */}
    </footer>
  );
};

export default Footer;
