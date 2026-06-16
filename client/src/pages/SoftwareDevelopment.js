import React from 'react';
import { Link } from 'react-router-dom';

import CodingBackground from '../images/coding-background.mp4';
import SoftwareDeveloper from '../images/software-development.jpg';

import '../styles/SoftwareDevelopment.css';
import '../App.css';


const SoftwareDevelopment = () => {
  return (
<div className='software-container'>
  <header className="software-hero">

  {/* VIDEO BACKGROUND */}
  <video
    className="software-hero-video"
    autoPlay
    loop
    muted
    playsInline
  >
    <source src={CodingBackground} type="video/mp4" />
  </video>

  {/* DARK OVERLAY */}
  <div className="software-hero-overlay"></div>

  {/* TEXT CONTENT */}
  <div className="software-hero-content">
    <h1>Software Development</h1>

    <p>
      Building scalable software systems, platforms,
      and digital solutions designed to solve real-world
      challenges and support long-term innovation.
    </p>
  </div>

</header>

  <section className="software-overview">
    <h2>Building the Foundation of Modern Systems</h2>
      <p>
        Aurizon Technologies designs and develops software systems
        focused on solving operational challenges, improving efficiency,
        and enabling future technologies across industries.
      </p>

      <p>
        From internal tools and automation systems to full-scale platforms,
        our focus is on creating software that is built to evolve, scale,
        and integrate with emerging technologies.
      </p>
  </section>

<section className="software-mid-image">
  <img src={SoftwareDeveloper} alt="Software Development Concept" />
</section>

  <section className="software-grid">

  <h2>Core Development Areas</h2>

  <div className="software-cards">

    <div className="software-card">
      <h3>Web Applications</h3>
      <p>Dynamic, scalable applications built for modern users.</p>
    </div>

    <div className="software-card">
      <h3>Business Systems</h3>
      <p>Internal tools that improve workflows and efficiency.</p>
    </div>

    <div className="software-card">
      <h3>SaaS Platforms</h3>
      <p>Subscription-based systems designed for long-term scalability.</p>
    </div>

    <div className="software-card">
      <h3>Automation Systems</h3>
      <p>Tools that reduce manual processes and increase efficiency.</p>
    </div>

    <div className="software-card">
      <h3>API & Backend Systems</h3>
      <p>Secure and scalable backend architecture and integrations.</p>
    </div>

    <div className="software-card">
      <h3>Future Technologies</h3>
      <p>Experimental systems and research-driven development.</p>
    </div>
    </div>
  </section>
  <section className="software-process">

  <h2>Development Approach</h2>

  <div className="process-software-grid">

    <div className="process-software-card">
      <h3>1</h3>
      <h4>Identify Problem</h4>
      <p>Understand the challenge or opportunity.</p>
    </div>

    <div className="process-software-card">
      <h3>2</h3>
      <h4>Research</h4>
      <p>Explore technologies and possible solutions.</p>
    </div>

    <div className="process-software-card">
      <h3>3</h3>
      <h4>Prototype</h4>
      <p>Build early models and validate ideas.</p>
    </div>

    <div className="process-software-card">
      <h3>4</h3>
      <h4>Develop</h4>
      <p>Turn concepts into functional systems.</p>
    </div>

    <div className="process-software-card">
      <h3>5</h3>
      <h4>Test & Refine</h4>
      <p>Improve performance, usability, and stability.</p>
    </div>

    <div className="process-software-card">
      <h3>6</h3>
      <h4>Deploy & Support</h4>
      <p>Launch and maintain long-term solutions.</p>
    </div>
  </div>
  </section>
  <section className="software-why">
  <h2>Why Aurizon Technologies?</h2>
    <p>
      Aurizon focuses on building technology that is not only functional,
      but adaptable, scalable, and aligned with long-term innovation.
    </p>
    <p>
      We combine research, development, and real-world problem solving
      to create software systems that evolve with technology.
    </p>
</section>
<section className="software-cta">
  <h2>Explore What We're Building</h2>
  <p>
    Discover ongoing research, innovation initiatives,
    and future technology projects at Aurizon.
  </p>
  <Link to="/innovations" className="software-button">
    View Innovations
  </Link>
</section>
</div>
  );
};

export default SoftwareDevelopment;