import React from 'react';
import TechInnovations from '../images/tech-innovations.mp4';
import '../styles/Innovations.css';

const Innovation = () => {
  return (
    <div className="innovations-page">

   {/* HERO */}
<header className="innovations-hero">

  <video
    autoPlay
    loop
    muted
    playsInline
    className="innovations-video"
  >
    <source src={TechInnovations} type="video/mp4" />
  </video>

  <div className="innovations-overlay"></div>

  <div className="innovations-content">
    <h1>Innovation & Research</h1>

    <p>
      Exploring emerging technologies and building the foundation for
      future digital systems, education platforms, and intelligent tools.
    </p>
  </div>

</header>

      {/* FOCUS AREAS */}
      <section className="innovations-section">
        <h2>Focus Areas</h2>

        <div className="innovations-grid">

          <div className="innovations-card">
            <h3>Software Innovation</h3>
            <p>Scalable applications, SaaS concepts, and modern system design.</p>
          </div>

          <div className="innovations-card">
            <h3>IT Literacy & Education</h3>
            <p>Building learning systems that simplify technology understanding.</p>
          </div>

          <div className="innovations-card">
            <h3>Cybersecurity Research</h3>
            <p>Exploring digital safety, protection systems, and awareness tools.</p>
          </div>

          <div className="innovations-card">
            <h3>Cloud & Infrastructure</h3>
            <p>Scalable systems, deployment architecture, and backend systems.</p>
          </div>

          <div className="innovations-card">
            <h3>Developer Tools</h3>
            <p>Future tools for developers, workflows, and productivity systems.</p>
          </div>

          <div className="innovations-card">
            <h3>AI & Intelligent Systems</h3>
            <p>Automation, smart assistants, and support system concepts.</p>
          </div>

        </div>
      </section>

      <section className="innovations-roadmap">
  <h2>Future Projects</h2>

  <div className="roadmap-grid">

    <div className="roadmap-card">
      <h3>Phase 1 — Foundation</h3>
      <ul>
        <li>Aurizon Support System (IT Assistance Tool)</li>
        <li>Mosaic SaaS Evolution</li>
      </ul>
    </div>

    <div className="roadmap-card">
      <h3>Phase 2 — Platforms</h3>
      <ul>
        <li>Aurizon University (Tech Education Platform)</li>
        <li>Developer Productivity Tools</li>
      </ul>
    </div>

    <div className="roadmap-card">
      <h3>Phase 3 — Expansion</h3>
      <ul>
        <li>Industry-Specific Software Systems</li>
        <li>Future Hardware Concepts</li>
      </ul>
    </div>

  </div>
</section>

      {/* PROCESS */}
      <section className="innovations-process">
        <h2>Innovation Process</h2>

        <div className="process-grid">

          <div className="process-step">
            <h3>1. Identify Problem</h3>
            <p>Understand inefficiencies in real-world systems.</p>
          </div>

          <div className="process-step">
            <h3>2. Research</h3>
            <p>Explore existing technologies and solutions.</p>
          </div>

          <div className="process-step">
            <h3>3. Prototype</h3>
            <p>Build early concepts and test functionality.</p>
          </div>

          <div className="process-step">
            <h3>4. Improve</h3>
            <p>Refine based on usability and performance.</p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="innovations-case-study">
        <h2>Building the Future of Aurizon</h2>
        <p>Innovation is an ongoing process of exploration and execution.</p>

        <a href="/casestudies" className="case-study-button">
          Case Studies
        </a>
      </section>

    </div>
  );
};

export default Innovation;