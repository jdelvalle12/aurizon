import React from 'react';
import { Link } from 'react-router-dom';

import ITSupportHero from '../images/it-support.jpg';
import ITSupportTeam from '../images/it-support-team.jpg';
import SupportAreas from '../images/support-areas.jpg';
import {
  FaDesktop,
  FaCogs,
  FaNetworkWired,
  FaTools,
  FaUserFriends,
  FaShieldAlt
} from 'react-icons/fa';

import '../styles/ItSupport.css';
import '../App.css';

const ItSupport = () => {
  return (
    <div className="it-container">

      {/* HERO */}
      <header className="it-hero">

        <img
          src={ITSupportHero}
          alt="IT Support and Technical Assistance"
          className="it-hero-image"
        />

        <div className="it-overlay"></div>

        <div className="it-hero-content">
          <h1>IT Support</h1>

          <p>
            Reliable technical support designed to keep
            systems running, minimize downtime, and help
            users get the most from technology.
          </p>
        </div>

      </header>

      {/* OVERVIEW */}
      <section className="it-overview">

        <h2>Keeping Technology Running</h2>

        <p>
          Technology issues can disrupt productivity and
          create unnecessary challenges. Aurizon Technologies
          provides technical assistance, troubleshooting,
          and support services focused on helping users
          and organizations operate efficiently.
        </p>

      </section>

      {/* IMAGE */}
      <section className="it-image-section">

        <img
          src={SupportAreas}
          alt="IT professional monitoring technology systems"
          className="it-image"
        />

      </section>

      {/* SUPPORT AREAS */}
      <section className="it-services">

        <h2>Support Areas</h2>

        <div className="it-grid">

          <div className="it-card">
            <FaDesktop className="it-icon" />
            <h3>Device Support</h3>
            <p>Troubleshooting desktops, laptops, and mobile devices.</p>
          </div>

          <div className="it-card">
            <FaCogs className="it-icon" />
            <h3>Software Support</h3>
            <p>Installation, configuration, and issue resolution.</p>
          </div>

          <div className="it-card">
            <FaNetworkWired className="it-icon" />
            <h3>Network Support</h3>
            <p>Connectivity, wireless networks, and infrastructure assistance.</p>
          </div>

          <div className="it-card">
            <FaTools className="it-icon" />
            <h3>System Maintenance</h3>
            <p>Updates, monitoring, and preventative maintenance.</p>
          </div>

          <div className="it-card">
            <FaUserFriends className="it-icon" />
            <h3>User Assistance</h3>
            <p>Technical guidance and end-user support.</p>
          </div>

          <div className="it-card">
            <FaShieldAlt className="it-icon" />
            <h3>Security Support</h3>
            <p>Helping maintain secure and reliable systems.</p>
          </div>

        </div>

      </section>

      <section className="it-image-section">

        <img
          src={ITSupportTeam}
          alt="IT professional monitoring technology systems"
          className="it-image"
        />

      </section>

      {/* PROCESS */}
      <section className="it-process">

        <h2>Support Process</h2>

        <div className="it-process-grid">

          <div className="it-process-card">
            <h3>1</h3>
            <h4>Identify</h4>
            <p>Understand the issue.</p>
          </div>

          <div className="it-process-card">
            <h3>2</h3>
            <h4>Diagnose</h4>
            <p>Determine the root cause.</p>
          </div>

          <div className="it-process-card">
            <h3>3</h3>
            <h4>Resolve</h4>
            <p>Apply the appropriate solution.</p>
          </div>

          <div className="it-process-card">
            <h3>4</h3>
            <h4>Verify</h4>
            <p>Confirm the issue is resolved.</p>
          </div>

          <div className="it-process-card">
            <h3>5</h3>
            <h4>Document</h4>
            <p>Record findings and solutions.</p>
          </div>

          <div className="it-process-card">
            <h3>6</h3>
            <h4>Support</h4>
            <p>Provide ongoing assistance.</p>
          </div>

        </div>

      </section>

      {/* WHY IT SUPPORT */}
      <section className="it-why">

        <h2>Reducing Downtime. Improving Productivity.</h2>

        <p>
          Reliable support helps users stay focused on
          their work while ensuring technology remains
          available, secure, and efficient.
        </p>

        <p>
          Our goal is to provide practical solutions
          that keep systems functioning smoothly and
          minimize interruptions.
        </p>

      </section>

      {/* CTA */}
      <section className="it-cta">

        <h2>Need Technical Assistance?</h2>

        <p>
          Learn how Aurizon Technologies supports
          users, systems, and technology environments.
        </p>

        <Link to="/contact" className="it-button">
          Request Support
        </Link>

      </section>

    </div>
  );
};

export default ItSupport;