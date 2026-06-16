import React from 'react';
import { Link } from 'react-router-dom';

import ResearchVideo from '../images/node-waves.mp4';

import '../styles/ResearchDevelopment.css';
import '../App.css';

const ResearchDevelopment = () => {
  return (
    <div className="research-container">

      {/* HERO */}
      <header className="research-hero">

        <video
          autoPlay
          muted
          loop
          playsInline
          className="research-video"
        >
          <source src={ResearchVideo} type="video/mp4" />
        </video>

        <div className="research-overlay"></div>

        <div className="research-hero-content">
          <h1>Research & Development</h1>

          <p>
            Exploring emerging technologies, developing innovative
            solutions, and building the foundation for future
            digital systems.
          </p>
        </div>

      </header>

      {/* OVERVIEW */}
      <section className="research-overview">

        <h2>Driving Innovation Through Research</h2>

        <p>
          Aurizon Technologies invests in research, experimentation,
          and technology exploration to identify new opportunities
          and solve complex challenges.
        </p>

        <p>
          Our focus extends beyond today's solutions, examining
          emerging technologies that have the potential to transform
          industries and improve the way people interact with technology.
        </p>

      </section>

      {/* IMAGE SECTION */}
      <section className="research-image-section">

        <div className="flow-line"></div>

      </section>

      {/* FOCUS AREAS */}
      <section className="research-focus">

        <h2>Research Focus Areas</h2>

        <div className="research-grid">

          <div className="research-card">
            <h3>Emerging Technologies</h3>
            <p>
              Researching technologies that have the potential
              to reshape industries and create new opportunities.
            </p>
          </div>

          <div className="research-card">
            <h3>Artificial Intelligence</h3>
            <p>
              Exploring intelligent systems, automation,
              and future AI applications.
            </p>
          </div>

          <div className="research-card">
            <h3>Cybersecurity Innovation</h3>
            <p>
              Investigating security-focused technologies
              designed to strengthen digital resilience.
            </p>
          </div>

          <div className="research-card">
            <h3>Developer Platforms</h3>
            <p>
              Exploring tools and environments that improve
              development workflows and productivity.
            </p>
          </div>

          <div className="research-card">
            <h3>Technology Education</h3>
            <p>
              Research supporting digital literacy and future
              technology learning initiatives.
            </p>
          </div>

          <div className="research-card">
            <h3>Future Systems</h3>
            <p>
              Long-term exploration of next-generation software,
              infrastructure, and digital ecosystems.
            </p>
          </div>

        </div>

      </section>

      <section className="research-image-section">

        <div className="flow-line"></div>

      </section>

      {/* PROCESS */}
      <section className="research-process">

        <h2>Research Methodology</h2>

        <div className="research-process-grid">

          <div className="research-process-card">
            <h3>1</h3>
            <h4>Observe</h4>
            <p>Identify challenges and emerging opportunities.</p>
          </div>

          <div className="research-process-card">
            <h3>2</h3>
            <h4>Analyze</h4>
            <p>Study trends, technologies, and industry needs.</p>
          </div>

          <div className="research-process-card">
            <h3>3</h3>
            <h4>Experiment</h4>
            <p>Test concepts and evaluate possibilities.</p>
          </div>

          <div className="research-process-card">
            <h3>4</h3>
            <h4>Prototype</h4>
            <p>Transform ideas into early-stage solutions.</p>
          </div>

          <div className="research-process-card">
            <h3>5</h3>
            <h4>Evaluate</h4>
            <p>Measure effectiveness and refine concepts.</p>
          </div>

          <div className="research-process-card">
            <h3>6</h3>
            <h4>Evolve</h4>
            <p>Advance ideas into future technologies.</p>
          </div>

        </div>

      </section>

      {/* WHY R&D */}
      <section className="research-why">

        <h2>Why Research Matters</h2>

        <p>
          Innovation begins with curiosity. Research allows us
          to explore ideas, challenge assumptions, and identify
          opportunities that may shape future technology solutions.
        </p>

        <p>
          Through continuous exploration and experimentation,
          Aurizon seeks to create technologies that deliver
          meaningful long-term impact.
        </p>

      </section>

      {/* CTA */}
      <section className="research-cta">

        <h2>Explore Future Projects</h2>

        <p>
          Discover ongoing innovation initiatives and emerging
          technologies being explored at Aurizon Technologies.
        </p>

        <Link to="/innovation" className="research-button">
          View Innovation
        </Link>

      </section>

    </div>
  );
};

export default ResearchDevelopment;