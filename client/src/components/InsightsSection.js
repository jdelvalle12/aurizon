import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/InsightsSection.css';

const InsightsSection = () => {
  return (
    <section className="insights-section">

      <h2 className="section-title">Insights</h2>

      <p className="section-description">
        Stay updated with Aurizon’s latest thinking on
        technology, innovation, and digital transformation.
      </p>

      <div className="insights-grid">

        {/* Placeholder cards (future blog posts) */}
        <div className="insight-card">
          <h3>Coming Soon</h3>
          <p>
            We’re preparing insights on software engineering,
            cybersecurity, and modern infrastructure.
          </p>
        </div>

        <div className="insight-card">
          <h3>Coming Soon</h3>
          <p>
            Industry trends, technical breakdowns, and
            Aurizon updates will appear here.
          </p>
        </div>

      </div>

      <Link to="/insights" className="primary-btn">
        View All Insights
      </Link>

    </section>
  );
};

export default InsightsSection;