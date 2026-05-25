import React from 'react';
import '../styles/SubscribeSection.css';

const SubscribeSection = () => {
  return (
    <section className="subscribe-section">

      <h2 className="section-title">Stay Connected</h2>

      <p className="section-description">
        Get updates on Aurizon Technologies,
        new insights, and upcoming innovations.
      </p>

      <form className="subscribe-form">

        <input
          type="email"
          placeholder="Enter your email"
        />

        <button type="submit" className="subscribe-button">
          Subscribe
        </button>

      </form>

    </section>
  );
};

export default SubscribeSection;