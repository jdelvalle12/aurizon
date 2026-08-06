import React from "react";
import { Link } from "react-router-dom";

import Background from "../images/analytics-background.jpg";
// import Mosaic from "../images/mosaic-case-study.jpg";
// import Journeez from "../images/journeez-case-study.jpg";
// import Aurasphere from "../images/aurasphere-case-study.jpg";

import "../styles/CaseStudies.css";
import "../App.css";

const caseStudies = [
  {
    // image: Mosaic,
    title: "Mosaic Digital Creations",
    industry: "Digital Marketing & Web Development",

    challenge:
      "Helping businesses establish a modern digital presence through professional websites, branding, and online marketing while providing scalable technology solutions.",

    solution:
      "Designed and developed responsive business websites, implemented SEO best practices, optimized performance, and delivered scalable digital solutions tailored to each client's needs.",

    technologies: [
      "React",
      "JavaScript",
      "Node.js",
      "SEO",
      "Responsive Design"
    ]
  },

  {
    // image: Journeez,
    title: "GoJourneez",
    industry: "Travel Technology",

    challenge:
      "Travelers often rely on multiple disconnected platforms for planning, booking, and organizing their trips.",

    solution:
      "Developed a centralized travel platform that simplifies trip planning, destination discovery, itinerary management, and travel resources within a single user experience.",

    technologies: [
      "React",
      "GraphQL",
      "MongoDB",
      "Node.js",
      "Cloud Infrastructure"
    ]
  },

  {
    // image: Aurasphere,
    title: "Aurasphere Entertainment",
    industry: "Gaming & Entertainment",

    challenge:
      "Creating immersive gaming experiences supported by scalable technology and modern development practices.",

    solution:
      "Developing next-generation gaming experiences supported by cloud infrastructure, networking, scalable software architecture, and innovative gameplay systems.",

    technologies: [
      "Game Development",
      "Cloud Computing",
      "Networking",
      "AI",
      "Software Engineering"
    ]
  }
];

const CaseStudies = () => {
  return (
    <div className="case-page">

      <header className="case-hero">

        <img
          src={Background}
          alt="Technology Background"
          className="case-background"
        />

        <div className="case-overlay"></div>

        <div className="case-content">

          <h1>Case Studies</h1>

          <p>
            Discover how Aurizon Technologies helps organizations solve
            complex technology challenges through innovation,
            cybersecurity, cloud solutions, and digital transformation.
          </p>

        </div>

      </header>

      <section className="case-intro">

        <h2>Technology That Solves Business Challenges</h2>

        <p>
          Every organization faces unique technology obstacles.
          Our case studies demonstrate how strategic planning,
          secure infrastructure, cloud computing,
          software development, and IT consulting help
          organizations improve efficiency and prepare for future growth.
        </p>

      </section>

      <section className="case-grid">

        {caseStudies.map((study, index) => (

          <div className="case-card" key={index}>

            <h3>{study.title}</h3>

            <span>{study.industry}</span>

            <h4>Challenge</h4>

            <p>{study.challenge}</p>

            <h4>Solution</h4>

            <p>{study.solution}</p>

            <h4>Technologies</h4>

            <div className="case-tags">

              {study.technologies.map((tech, i) => (

                <span key={i}>{tech}</span>

              ))}

            </div>

          </div>

        ))}

      </section>

      <section className="case-cta">

        <h2>Ready to Modernize Your Business?</h2>

        <p>
          Discover how Aurizon Technologies can help your organization
          improve security, efficiency, and long-term growth.
        </p>

        <Link to="/contact" className="case-button">

          Contact Us

        </Link>

      </section>

    </div>
  );
};

export default CaseStudies;