import React from "react";
import {Link} from 'react-router-dom';

import CloudVideo from '../images/cloud-infra.mp4';
import CloudDataCenter from '../images/server-racks.jpg';
import CloudNetwork from '../images/cloud-network.jpg';


import '../styles/CloudInfrastructure.css';
import '../App.css';

const CloudInfrastructure = () => {
  return (
<div className="cloud-container">

      <section className="cloud-hero">

        <video
          autoPlay
          loop
          muted
          playsInline
          className="cloud-video"
          >
          <source src={CloudVideo} type="video/mp4" />
        </video>

        <div className="cloud-overlay"></div>

        <div className="cloud-hero-content">
          <h1>Cloud & Infrastructure</h1>

          <p>
            Building scalable, reliable, and connected
            infrastructure that powers modern technology.
          </p>
        </div>

      </section>
      <section className="cloud-overview">
        <h2>The Foundation of Modern Technology</h2>

        <p>
          Cloud and infrastructure technologies support the
          applications, services, and systems organizations
          rely on every day.
        </p>

        <p>
          Aurizon Technologies explores infrastructure
          solutions designed to improve performance,
          scalability, and long-term reliability.
        </p>

      </section>
      <section className="cloud-image-section">

        <img
          src={CloudDataCenter}
          alt="Cloud Infrastructure Data Center"
          className="cloud-image"
        />

      </section>
      <section className="cloud-areas">

        <h2>Core Infrastructure Areas</h2>

        <div className="cloud-areas-grid">

          <div className="cloud-area-card">
            <h3>Cloud Platforms</h3>
            <p>
              Scalable cloud environments designed to support
              applications, services, and future growth.
            </p>
          </div>

          <div className="cloud-area-card">
            <h3>Network Infrastructure</h3>
            <p>
              Connected systems that enable secure and reliable
              communication across platforms.
            </p>
          </div>

          <div className="cloud-area-card">
            <h3>Server Management</h3>
            <p>
              Infrastructure designed for performance,
              availability, and operational stability.
            </p>
          </div>

          <div className="cloud-area-card">
            <h3>Storage & Backup</h3>
            <p>
              Protecting critical data through resilient
              storage and backup solutions.
            </p>
          </div>

          <div className="cloud-area-card">
            <h3>Virtualization</h3>
            <p>
              Maximizing efficiency through modern
              virtualization technologies.
            </p>
          </div>

          <div className="cloud-area-card">
            <h3>Infrastructure Automation</h3>
            <p>
              Streamlining operations through automation
              and orchestration.
            </p>
          </div>

        </div>

      </section>
      <section className="cloud-image-section">

        <img
          src={CloudNetwork}
          alt="Cloud Network Infrastructure"
          className="cloud-image"
        />

      </section>
      <section className="cloud-process">

        <h2>Infrastructure Lifecycle</h2>

        <div className="cloud-process-grid">

          <div className="cloud-process-card">
            <h3>1</h3>
            <h4>Assess</h4>
            <p>Understand requirements and objectives.</p>
          </div>

          <div className="cloud-process-card">
            <h3>2</h3>
            <h4>Design</h4>
            <p>Create scalable architecture plans.</p>
          </div>

          <div className="cloud-process-card">
            <h3>3</h3>
            <h4>Deploy</h4>
            <p>Implement infrastructure solutions.</p>
          </div>

          <div className="cloud-process-card">
            <h3>4</h3>
            <h4>Monitor</h4>
            <p>Track performance and availability.</p>
          </div>

          <div className="cloud-process-card">
            <h3>5</h3>
            <h4>Optimize</h4>
            <p>Improve efficiency and reliability.</p>
          </div>

          <div className="cloud-process-card">
            <h3>6</h3>
            <h4>Scale</h4>
            <p>Expand to support future growth.</p>
          </div>

        </div>

      </section>
      <section className="cloud-why">

        <h2>Why Infrastructure Matters</h2>

        <p>
          Infrastructure provides the foundation that
          supports innovation, security, and performance.
        </p>

        <p>
          Aurizon Technologies explores scalable solutions
          designed to support today's systems and tomorrow's
          opportunities.
        </p>

      </section>
      <section className="cloud-cta">

        <h2>Explore Infrastructure Innovation</h2>

        <p>
          Discover the technologies and solutions shaping
          the future of connected systems.
        </p>

        <Link
          to="/innovations"
          className="cloud-button"
          >
          View Innovations
        </Link>

      </section>
    </div>
  );
};

export default CloudInfrastructure;