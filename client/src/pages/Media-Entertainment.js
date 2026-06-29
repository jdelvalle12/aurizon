import React from 'react';
import { Link } from 'react-router-dom';

import RecordingStudio from '../images/recording-studio.mp4';
import BroadcastStudio from '../images/tv-broadcast-studio.jpg';
import ChallengeArena from '../images/esports-arena.jpg';
import FilmStudio from '../images/film-production.jpg';

import {
  FaFilm,
  FaBroadcastTower,
  FaCloud,
  FaLock,
  FaChartLine,
  FaMobileAlt
} from 'react-icons/fa';

import '../styles/Media-Entertainment.css';
import '../App.css';

const MediaEntertainment = () => {
  return (
    <div className="media-page">     
      <header className="media-hero">
     
       <video
        autoPlay
        loop
        muted
        playsInline
        className="media-video"
        >
        <source src={RecordingStudio} type="video/mp4" />
        </video>
          <div className="media-overlay"></div>
            <div className="media-hero-content">
              <h1>Media & Entertainment</h1>
                <p>
                  Empowering media and entertainment organizations through
                  secure technology, digital innovation, cloud platforms,
                  and engaging audience experiences.
                </p>
            </div>     
      </header>

      {/* OVERVIEW */}
      <section className="media-overview">
        <h2>Supporting the Future of Media & Entertainment</h2>
          <p>
            The media and entertainment industry continues to evolve
            through digital streaming, content creation, broadcasting,
            gaming, live events, and immersive experiences. Organizations
            must deliver engaging content while maintaining secure,
            scalable, and reliable technology infrastructures.
            Aurizon Technologies helps media organizations modernize
            operations through cloud computing, cybersecurity,
            software development, IT support, and technology consulting,
            enabling efficient content delivery and exceptional
            audience experiences.
          </p>
      </section>
      {/* IMAGE */}
            <section className="media-image-section">      
              <img
                src={BroadcastStudio}
                alt="TV Broadcast Studio"
                className="media-image"
              />      
            </section>
      
            {/* FOCUS AREAS */}
            <section className="media-areas">      
              <h2>Media & Entertainment Technology Focus Areas</h2>
      
              <div className="media-grid">
                <div className="media-card">
                  <FaFilm className="media-icon" />
                  <h3>Content Production</h3>
                  <p>Technology supporting creative workflows and production teams.</p>
                </div>
      
                <div className="media-card">
                  <FaBroadcastTower className="media-icon" />
                  <h3>Streaming Platforms</h3>
                  <p>Reliable digital platforms delivering content worldwide.</p>
                </div>
      
                <div className="media-card">
                  <FaChartLine className="media-icon" />
                  <h3>Audience Analytics</h3>
                  <p>Using data to understand audience engagement and performance.</p>
                </div>
      
                <div className="media-card">
                  <FaCloud className="media-icon" />
                  <h3>Cloud Infrastructure</h3>
                  <p>Scalable systems supporting media production and distribution.</p>
                </div>
      
                <div className="media-card">
                  <FaLock className="media-icon" />
                  <h3>Cybersecurity</h3>
                  <p>Protecting digital assets, intellectual property, and customer information.</p>
                </div>
      
                <div className="media-card">
                  <FaMobileAlt className="media-icon" />
                  <h3>Digital Experience</h3>
                  <p>Interactive applications that connect audiences with content.</p>
                </div>      
              </div>      
            </section>

      {/* IMAGE */}
            <section className="media-image-section">      
              <img
                src={ChallengeArena}
                alt="Esports Arena"
                className="media-image"
              />      
            </section>

      {/* CHALLENGES */}
            <section className="media-challenges">      
              <h2>Industry Challenges</h2>      
              <div className="media-grid">
      
             <div className="media-card">
                <h3>Content Security</h3>
                <p>Protecting digital media and intellectual property.</p>
              </div>
      
              <div className="media-card">
                <h3>Audience Expectations</h3>
                <p>Delivering seamless experiences across multiple platforms.</p>
              </div>
      
              <div className="media-card">
                <h3>Legacy Infrastructure</h3>
                <p>Modernizing aging production and broadcasting systems.</p>
              </div>
      
              <div className="media-card">
                <h3>Digital Distribution</h3>
                <p>Supporting reliable global content delivery.</p>
              </div>
      
              <div className="media-card">
                <h3>Scalability</h3>
                <p>Managing high-demand streaming and live events.</p>
              </div>
      
              <div className="media-card">
                <h3>Emerging Technologies</h3>
                <p>Adapting to AI, immersive media, and evolving digital platforms.</p>
              </div>      
              </div>      
            </section>
      
            {/* WHY SECTION */}
            <section className="media-why">
      
              <div className="media-why-content">
      
                <div className="media-why-text">
                  <h2>Why Aurizon Technologies?</h2>
                  <p>
                    Aurizon Technologies helps media and entertainment
                    organizations modernize production environments,
                    strengthen cybersecurity, optimize cloud
                    infrastructure, and develop scalable digital
                    platforms. Our focus is on supporting secure,
                    reliable, and engaging experiences that help
                    organizations innovate and reach audiences
                    around the world.
                  </p>
                </div>
      
                <div className="media-why-image">
                  <img
                    src={FilmStudio}
                    alt="Film Studio Team"
                  />
                </div>
      
              </div>
      
            </section>
      
            {/* CTA */}
            <section className="media-cta">      
              <h2>Explore Media & Entertainment Solutions</h2>      
                <p> 
                  Discover how Aurizon Technologies helps media
                  organizations modernize technology, protect
                  digital content, and deliver exceptional
                  audience experiences.
                </p>
      
              <Link to="/solutions" className="media-button">
                View Solutions
              </Link>
      
            </section>
    </div>
  );
};

export default MediaEntertainment;