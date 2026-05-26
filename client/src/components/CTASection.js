import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/CTASection.css';

import ctaImage from '../images/digital-network.jpg'; // abstract tech / network / futuristic image

const CTASection = () => {

  return (

    <section className="cta-section">

      {/* BACKGROUND IMAGE */}
      <div className="cta-image-wrapper">
        <img
          src={ctaImage}
          alt="Technology background"
          className="cta-image"
        />
      </div>

      {/* CONTENT */}
      <div className="cta-container">

        <h2>
          Technology Built for the Future
        </h2>

        <p>
          Helping organizations build, scale,
          and innovate through modern technology solutions.
        </p>

        <Link to="/contact" className="primary-btn">
          Contact Us
        </Link>

      </div>

    </section>

  );
};

export default CTASection;