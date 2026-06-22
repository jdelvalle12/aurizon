import React from 'react';
import {Link} from 'react-router-dom';

import TechChip from '../images/computer-chip.mp4';
import TechWorkspace from '../images/tech-meet.jpg';
import TechChallenges from '../images/digital-challenges.jpg';
import Ideas from '../images/ideas.jpg';

import '../styles/Technology.css';
import '../App.css';

const Technology = () => {
  return (
    <div className="technology-page">

      <header className="technology-hero">

        <video
          autoPlay
          loop
          muted
          playsInline
          className="technology-video"
        >
          <source src={TechChip} type="video/mp4" />
        </video>

        <div className="technology-overlay"></div>

        <div className="technology-hero-content">

          <h1>Technology Industry</h1>

          <p>
            Supporting technology organizations through
            innovation, infrastructure, cybersecurity,
            software development, and strategic consulting.
          </p>

        </div>

      </header>

      <section className="technology-overview">

        <h2>Driving Innovation Through Technology</h2>

        <p>
          The technology industry continues to shape the
          future through software, infrastructure,
          cybersecurity, cloud computing, artificial
          intelligence, and emerging technologies.
        </p>

        <p>
          Organizations must balance innovation,
          scalability, security, and operational
          efficiency while adapting to rapidly
          changing technology landscapes.
        </p>

      </section>

      <section className="technology-image-section">

        <img
          src={TechWorkspace}
          alt="Technology professionals collaborating on digital innovation"
          className="technology-image"
        />

      </section>

      <section className="technology-areas">

        <h2>Technology Focus Areas</h2>

        <div className="technology-grid">

          <div className="technology-card">
            <h3>Software Development</h3>
            <p>Building scalable digital platforms and applications.</p>
          </div>

          <div className="technology-card">
            <h3>Cybersecurity</h3>
            <p>Protecting systems, networks, and sensitive data.</p>
          </div>

          <div className="technology-card">
            <h3>Cloud Infrastructure</h3>
            <p>Supporting modern cloud and infrastructure environments.</p>
          </div>

          <div className="technology-card">
            <h3>Research & Development</h3>
            <p>Exploring emerging technologies and future innovations.</p>
          </div>

          <div className="technology-card">
            <h3>Technology Consulting</h3>
            <p>Providing strategic guidance and planning.</p>
          </div>

          <div className="technology-card">
            <h3>IT Support</h3>
            <p>Ensuring reliable technology operations and support.</p>
          </div>

        </div>

      </section>
      <section className="technology-image-section">

        <img
          src={TechChallenges}
          alt="Modern technology infrastructure and innovation"
          className="technology-image"
        />

      </section>

     <section className="technology-challenges">

      <h2>Industry Challenges</h2>

      <div className="technology-grid">

        <div className="technology-card">
          <h3>Rapid Innovation</h3>
          <p>Keeping pace with evolving technologies.</p>
        </div>

        <div className="technology-card">
          <h3>Cyber Threats</h3>
          <p>Protecting critical systems and data.</p>
        </div>

        <div className="technology-card">
          <h3>Scalability</h3>
          <p>Supporting growth without sacrificing performance.</p>
        </div>

        <div className="technology-card">
          <h3>Infrastructure Management</h3>
          <p>Maintaining reliable and efficient systems.</p>
        </div>

        <div className="technology-card">
          <h3>Talent Acquisition</h3>
            <p>
              Attracting and retaining skilled technology
              professionals in a competitive market.
            </p>
        </div>

        <div className="technology-card">
          <h3>Emerging Technologies</h3>
            <p>
              Evaluating and adopting new technologies while
              balancing risk, cost, and business value.
            </p>
        </div>

      </div>

    </section>

    <section className="technology-why">

      <div className="technology-why-content">

        <div className="technology-why-text">
          <h2>Why Aurizon Technologies?</h2>

          <p>
            Aurizon Technologies combines research,
            innovation, software development,
            cybersecurity, and infrastructure expertise...
          </p>

          <p>
            Our focus is on creating scalable,
            future-ready solutions...
          </p>
        </div>

        <div className="technology-why-image">
          <img
            src={Ideas}
            alt="Technology innovation and collaboration"
          />
        </div>

      </div>

    </section>
    <section className="technology-cta">

      <h2>Explore Our Solutions</h2>

      <p>
        Discover how Aurizon Technologies helps
        organizations innovate, secure, and scale.
      </p>

      <Link
        to="/solutions"
        className="technology-button"
      >
        View Solutions
      </Link>

    </section>
    </div>
  );
};

export default Technology;