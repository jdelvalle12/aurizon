import React from 'react';
import '../styles/CollabEcosystemSection.css';

const partners = [
  {
    name: 'Aurizon Technologies',
    type: 'Parent Company',
    description: 'Core technology and innovation hub.'
  },
  {
    name: 'Mosaic Digital Creations',
    type: 'Digital Solutions & Web Development',
    description: 'Creative digital experiences and web platforms.'
  },
  {
    name: 'Future Partner',
    type: 'Strategic Collaboration',
    description: 'Expanding ecosystem partnerships across industries.'
  }
];

const CollabEcosystemSection = () => {
  return (
    <section className="ecosystem-section">
      <h2 className="section-title">Collaborative Ecosystem</h2>

      <p className="section-description">
        Aurizon Technologies operates within a growing ecosystem of
        internal divisions and strategic collaborations designed to
        deliver scalable digital solutions.
      </p>

      <div className="ecosystem-grid">
        {partners.map((item, index) => (
          <div className="ecosystem-card" key={index}>
            <h3>{item.name}</h3>
            <h4>{item.type}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CollabEcosystemSection;