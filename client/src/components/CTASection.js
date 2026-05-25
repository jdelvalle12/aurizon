import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/CTASection.css';

const CTASection = () => {

  return (

    <section className="cta-section">

  <h2>
    Technology Built for the Future
  </h2>

  <p>
    Helping organizations build, scale,
    and innovate through modern technology solutions.
  </p>

  <Link to="/contact" className="primary-btn">
    Contact Us
  </Link>

</section>

  );
};

export default CTASection;