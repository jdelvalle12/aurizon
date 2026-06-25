import React from 'react';
import { Link } from 'react-router-dom';

import Skyline from '../images/modern-skyline.mp4';
import Suburban from '../images/suburban-neighborhood.jpg';
import Construction from '../images/modern-construction.jpg';
import Modernize from '../images/modern-building.jpg';
import {
  FaBuilding,
  FaHome,
  FaChartLine,
  FaCloud,
  FaLock,
  FaMobileAlt
} from 'react-icons/fa';

import '../styles/Real-Estate.css';
import '../App.css';

const RealEstate = () => {
  return (
    <div className="realestate-page">

      {/* HERO */}
      <header className="realestate-hero">

       <video
                 autoPlay
                 loop
                 muted
                 playsInline
                 className="realestate-video"
               >
                 <source src={Skyline} type="video/mp4" />
               </video>

        <div className="realestate-overlay"></div>

        <div className="realestate-hero-content">
          <h1>Real-Estate</h1>
          <p>
            Secure, scalable, and data-driven technology solutions
            for modern real-estate organizations.
          </p>
        </div>

      </header>

      {/* OVERVIEW */}
      <section className="realestate-overview">

        <h2>Supporting the Future of Real-Estate</h2>

          <p>
            The real estate industry continues to evolve through digital transformation,
            requiring secure, scalable, and connected technology solutions. From
            residential communities to commercial developments and property management,
            Aurizon Technologies helps organizations improve operations, strengthen
            infrastructure, enhance security, and deliver better experiences for clients
            and tenants.
          </p>

      </section>

      {/* IMAGE */}
      <section className="realestate-image-section">

        <img
          src={Suburban}
          alt="Real Estate Neighborhood"
          className="realestate-image"
        />

      </section>

      {/* FOCUS AREAS */}
      <section className="realestate-areas">

        <h2>Real-Estate Technology Focus Areas</h2>

        <div className="realestate-grid">
          <div className="realestate-card">
            <FaBuilding className="realestate-icon" />
            <h3>Property Management</h3>
            <p>Technology supporting property operations and tenant services.</p>
          </div>

          <div className="realestate-card">
            <FaHome className="realestate-icon" />
            <h3>Residential Solutions</h3>
            <p>Digital platforms supporting residential property management.</p>
          </div>

          <div className="realestate-card">
            <FaChartLine className="realestate-icon" />
            <h3>Market Analytics</h3>
            <p>Using data to support investment and operational decisions.</p>
          </div>

          <div className="realestate-card">
            <FaCloud className="realestate-icon" />
            <h3>Cloud Platforms</h3>
            <p>Scalable infrastructure for real estate applications.</p>
          </div>

          <div className="realestate-card">
            <FaLock className="realestate-icon" />
            <h3>Security & Compliance</h3>
            <p>Protecting sensitive business and customer information.</p>
          </div>

          <div className="realestate-card">
            <FaMobileAlt className="realestate-icon" />
            <h3>Digital Experiences</h3>
            <p>Improving client engagement through modern technologies.</p>
          </div>

        </div>

      </section>

      {/* IMAGE */}
      <section className="realestate-image-section">

        <img
          src={Construction}
          alt="Housing Construction"
          className="realestate-image"
        />

      </section>

      {/* CHALLENGES */}
      <section className="realestate-challenges">

        <h2>Industry Challenges</h2>

        <div className="realestate-grid">

       <div className="realestate-card">
          <h3>Legacy Systems</h3>
          <p>Modernizing aging property management technologies.</p>
        </div>

        <div className="realestate-card">
          <h3>Data Management</h3>
          <p>Maintaining accurate property and tenant information.</p>
        </div>

        <div className="realestate-card">
          <h3>Cybersecurity</h3>
          <p>Protecting business operations and customer data.</p>
        </div>

        <div className="realestate-card">
          <h3>Operational Efficiency</h3>
          <p>Streamlining property and facility management processes.</p>
        </div>

        <div className="realestate-card">
          <h3>Scalability</h3>
          <p>Supporting growth across multiple properties and locations.</p>
        </div>

        <div className="realestate-card">
          <h3>Digital Transformation</h3>
          <p>Adapting to evolving technology expectations.</p>
        </div>

        </div>

      </section>

      {/* WHY SECTION */}
      <section className="realestate-why">

        <div className="realestate-why-content">

          <div className="realestate-why-text">
            <h2>Why Aurizon Technologies?</h2>
            <p>
              Aurizon Technologies helps real estate 
              organizations modernize operations through 
              cloud platforms, cybersecurity, software development, 
              IT support, and technology consulting. Our focus is 
              on creating secure, scalable, and efficient solutions 
              that support property management, tenant experiences, 
              and long-term business growth.
            </p>
          </div>

          <div className="realestate-why-image">
            <img
              src={Modernize}
              alt="Modern Building"
            />
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="financial-cta">

        <h2>Explore Real-Estate Solutions</h2>

        <p>
          Discover how Aurizon Technologies helps real estate organizations
          modernize systems and improve digital infrastructure.
        </p>

        <Link to="/solutions" className="realestate-button">
          View Solutions
        </Link>

      </section>

    </div>
  );
};

export default RealEstate;