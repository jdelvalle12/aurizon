import React from 'react';
import { Link } from 'react-router-dom';

import FinancialStock from '../images/financial-network.mp4';
import GlobalTransactions from '../images/global-transactions.jpg';
import FinanceInfrastructure from '../images/financial-infrastructure.jpg';
import FraudProtection from '../images/fraud-protection.jpg';
import {
  FaUniversity,
  FaCreditCard,
  FaShieldAlt,
  FaExclamationTriangle,
  FaCloud,
  FaChartBar
} from "react-icons/fa";

import '../styles/FinancialServices.css';
import '../App.css';

const FinancialServices = () => {
  return (
    <div className="financial-page">

      {/* HERO */}
      <header className="financial-hero">

       <video
                 autoPlay
                 loop
                 muted
                 playsInline
                 className="financial-video"
               >
                 <source src={FinancialStock} type="video/mp4" />
               </video>

        <div className="financial-overlay"></div>

        <div className="financial-hero-content">
          <h1>Financial Services</h1>
          <p>
            Secure, scalable, and data-driven technology solutions
            for modern financial organizations.
          </p>
        </div>

      </header>

      {/* OVERVIEW */}
      <section className="financial-overview">

        <h2>Modernizing Financial Technology Systems</h2>

        <p>
          Financial institutions depend on secure, high-performance systems
          to manage transactions, data, compliance, and customer operations.
          Aurizon Technologies helps organizations modernize infrastructure,
          improve security, and enhance digital financial services.
        </p>

      </section>

      {/* IMAGE */}
      <section className="financial-image-section">

        <img
          src={GlobalTransactions}
          alt="Financial operations"
          className="financial-image"
        />

      </section>

      {/* FOCUS AREAS */}
      <section className="financial-areas">

        <h2>Financial Technology Focus Areas</h2>

        <div className="financial-grid">
          <div className="financial-card">
              <FaUniversity className="financial-icon" />
              <h3>Digital Banking Systems</h3>
              <p>Modern platforms for customer financial services.</p>
            </div>

            <div className="financial-card">
              <FaCreditCard className="financial-icon" />
              <h3>Payment Infrastructure</h3>
              <p>Secure and scalable transaction processing systems.</p>
            </div>

            <div className="financial-card">
              <FaShieldAlt className="financial-icon" />
              <h3>Data Security</h3>
              <p>Protecting sensitive financial and customer data.</p>
            </div>

            <div className="financial-card">
              <FaExclamationTriangle className="financial-icon" />
              <h3>Risk Management Systems</h3>
              <p>Tools for financial analysis and compliance.</p>
            </div>

            <div className="financial-card">
              <FaCloud className="financial-icon" />
              <h3>Cloud Financial Platforms</h3>
              <p>Scalable infrastructure for fintech applications.</p>
            </div>

            <div className="financial-card">
              <FaChartBar className="financial-icon" />
              <h3>Automation & Analytics</h3>
              <p>Improving decision-making and operational efficiency.</p>
            </div>

        </div>

      </section>

      {/* IMAGE */}
      <section className="financial-image-section">

        <img
          src={FinanceInfrastructure}
          alt="Financial infrastructure"
          className="financial-image"
        />

      </section>

      {/* CHALLENGES */}
      <section className="financial-challenges">

        <h2>Industry Challenges</h2>

        <div className="financial-grid">

          <div className="financial-card">
            <h3>Regulatory Compliance</h3>
            <p>Meeting strict financial industry regulations.</p>
          </div>

          <div className="financial-card">
            <h3>Cybersecurity Threats</h3>
            <p>Protecting against fraud and data breaches.</p>
          </div>

          <div className="financial-card">
            <h3>Legacy Systems</h3>
            <p>Modernizing outdated financial infrastructure.</p>
          </div>

          <div className="financial-card">
            <h3>Data Management</h3>
            <p>Handling large-scale financial datasets securely.</p>
          </div>

          <div className="financial-card">
            <h3>System Scalability</h3>
            <p>Supporting growing transaction volumes.</p>
          </div>

          <div className="financial-card">
            <h3>Digital Transformation</h3>
            <p>Transitioning to modern fintech ecosystems.</p>
          </div>

        </div>

      </section>

      {/* WHY SECTION */}
      <section className="financial-why">

        <div className="financial-why-content">

          <div className="financial-why-text">
            <h2>Why Aurizon Technologies?</h2>
            <p>
              Aurizon Technologies delivers secure, scalable,
              and modern financial systems designed to support
              digital transformation in banking, fintech, and
              financial services organizations.
            </p>
          </div>

          <div className="financial-why-image">
            <img
              src={FraudProtection}
              alt="Fraud Protection"
            />
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="financial-cta">

        <h2>Explore Financial Technology Solutions</h2>

        <p>
          Discover how Aurizon Technologies helps financial organizations
          modernize systems and improve digital infrastructure.
        </p>

        <Link to="/solutions" className="financial-button">
          View Solutions
        </Link>

      </section>

    </div>
  );
};

export default FinancialServices;