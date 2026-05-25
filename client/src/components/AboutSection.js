import React from 'react';

import '../styles/AboutSection.css';

import DigitalVideo from '../images/digital-motion.mp4';

const AboutSection = () => {
  return (

    <section className="about-section">

      <div className="about-content">

        {/* TEXT SIDE */}
        <div className="about-text">

          <h2>Who We Are</h2>

          <p>
            Aurizon Technologies was founded with a vision of combining innovation, 
            technology, and long-term growth to build meaningful digital solutions. 
          </p>

          <p>
            Built on full stack development, technical problem-solving, and a passion 
            for continuous learning, we support businesses through software development, 
            IT support, and technology guidance while investing in research and development 
            for the future.
          </p>

        </div>

        {/* MEDIA SIDE */}
        <div className="about-media">

          <video
            src={DigitalVideo}
            autoPlay
            loop
            muted
            className="about-video"
          />

        </div>

      </div>

    </section>

  );
};

export default AboutSection;