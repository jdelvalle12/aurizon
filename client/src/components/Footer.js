import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from 'react-icons/fa';

import '../App.css';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">

      {/* BRAND */}
      <div className="footer-column">
        <h3>
          <Link className="back-home" to="/">
            AURIZON
          </Link>
        </h3>
        <p className="footer-tagline">
          Building scalable systems and digital ecosystems for the future.
        </p>
      </div>

      {/* ECOSYSTEM */}
      <div className="footer-column">
        <h4>Ecosystem</h4>
        <ul>
          <li>
            <a
              href="https://www.mosaicdigitalcreations.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mosaic Digital Creations
            </a>
          </li>
          <li>Marketplace (Coming Soon)</li>
          <li>Aurizon University (Coming Soon)</li>
          <li>Developer Resources (Coming Soon)</li>
          <li>Documentation (Coming Soon)</li>
        </ul>
      </div>

      {/* SOLUTIONS */}
      <div className="footer-column">
        <h4>Solutions</h4>
        <ul>
          <li><Link to="/solutions/software-development">Software Development</Link></li>
          <li><Link to="/solutions/research-development">Research & Development</Link></li>
          <li><Link to="/solutions/it-support">IT Support</Link></li>
          <li><Link to="/solutions/cybersecurity">Cybersecurity</Link></li>
          <li><Link to="/solutions/cloud-infrastructure">Cloud & Infrastructure</Link></li>
          <li><Link to="/solutions/technology-consulting">Technology Consulting</Link></li>
        </ul>
      </div>

{/* INDUSTRIES */}
      <div className="footer-column">
        <h4>Industries</h4>
        <ul>
          <li><Link to="/industries/technology">Technology</Link></li>
          <li><Link to="/industries/financial-services">Financial Services</Link></li>
          <li><Link to="/industries/logistics-transportation">Logistics & Transportation</Link></li>
          <li><Link to="/industries/real-estate">Real Estate</Link></li>
          <li><Link to="/industries/travel-hospitality">Travel & Hospitality</Link></li>
          <li><Link to="/industries/media-entertainment">Media & Entertainment</Link></li>
          <li><Link to="/industries/sports-recreation">Sports & Recreation</Link></li>
          <li><Link to="/industries/food-beverage">Food & Beverage</Link></li>
        </ul>
      </div>

      {/* COMPANY */}
      <div className="footer-column">
        <h4>Company</h4>
        <ul>
          <li><Link to="/about">About Aurizon</Link></li>
          <li><Link to="/solutions">Solutions</Link></li>
          <li><Link to="/industries">Industries</Link></li>
          <li><Link to="/innovation">Innovation</Link></li>
          <li><Link to="/casestudies">Case Studies</Link></li>
          <li><Link to="/careers">Careers</Link></li>
          <li><Link to="/insider">Insights</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/about#faq">FAQ</Link></li>
        </ul>
      </div>

      {/* LEGAL + SOCIAL */}
      <div className="footer-legal">

        <div className="copyright">
          © 2026 Aurizon Technologies, LLC
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

          <a href="mailto:jdelvalle88@live.com">
            <FaEnvelope className="icon" />
          </a>
        </div>

      </div>

    </footer>
  );
};

export default Footer;