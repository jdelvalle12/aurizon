import React from 'react';
import { Link } from 'react-router-dom';

import TechConsult from '../images/tech-consult.jpg';
import Consult from '../images/consult.jpg';

import '../styles/TechnologyConsulting.css';
import '../App.css';

const TechnologyConsulting = () => {
  return (
   <div className="consult-container">
   
         {/* HERO */}
         <section className="consult-hero">
   
           <img
             src={TechConsult}
             alt="Technology Consulting"
             className="consult-background"
           />

           <div className="consult-overlay"></div>
   
           <div className="consult-title">
             <h1>Technology Consulting</h1>
              <p>
                Helping organizations navigate technology decisions,
                identify opportunities, and develop strategies that
                support innovation, efficiency, and long-term growth.
              </p>
           </div>
   
         </section>
        {/* INTRODUCTION */}
        <section className="consult-intro">
          <h2>Technology Consulting That Moves Your Business Forward</h2>
            <p>
              Aurizon Technologies helps businesses plan, build, and optimize
              their technology systems. From infrastructure to software strategy,
              we deliver solutions designed to improve performance, scalability,
              and long-term efficiency.
            </p>
        </section>
        <section className="consult-split">
          <div className="consult-split-text">
            <h2>Strategic Technology Guidance</h2>
            <p>
              We don’t just recommend solutions—we align technology decisions
              with your business direction to ensure long-term scalability,
              efficiency, and performance.
            </p>
          </div>
          <img
             src={Consult}
             alt="Consult"
             className="consult-split-image"
           />
        </section>
        <section className="consult-services">
          <h2>What We Help You Solve</h2>

          <div className="consult-service-grid">
            <div className="consult-service-card">
              <h3>IT Strategy & Planning</h3>
              <p>
                Align your technology roadmap with business goals to improve
                efficiency and scalability.
              </p>
            </div>

            <div className="consult-service-card">
              <h3>System Architecture</h3>
              <p>
                Design scalable, secure, and modern infrastructure tailored
                to your organization’s needs.
              </p>
            </div>

            <div className="consult-service-card">
              <h3>Cloud & Infrastructure</h3>
              <p>
                Optimize cloud environments, migrations, and infrastructure
                performance for reliability and growth.
              </p>
            </div>

            <div className="consult-service-card">
              <h3>Digital Transformation</h3>
              <p>
                Modernize outdated systems and processes with efficient,
                future-ready solutions.
              </p>
            </div>
          </div>
        </section>
        <section className="consult-process">
          <h2>How We Work</h2>

          <div className="consult-process-grid">
            <div className="consult-process-card">
              <h3>Discovery</h3>
              <p>Understand your goals and challenges</p>
            </div>

            <div className="consult-process-card">
              <h3>Assessment</h3>
              <p>Evaluate your current systems</p>
            </div>

            <div className="consult-process-card">
              <h3>Strategy</h3>
              <p>Build a clear technical roadmap</p>
            </div>

            <div className="consult-process-card">
              <h3>Execution</h3>
              <p>Implement and support solutions</p>
            </div>
          </div>
        </section>
        <section className="consult-cta">
          <h2>Ready to Improve Your Technology Strategy?</h2>
          <p>Let’s build systems that support your growth and scalability.</p>

          <Link to="/innovations" className="consulting-button">
            Explore Innovations
          </Link>
        </section>
    </div>
  );
};

export default TechnologyConsulting;