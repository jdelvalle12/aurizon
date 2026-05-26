import React from 'react';

import '../styles/IndustriesSection.css';

import Technology from '../images/abstract-digital-image.jpg';
import Logistics from '../images/logistics.jpg';
import Office from '../images/office-software.jpg';
import Journeez from '../images/Journeez.jpg';
import RealEstate from '../images/real-estate.jpg';
import Entertainment from '../images/entertainment.jpg';
import Sports from '../images/sports.jpg';
import Food from '../images/food-beverage.jpg';

const industries = [
  {
    title: 'Technology',
    image: Technology
  },

  {
    title: 'Logistics',
    image: Logistics
  },

  {
    title: 'Professional Services',
    image: Office
  },

  {
    title: 'Travel',
    image: Journeez
  },

  {
    title: 'Real Estate',
    image: RealEstate
  },

  {
    title: 'Entertainment',
    image: Entertainment
  },

  {
    title: 'Sports',
    image: Sports
  },

  {
    title: 'Food & Beverage',
    image: Food
  }
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

          <div
            className="industry-card"
            key={index}
            style={{
              backgroundImage: `url(${industry.image})`
            }}
          >

            <div className="industry-overlay"></div>

            <h3>{industry.title}</h3>

          </div>

        ))}

      </div>

    </section>

  );
};

export default IndustriesSection;