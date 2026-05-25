import React from 'react';

import '../styles/IndustriesSection.css';

const industries = [
  'Technology',
  'Logistics',
  'Professional Services',
  'Travel',
  'Real Estate',
  'Entertainment',
  'Sports',
  'Food & Beverage'
];

const IndustriesSection = () => {

  return (

    <section className="industries-section">

      <h2 className="section-title">
        Technology Across Industries
      </h2>

      <p className="section-description">
        Technology impacts every industry. Aurizon Technologies
        develops scalable solutions designed to adapt across
        evolving business environments and operational demands.
      </p>

      <div className="industries-grid">

        {industries.map((industry, index) => (

          <div className="industry-card" key={index}>

            <h3>{industry}</h3>

          </div>

        ))}

      </div>

    </section>

  );
};

export default IndustriesSection;