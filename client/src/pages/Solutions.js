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
          Technology is constantly evolving. Aurizon Technologies
          researches, develops, and supports solutions designed
          to address real-world challenges while preparing for
          future opportunities.
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

{/* SOLUTIONS PHILOSOPHY */}

<section className="solutions-philosophy">

  <h2>More Than Services</h2>

  <div className="philosophy-content">

    <p>
      Aurizon solutions combine research, development,
      technical expertise, and real-world application
      to address challenges across industries and
      emerging technologies.
    </p>

    <p>
      From software platforms and cybersecurity initiatives
      to infrastructure, education, and future-focused
      innovations, every solution is designed with
      long-term impact in mind.
    </p>

  </div>

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
            Aurizon Technologies combines research,
            development, innovation, and technical expertise
            to create practical solutions for today's challenges
            and tomorrow's opportunities.
          </p>

          <p>
            Our focus is on building technologies,
            supporting users, and exploring new ideas that
            drive meaningful progress.
          </p>

        </div>

      </section>

      {/* PROCESS */}
      <section className="solutions-process">

        <h2>Our Process</h2>
          <p className="process-intro">
            Every solution begins with identifying a challenge.
            Through research, development, testing, and support,
            Aurizon transforms ideas into practical technologies
            designed to create long-term value.
          </p>
        <div className="process-grid">
                    
          <div className="process-card">
            <h3>1</h3>
            <h4>Identify Problem</h4>
            <p>Recognize challenges and opportunities.</p>
            <span className="process-arrow">→</span>
          </div>

          <div className="process-card">
            <h3>2</h3>
            <h4>Research</h4>
            <p>Explore technologies, systems, and approaches.</p>
            <span className="process-arrow">→</span>
          </div>

          <div className="process-card">
            <h3>3</h3>
            <h4>Prototype</h4>
            <p>Develop concepts and early solutions.</p>
            <span className="process-arrow">→</span>
          </div>

          <div className="process-card">
            <h3>4</h3>
            <h4>Develop</h4>
            <p>Transform ideas into functional technologies.</p>
            <span className="process-arrow">→</span>
          </div>

          <div className="process-card">
            <h3>5</h3>
            <h4>Deploy</h4>
            <p>Launch, implement, and refine solutions.</p>
            <span className="process-arrow">→</span>
          </div>

          <div className="process-card">
            <h3>6</h3>
            <h4>Support</h4>
            <p>Provide ongoing assistance and improvements.</p>
          </div>
        </div>

      </section>

      {/* CTA */}
      <section className="solutions-cta">

        <h2>Ready to Explore New Possibilities?</h2>

        <p>
          Explore the technologies, research initiatives,
          and future-focused solutions shaping the next generation
          of innovation.
        </p>

        <a href="/innovation" className="solutions-button">
          Explore Innovations
        </a>

      </section>

    </div>
  );
};

export default Solutions;