import React from 'react';
import { Link } from 'react-router-dom';

import SolutionsBackground from '../images/solutions-background.jpg';
import TechnologyMeeting from '../images/technology-meeting.jpg';

import '../styles/Solutions.css';
import '../App.css';
import {
  FaCode,
  FaHeadset,
  FaShieldAlt,
  FaCloud,
  FaChartLine,
  FaRocket
} from 'react-icons/fa';

const Solutions = () => {
  return (
    <div className="solutions-container">

      {/* HERO */}
      <section className="solutions-hero">

        <img
          src={SolutionsBackground}
          alt="Technology Solutions"
          className="solutions-background"
        />

        <div className="solutions-overlay"></div>

        <div className="solutions-title">
          <h1>Solutions</h1>

          <p>
            Technology solutions designed to support growth,
            innovation, and long-term success.
          </p>
        </div>

      </section>

      {/* INTRODUCTION */}
      <section className="solutions-intro">

        <h2>Technology Built Around Your Goals</h2>

        <p>
          Every organization faces unique challenges. Aurizon works
          alongside businesses and organizations to identify
          opportunities, solve problems, and implement technology
          solutions that create meaningful results.
        </p>

      </section>

      {/* SOLUTIONS GRID */}
<section className="solutions-grid">

  <Link to="/solutions/software-development" className="solution-card">
    <FaCode className="solution-icon" />
    <h3>Software Development</h3>
    <p>
      Custom applications and software solutions designed
      to improve efficiency and support growth.
    </p>
  </Link>

  <Link to="/solutions/research-development" className="solution-card">
    <FaRocket className="solution-icon" />
    <h3>Research & Development</h3>
    <p>
      Exploring emerging technologies and future-focused
      solutions designed to help organizations remain
      competitive in a changing world.
    </p>
  </Link>

  <Link to="/solutions/it-support" className="solution-card">
    <FaHeadset className="solution-icon" />
    <h3>IT Support</h3>
    <p>
      Technical assistance, troubleshooting, and
      technology support services.
    </p>
  </Link>

  <Link to="/solutions/cybersecurity" className="solution-card">
    <FaShieldAlt className="solution-icon" />
    <h3>Cybersecurity</h3>
    <p>
      Security-focused solutions designed to help
      organizations reduce risk.
    </p>
  </Link>

  <Link to="/solutions/cloud-infrastructure" className="solution-card">
    <FaCloud className="solution-icon" />
    <h3>Cloud & Infrastructure</h3>
    <p>
      Scalable infrastructure and cloud technologies
      that support future growth.
    </p>
  </Link>

  <Link to="/solutions/technology-consulting" className="solution-card">
    <FaChartLine className="solution-icon" />
    <h3>Technology Consulting</h3>
    <p>
      Strategic guidance and planning to help
      organizations make informed technology decisions.
    </p>
  </Link>

</section>

        <section className="solutions-overview">

          <h2>Built for Today. Designed for Tomorrow.</h2>

          <p>
            Technology evolves rapidly. Our goal is to help
            organizations adopt solutions that solve current
            challenges while preparing for future opportunities.
          </p>

        </section>

      {/* WHY AURIZON */}
      <section className="solutions-section">

        <img
          src={TechnologyMeeting}
          alt="Technology Consultation"
          className="solutions-image"
        />

        <div className="solutions-text">

          <h2>Why Choose Aurizon?</h2>

          <p>
            We focus on understanding your goals first and
            technology second. Every recommendation is designed
            around helping your organization operate more
            effectively and prepare for future growth.
          </p>

          <p>
            Our mission is to combine innovation, practicality,
            and long-term thinking to create solutions that
            deliver real value.
          </p>

        </div>

      </section>

      {/* PROCESS */}
      <section className="solutions-process">

        <h2>Our Process</h2>
          <p className="process-intro">
            Every solution begins with understanding your goals.
            Our process is designed to identify challenges,
            develop practical strategies, and provide long-term
            support for continued success.
          </p>
        <div className="process-grid">
                    
          <div className="process-card">
            <h3>1</h3>
            <h4>Discovery</h4>
            <p>Understand your goals and challenges.</p>
            <span className="process-arrow">→</span>
          </div>
          <div className="process-card">
            <h3>2</h3>
            <h4>Assessment</h4>
            <p>Evaluate opportunities and requirements.</p>
          <span className="process-arrow">→</span>
          </div>
          <div className="process-card">
            <h3>3</h3>
            <h4>Strategy</h4>
            <p>Create a technology roadmap.</p>
          <span className="process-arrow">→</span>
          </div>
          <div className="process-card">
            <h3>4</h3>
            <h4>Implementation</h4>
            <p>Deploy and execute solutions.</p>
          <span className="process-arrow">→</span>
          </div>
          <div className="process-card">
            <h3>5</h3>
            <h4>Optimization</h4>
            <p>Improve performance and efficiency.</p>
          <span className="process-arrow">→</span>
          </div>
          <div className="process-card">
            <h3>6</h3>
            <h4>Support</h4>
            <p>Provide ongoing assistance and guidance.</p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="solutions-cta">

        <h2>Ready to Explore New Possibilities?</h2>

        <p>
          Let's discuss how technology can help support your goals.
        </p>

        <a href="/contact" className="solutions-button">
          Contact Us
        </a>

      </section>

    </div>
  );
};

export default Solutions;