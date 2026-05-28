import React from 'react';

import Innovation from '../images/innovation.jpg';
import Passion from '../images/passion.jpg';
import Vision from '../images/vision.jpg';
import History from '../images/history-2.jpg';

import Culture from '../images/our-culture-video.mp4';

import TransparencyIcon from '../images/transparency.png';
import DiversityIcon from '../images/diversity.png';
import TeamworkIcon from '../images/teamwork.png';
import GrowthIcon from '../images/personal-growth.png';
import InnovationIcon from '../images/innovation-value.png';
import AutonomyIcon from '../images/autonomy.png';

import Team from '../components/Team.js';
import Timeline from '../components/Timeline.js';
import FAQ from '../components/FAQ.js';

import '../App.css';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-container">

      {/* HERO */}
      <video
        src={Culture}
        autoPlay
        loop
        muted
        playsInline
        className="about-background-video"
      />

      <div className="content-container">
        <h1>Who We Are</h1>
        <h2>Building Technology for the Future</h2>
        <p>
          Aurizon Technologies is a future-focused technology company
          dedicated to building scalable systems, digital ecosystems,
          and innovative solutions that empower growth across industries.
        </p>
      </div>

      {/* STORY */}
      <section className="about-our-story">
        <div className="story-description">
          <h2>Our Story</h2>

          <p>
            Aurizon Technologies was founded with a vision to explore the
            limitless potential of technology and innovation. What began as
            a passion for building and problem-solving evolved into a broader
            mission focused on creating scalable digital solutions, empowering
            collaboration, and supporting long-term technological growth.
          </p>

          <p>
            Today, Aurizon continues to evolve as a growing ecosystem centered
            around innovation, infrastructure, digital systems, and emerging
            technologies. Through continuous learning and strategic development,
            the company aims to create impactful solutions that adapt to an
            ever-changing digital landscape.
          </p>
        </div>

        <img
          src={Innovation}
          alt="Aurizon innovation concept illustration"
          className="innovation"
        />
      </section>

      {/* MISSION */}
      <section className="about-our-mission">
        <img
          src={Passion}
          alt="Aurizon mission and passion illustration"
          className="passion"
        />

        <div className="mission-description">
          <h2>Our Mission</h2>

          <p>
            Our mission is to build scalable technology solutions that help
            individuals, businesses, and future innovators navigate the
            evolving digital world. We believe technology should create
            opportunities, encourage collaboration, and inspire progress.
          </p>

          <p>
            Aurizon Technologies is committed to continuous innovation,
            long-term growth, and building an ecosystem where ideas,
            creativity, and technology can thrive together.
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="about-our-value">
        <h2>Our Values</h2>

        <p>
          At Aurizon, our culture is guided by core values:
        </p>

        <ul>
          <li>
            <img className="value-icon" src={TransparencyIcon} alt="Transparency icon" />
            <strong>Transparency</strong> Open and honest communication builds trust.
          </li>

          <li>
            <img className="value-icon" src={DiversityIcon} alt="Diversity icon" />
            <strong>Diversity</strong> We embrace diverse backgrounds and perspectives.
          </li>

          <li>
            <img className="value-icon" src={TeamworkIcon} alt="Teamwork icon" />
            <strong>Teamwork</strong> Collaboration drives our success and innovation.
          </li>

          <li>
            <img className="value-icon" src={GrowthIcon} alt="Growth icon" />
            <strong>Growth</strong> We support continuous personal and professional development.
          </li>

          <li>
            <img className="value-icon" src={InnovationIcon} alt="Innovation icon" />
            <strong>Innovation</strong> We build forward-thinking and impactful solutions.
          </li>

          <li>
            <img className="value-icon" src={AutonomyIcon} alt="Autonomy icon" />
            <strong>Autonomy</strong> We empower ownership and independent thinking.
          </li>
        </ul>
      </section>

      {/* HISTORY */}
      <section className="about-our-history">
        <img
          src={History}
          alt="Founder journey illustration"
          className="history-pic"
        />

        <div className="history-description">
          <h2>Founder Journey</h2>

          <p>
            Aurizon Technologies was founded by Jose Del Valle, whose path
            into technology began through curiosity, self-learning, and a
            passion for building meaningful solutions.
          </p>

          <p>
            After overcoming challenges entering the industry through traditional
            routes, he chose to build something of his own — a company focused
            on growth, collaboration, and long-term innovation.
          </p>
        </div>
      </section>

      {/* TEAM */}
      <Team />

      {/* ECOSYSTEM */}
      <section className="about-ecosystem">
        <h2>Our Ecosystem</h2>

        <p>
          Aurizon Technologies operates within a growing ecosystem of digital
          initiatives, collaborations, and future-focused platforms designed
          to support innovation across industries.
        </p>

        <p>
          We aim to collaborate with developers, creators, and partners who
          share a vision for scalable technology and long-term impact.
        </p>
      </section>

      {/* VISION */}
      <section className="about-goals-vision">
        <div className="vision">
          <h2>Our Vision</h2>

          <p>
            Our vision is to build a scalable technology ecosystem that adapts
            to future industries and evolving digital needs.
          </p>

          <p>
            We aim to empower individuals and organizations through innovation,
            collaboration, and meaningful technological advancement.
          </p>
        </div>

        <img
          src={Vision}
          alt="Future vision illustration"
          className="horizon-vision"
        />
      </section>

      {/* TIMELINE */}
      <section className="about-timeline">
        <h2>Our Journey</h2>
        <Timeline />
      </section>

      {/* FAQ */}
      <FAQ />

    </div>
  );
};

export default About;