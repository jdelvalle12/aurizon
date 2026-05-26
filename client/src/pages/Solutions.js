import React from 'react';
import '../styles/Solutions.css';

const Solutions = () => {
  return (
    <div className="solutions-page">

      <header className="solutions-hero">
        <h1>Technology Solutions</h1>
        <p>
          We design and develop scalable digital solutions
          that help businesses operate, grow, and adapt.
        </p>
      </header>

      <section className="solutions-grid">

        <div className="solution-card">
          <h3>Software Development</h3>
          <p>Placeholder for detailed breakdown of software solutions.</p>
        </div>

        <div className="solution-card">
          <h3>IT Support</h3>
          <p>Placeholder for support services and technical assistance.</p>
        </div>

        <div className="solution-card">
          <h3>Technology Consulting</h3>
          <p>Placeholder for consulting methodologies and strategy services.</p>
        </div>

        <div className="solution-card">
          <h3>Research & Development</h3>
          <p>Placeholder for innovation and future technology exploration.</p>
        </div>

      </section>

    </div>
  );
};

export default Solutions;