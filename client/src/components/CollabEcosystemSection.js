import React from 'react';
import '../styles/CollabEcosystemSection.css';

import mosaicLogo from '../images/mosaic-logo.png'; // or your actual path

const partners = [
  {
    name: 'Mosaic Digital Creations',
    logo: mosaicLogo,
    // tag: 'Strategic Solutions Partner'
  }
];

const CollabEcosystemSection = () => {
  return (
    <section className="ecosystem-section">

      <h2 className="section-title">
        Collaborative Ecosystem
      </h2>

      <p className="section-description">
        A network of companies and collaborators that work with 
        Aurizon Technologies to deliver digital solutions, support services, 
        and scalable technology systems.
      </p>

      <div className="ecosystem-grid">

        {partners.map((item, index) => (
          <div className="ecosystem-card" key={index}>

            {item.logo && (
              <img
                src={item.logo}
                alt={item.name}
                className="ecosystem-logo"
              />
            )}

            <h3>{item.name}</h3>

            <span className="ecosystem-tag">
              {item.tag}
            </span>

          </div>
        ))}

      </div>

    </section>
  );
};

export default CollabEcosystemSection;