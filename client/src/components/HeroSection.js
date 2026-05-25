import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/HeroSection.css';
import DigiEarth from '../images/rotating-digital-planet.mp4';

const HeroSection = () => {
  return (
    <section className="hero-section">

      <video
        src={DigiEarth}
        autoPlay
        loop
        muted
        className="background-video"
      />

      <div className="hero-overlay">

        <div className="hero-content">

          <h1 className="hero-title">
            Technology for a Connected Future
          </h1>

          <p className="hero-description">
            Aurizon Technologies delivers modern software development, IT support, 
            and technology consulting services designed to help businesses and individuals 
            adapt and grow in a digital world. As a research-driven company, we are continually 
            expanding into emerging technologies, cybersecurity, and future-focused innovation.
          </p>

          <div className="hero-buttons">

            <Link to="/solutions" className="primary-btn">
              Explore Solutions
            </Link>

            <Link to="/contact" className="secondary-btn">
              Schedule Consultation
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
};

export default HeroSection;