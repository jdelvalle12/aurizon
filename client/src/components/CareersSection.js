import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/CareersSection.css';

const Careers = () => {

  return (

    <section className="careers-section">

      <div className="careers-container">

        <h2>
          Future Opportunities
        </h2>

        <p>
          Aurizon Technologies is building toward future
          growth across software, IT solutions, innovation,
          and emerging technologies. Explore opportunities
          and stay connected as we continue expanding.
        </p>

        <Link to="/careers" className="careers-btn">
          Explore Careers
        </Link>

      </div>

    </section>

  );
};

export default Careers;