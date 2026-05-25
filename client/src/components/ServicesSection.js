import React from 'react';

import '../styles/ServicesSection.css';

const ServicesSection = () => {

  return (

    <section className="services-section">

      <h2 className="section-title">
        What We Do
      </h2>

      <p className="section-subtitle">
        A snapshot of our current and evolving technology capabilities.
      </p>

      <div className="services-grid">

        <div className="service-card">

          <h3>Software Development</h3>

          <p>
            Developing modern software tools, digital systems,
            and scalable technology solutions designed to support
            innovation and future growth.
          </p>

        </div>

        <div className="service-card">

          <h3>IT Support</h3>

          <p>
            Assisting with technical troubleshooting,
            digital systems, and foundational IT solutions
            for individuals and businesses.
          </p>

        </div>

        <div className="service-card">

          <h3>Technology Consulting</h3>

          <p>
            Providing guidance on digital strategy,
            technology planning, and practical solutions
            through continuous learning and innovation.
          </p>

        </div>

        <div className="service-card">

          <h3>Research & Development</h3>

          <p>
            Exploring future-focused technologies including
            cybersecurity, infrastructure systems,
            and emerging digital solutions.
          </p>

        </div>

      </div>

    </section>

  );
};

export default ServicesSection;