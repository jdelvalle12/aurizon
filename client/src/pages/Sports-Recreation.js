import React from 'react';
import { Link } from 'react-router-dom';

import StadiumCrowd from '../images/stadium-crowd.mp4';
import FitnessCenter from '../images/fitness-center.jpg';
import ChallengeArena from '../images/esports-arena.jpg';
import CoachTablet from '../images/coach-tablet.jpg';

import {
  FaRunning,
  FaDumbbell,
  FaChartLine,
  FaCloud,
  FaLock,
  FaMobileAlt
} from 'react-icons/fa';

import '../styles/Sports-Recreation.css';
import '../App.css';

const SportsRecreation = () => {
  return (
    <div className="sports-page">     
      <header className="sports-hero">
     
       <video
        autoPlay
        loop
        muted
        playsInline
        className="sports-video"
        >
        <source src={StadiumCrowd} type="video/mp4" />
        </video>
          <div className="sports-overlay"></div>
            <div className="sports-hero-content">
              <h1>Sports & Recreation</h1>
                <p>
                  Empowering sports and recreation organizations through
                  secure technology, digital innovation, cloud platforms,
                  and exceptional fan and participant experiences.
                </p>
            </div>     
      </header>

      {/* OVERVIEW */}
      <section className="sports-overview">
        <h2>Supporting the Future of Sports & Recreation</h2>
          <p>
            The sports and recreation industry relies on modern
            technology to enhance fan engagement, improve athletic
            performance, manage facilities, and support large-scale
            events. From professional sports organizations and
            recreation centers to fitness facilities and esports,
            technology plays a vital role in creating connected
            experiences.
            Aurizon Technologies helps organizations modernize
            operations through cloud infrastructure,
            cybersecurity, software development,
            IT support, and technology consulting,
            enabling secure, scalable, and innovative
            solutions.
          </p>
      </section>
      {/* IMAGE */}
            <section className="sports-image-section">      
              <img
                src={FitnessCenter}
                alt="Fitness Center"
                className="sports-image"
              />      
            </section>
      
            {/* FOCUS AREAS */}
            <section className="sports-areas">      
              <h2>Sports & Recreation Technology Focus Areas</h2>
      
              <div className="sports-grid">
                <div className="sports-card">
                  <FaRunning className="sports-icon" />
                  <h3>Sport Management Systems</h3>
                  <p>
                    Digital platforms supporting scheduling, operations,
                    venue management, and organizational administration.
                  </p>
                </div>
      
                <div className="sports-card">
                  <FaDumbbell className="sports-icon" />
                  <h3>Fan Engagement</h3>
                  <p>Interactive websites, mobile apps, loyalty programs,
                     and digital experiences that connect with fans.
                  </p>
                </div>
      
                <div className="sports-card">
                  <FaChartLine className="sports-icon" />
                  <h3>Performance Analytics</h3>
                  <p> 
                    Data-driven insights that help improve athlete
                    performance and organizational decision-making.
                  </p>
                </div>
      
                <div className="sports-card">
                  <FaCloud className="sports-icon" />
                  <h3>Cloud Infrastructure</h3>
                  <p>
                    Scalable cloud environments supporting sports
                    organizations, venues, and digital platforms.
                  </p>
                </div>
      
                <div className="sports-card">
                  <FaLock className="sports-icon" />
                  <h3>Cybersecurity</h3>
                  <p> 
                    Protecting athlete, customer, and organizational
                    data from evolving cyber threats.
                  </p>
                </div>
      
                <div className="sports-card">
                  <FaMobileAlt className="sports-icon" />
                  <h3>Digital Experience</h3>
                  <p>
                    Modern technologies that enhance ticketing,
                    streaming, mobile services, and fan interaction.
                  </p>
                </div>      
              </div>      
            </section>

      {/* IMAGE */}
            <section className="sports-image-section">      
              <img
                src={ChallengeArena}
                alt="Esports Arena"
                className="sports-image"
              />      
            </section>

      {/* CHALLENGES */}
            <section className="sports-challenges">      
              <h2>Industry Challenges</h2>      
              <div className="sports-grid">
      
             <div className="sports-card">
                <h3>Fan Engagement</h3>
                <p>
                  Meeting growing expectations for personalized,
                  connected, and interactive fan experiences
                </p>
              </div>
      
              <div className="sports-card">
                <h3>Cybersecurity</h3>
                <p>
                  Protecting customer information, payment systems,
                  and organizational data.
                </p>
              </div>
      
              <div className="sports-card">
                <h3>Facility Management</h3>
                <p>
                  Maintaining smart venues, connected facilities,
                  and reliable technology infrastructure.
                </p>
              </div>
      
              <div className="sports-card">
                <h3>Data & Performance Analytics</h3>
                <p>
                  Collecting and analyzing performance and operational
                  data to support better decisions.
                </p>
              </div>
      
              <div className="sports-card">
                <h3>Scalability During Major Events</h3>
                <p>
                  Supporting high traffic volumes during games,
                  tournaments, and large sporting events.
                </p>
              </div>
      
              <div className="sports-card">
                <h3>Digital Transformations</h3>
                <p>
                  Modernizing legacy systems while adopting emerging
                  technologies across sports organizations.
                </p>
              </div>      
              </div>      
            </section>
      
            {/* WHY SECTION */}
            <section className="sports-why">
      
              <div className="sports-why-content">
      
                <div className="sports-why-text">
                  <h2>Why Aurizon Technologies?</h2>
                    <p>
                      Aurizon Technologies helps sports and recreation
                      organizations modernize operations through cloud
                      platforms, cybersecurity, software development,
                      IT support, and technology consulting. Our focus
                      is on creating secure, scalable, and innovative
                      solutions that enhance fan engagement, improve
                      operational efficiency, and support long-term
                      growth.
                    </p>
                </div>
      
                <div className="sports-why-image">
                  <img
                    src={CoachTablet}
                    alt="Coach using a tablet"
                  />
                </div>
      
              </div>
      
            </section>
      
            {/* CTA */}
            <section className="sports-cta">      
              <h2>Explore Sports & Recreation Solutions</h2>      
                <p> 
                  Discover how Aurizon Technologies helps
                  sports and recreation organizations
                  modernize technology, strengthen security,
                  and enhance fan and participant experiences.
                </p>
      
              <Link to="/solutions" className="sports-button">
                View Solutions
              </Link>
      
            </section>
    </div>
  );
};

export default SportsRecreation;