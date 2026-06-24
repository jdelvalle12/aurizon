import React from 'react';
import {Link} from 'react-router-dom';

import FreightOps from '../images/logistics.jpg';
import LogisticsOperations from '../images/warehouse-operations.jpg';
import LogisticsInfrastructure from '../images/logistics-infrastructure.jpg';
import OpsTeamCollab from '../images/operations-team-collab.jpg';

import '../styles/Logistics-Transportation.css';
import '../App.css';

const LogisticsTransportation = () => {
  return (
    <div className="logistics-page">

      <header className="logistics-hero">

        <img
          src={FreightOps}
          alt="Transportation and logistics operations"
          className="logistics-image-hero"
        />

        <div className="logistics-overlay"></div>

        <div className="logistics-hero-content">

          <h1>Transportation & Logistics</h1>

          <p>
            Supporting transportation and logistics 
            organizations improve visibility, efficiency, 
            security, and connectivity through modern 
            technology solutions.
          </p>

        </div>

      </header>

      <section className="logistics-overview">

        <h2>Driving Efficiency Across Transportation Networks</h2>

        <p>
         Transportation and logistics organizations rely on technology
         to manage fleets, coordinate operations, track assets, optimize
         routes, and improve visibility across complex supply chains.
         As demand for speed, reliability, and real-time information 
         continues to grow, organizations must balance operational 
         efficiency, infrastructure, security, and scalability.
        </p>

      </section>

      <section className="logistics-image-section">

        <img
          src={LogisticsOperations}
          alt="Logistics operations"
          className="logistics-image"
        />

      </section>

      <section className="logistics-areas">

        <h2>Logistics & Transportation Focus Areas</h2>

        <div className="logistics-grid">

          <div className="logistics-card">
            <h3>Fleet Management</h3>
            <p>Tracking vehicles, routes, and operational performance.</p>
          </div>

          <div className="logistics-card">
            <h3>Asset Tracking</h3>
            <p>Improving visibility across transportation networks.</p>
          </div>

          <div className="logistics-card">
            <h3>Route Optimization</h3>
            <p>Enhancing efficiency and reducing operational costs.</p>
          </div>

          <div className="logistics-card">
            <h3>Data Analytics</h3>
            <p>Using operational data to support better decisions.</p>
          </div>

          <div className="logistics-card">
            <h3>Infrastructure & Security</h3>
            <p>Supporting reliable and secure transportation systems.</p>
          </div>

          <div className="logistics-card">
            <h3>Automation</h3>
            <p>Streamlining logistics and operational workflows.</p>
          </div>

        </div>

      </section>
      <section className="logistics-image-section">

        <img
          src={LogisticsInfrastructure}
          alt="Modern logistics infrastructure"
          className="logistics-image"
        />

      </section>

     <section className="logistics-challenges">

      <h2>Industry Challenges</h2>

      <div className="logistics-grid">

        <div className="logistics-card">
          <h3>Technology Integration</h3>
          <p>Connecting legacy and modern systems efficiently.</p>
        </div>

        <div className="logistics-card">
          <h3>Operational Efficiency</h3>
          <p>Managing complex transportation workflows effectively.</p>
        </div>

        <div className="logistics-card">
          <h3>Supply Chain Visibility</h3>
          <p>Maintaining real-time visibility across networks.</p>
        </div>

        <div className="logistics-card">
          <h3>Infrastructure Reliability</h3>
          <p>Supporting consistent and dependable operations.</p>
        </div>

        <div className="logistics-card">
          <h3>Cybersecurity</h3>
            <p>
              Protecting connected transportation systems and data.
            </p>
        </div>

        <div className="logistics-card">
          <h3>Wokrforce Challenges</h3>
            <p>
              Supporting teams across distributed operations.
            </p>
        </div>

      </div>

    </section>

    <section className="logistics-why">

      <div className="logistics-why-content">

        <div className="logistics-why-text">
          <h2>Why Aurizon Technologies?</h2>

          <p>
            Aurizon Technologies combines technology, 
            infrastructure, cybersecurity, and operational 
            expertise to help transportation and logistics 
            organizations improve visibility, efficiency, 
            and long-term scalability. Our focus is on supporting 
            connected operations, modern infrastructure, and 
            future-ready transportation systems.
          </p>
        </div>

        <div className="logistics-why-image">
          <img
            src={OpsTeamCollab}
            alt="Operations Team collaboration"
          />
        </div>

      </div>

    </section>
    <section className="logistics-cta">

      <h2>Explore Transportation Solutions</h2>

      <p>
        Discover how Aurizon Technologies supports 
        transportation and logistics organizations 
        through modern technology and infrastructure solutions.
      </p>

      <Link
        to="/solutions"
        className="logistics-button"
      >
        View Solutions
      </Link>

    </section>
    </div>
  );
};

export default LogisticsTransportation;