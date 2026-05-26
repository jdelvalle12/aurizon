import React from 'react';
import '../styles/IndustriesPage.css';

const Industries = () => {
  return (
    <div className="industries-page">

      <header className="industries-hero">
        <h1>Industries We Serve</h1>
        <p>
          Aurizon Technologies develops scalable digital solutions
          across multiple industries, adapting to different operational needs
          and business environments.
        </p>
      </header>

      <section className="industries-placeholder">

        <h2>Industry Solutions Overview</h2>

        <p className="placeholder-text">
          This section will expand into detailed industry breakdowns,
          including challenges, solutions, and future case studies.
        </p>

        <div className="placeholder-grid">

          <div className="placeholder-card">Technology Solutions</div>
          <div className="placeholder-card">Logistics Systems</div>
          <div className="placeholder-card">Financial Technology</div>
          <div className="placeholder-card">Real Estate Platforms</div>
          <div className="placeholder-card">Travel & Mobility</div>
          <div className="placeholder-card">Entertainment Systems</div>

        </div>

      </section>

    </div>
  );
};

export default Industries;