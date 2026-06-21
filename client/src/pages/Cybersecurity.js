import React from 'react';
import { Link } from 'react-router-dom';

import Cybersec from '../images/cybersecurity-2.mp4';
import NetworkSecurity from '../images/network-security-2.jpg';
import NetSec from '../images/network-security.jpg';

import '../styles/Cybersecurity.css';
import '../App.css';

import {
  FaShieldAlt,
  FaLock,
  FaNetworkWired,
  FaUserShield,
  FaBug,
  FaDatabase
} from 'react-icons/fa';

const Cybersecurity = () => {
  return (
    <div className="cyber-container">

      {/* HERO */}
      <section className="cyber-hero">

        <video
            autoPlay
            loop
            muted
            playsInline
            className="cyber-video"
          >
            <source src={Cybersec} type="video/mp4" />
          </video>

        <div className="cyber-overlay"></div>

        <div className="cyber-hero-content">
          <h1>Cybersecurity</h1>
          <p>
            Protecting systems, securing data, and reducing risk
            through proactive defense and research-driven security.
          </p>
        </div>

      </section>

      {/* OVERVIEW */}
      <section className="cyber-overview">

        <h2>Security First Thinking</h2>

        <p>
          Aurizon Technologies approaches cybersecurity through
          continuous monitoring, proactive defense strategies,
          and ongoing research into emerging threats and vulnerabilities.
        </p>

      </section>

        <img
          src={NetSec}
          alt="Network Security two"
          className="cyber-image"
        />

      {/* FOCUS AREAS */}
      <section className="cyber-grid-section">

        <h2>Security Focus Areas</h2>

        <div className="cyber-grid">

          <div className="cyber-card">
            <FaShieldAlt className="cyber-icon" />
            <h3>Threat Protection</h3>
            <p>Identifying and mitigating external threats.</p>
          </div>

          <div className="cyber-card">
            <FaNetworkWired className="cyber-icon" />
            <h3>Network Security</h3>
            <p>Securing infrastructure and data flow systems.</p>
          </div>

          <div className="cyber-card">
            <FaUserShield className="cyber-icon" />
            <h3>Identity Protection</h3>
            <p>Managing access control and authentication systems.</p>
          </div>

          <div className="cyber-card">
            <FaLock className="cyber-icon" />
            <h3>Data Encryption</h3>
            <p>Protecting sensitive data through encryption systems.</p>
          </div>

          <div className="cyber-card">
            <FaBug className="cyber-icon" />
            <h3>Vulnerability Research</h3>
            <p>Identifying weaknesses in systems and applications.</p>
          </div>

          <div className="cyber-card">
            <FaDatabase className="cyber-icon" />
            <h3>System Integrity</h3>
            <p>Ensuring systems remain stable and uncompromised.</p>
          </div>

        </div>

      </section>

      {/* PROCESS */}
        <img
          src={NetworkSecurity}
          alt="Network Security"
          className="cyber-image"
        />
      <section className="cyber-process">

        <h2>Security Response Process</h2>

        <div className="cyber-process-grid">

          <div className="cyber-process-card">
            <h3>1</h3>
            <h4>Monitor</h4>
            <p>Continuously observe system activity.</p>
          </div>

          <div className="cyber-process-card">
            <h3>2</h3>
            <h4>Detect</h4>
            <p>Identify unusual or malicious behavior.</p>
          </div>

          <div className="cyber-process-card">
            <h3>3</h3>
            <h4>Analyze</h4>
            <p>Assess severity and impact of threats.</p>
          </div>

          <div className="cyber-process-card">
            <h3>4</h3>
            <h4>Respond</h4>
            <p>Take immediate action to contain threats.</p>
          </div>

          <div className="cyber-process-card">
            <h3>5</h3>
            <h4>Mitigate</h4>
            <p>Reduce damage and secure affected systems.</p>
          </div>

          <div className="cyber-process-card">
            <h3>6</h3>
            <h4>Improve</h4>
            <p>Strengthen systems to prevent future risks.</p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="cyber-cta">

        <h2>Security Is Never Optional</h2>

        <p>
          Let’s discuss how Aurizon can help strengthen your systems
          and protect your digital infrastructure.
        </p>

        <Link to="/contact" className="cyber-button">
          Discuss Security
        </Link>

      </section>

    </div>
  );
};

export default Cybersecurity;