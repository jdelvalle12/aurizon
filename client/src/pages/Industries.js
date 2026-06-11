import React from 'react';
import { Link } from 'react-router-dom';
import TechnologyImage from '../images/abstract-digital-image.jpg';
import LogisticsImage from '../images/logistics.jpg';
import FinanceImage from '../images/office-software.jpg';
import TravelImage from '../images/Journeez.jpg';
import RealEstateImage from '../images/real-estate.jpg';
import EntertainmentImage from '../images/entertainment.jpg';
import SportsImage from '../images/sports.jpg';
import FoodImage from '../images/food-beverage.jpg';
import '../styles/IndustriesPage.css';
import {
  FaLaptopCode,
  FaTruck,
  FaChartLine,
  FaBuilding,  
  FaPlane,
  FaFilm,
  FaFutbol,
  FaUtensils
} from 'react-icons/fa';

const Industries = () => {
  return (
    <div className="industries-page">

    <header className="industries-hero">

  <div className="hero-image-grid">
    <img src={TechnologyImage} alt="Technology" />
    <img src={LogisticsImage} alt="Logistics" />
    <img src={FinanceImage} alt="Finance" />
    <img src={TravelImage} alt="Travel" />
    <img src={RealEstateImage} alt="RealEstate"/>
    <img src={EntertainmentImage} alt="Entertainment"/>
    <img src={SportsImage} alt="Sports"/>
    <img src={FoodImage} alt="Food" />
  </div>

  <div className="industry-hero-overlay"></div>

  <div className="industry-hero-content">
    <h1>Industries We Serve</h1>

    <p>
      Technology solutions tailored to the unique needs
      of modern industries.
    </p>
  </div>

</header>

      <section className="industries-intro">
        <h2>Technology That Adapts to Your Industry</h2>

        <p>
          Every industry operates differently. Aurizon Technologies builds
          systems and digital solutions that adapt to operational workflows,
          compliance needs, customer behavior, and long-term business goals.
        </p>
       <div className="industries-page-grid">

        <Link to="/industries/technology" className="industries-card">
          <FaLaptopCode className="industry-icon" />
          <h3>Technology</h3>
          <p>
            Scalable software, SaaS platforms, and digital solutions
            designed for modern technology organizations.
          </p>
          <span className="industry-learn-more">
            Learn More →
          </span>
        </Link>

        <Link to="/industries/logistics-transportation" className="industries-card">
          <FaTruck className="industry-icon" />
          <h3>Logistics & Transportation</h3>
          <p>
            Workflow automation, fleet management, tracking systems,
            and operational efficiency tools.
          </p>
          <span className="industry-learn-more">
            Learn More →
          </span>
        </Link>

        <Link to="/industries/financial-services" className="industries-card">
          <FaChartLine className="industry-icon" />
          <h3>Financial Services</h3>
          <p>
            Secure platforms, automation solutions, analytics,
            and future-focused financial technologies.
          </p>
          <span className="industry-learn-more">
            Learn More →
          </span>
        </Link>

        <Link to="/industries/real-estate" className="industries-card">
          <FaBuilding className="industry-icon" />
          <h3>Real Estate</h3>
          <p>
            Property management systems, customer engagement tools,
            and digital real estate platforms.
          </p>
          <span className="industry-learn-more">
            Learn More →
          </span>
        </Link>

        <Link to="/industries/travel-hospitality" className="industries-card">
          <FaPlane className="industry-icon" />
          <h3>Travel & Hospitality</h3>
          <p>
            Customer experience platforms, booking solutions,
            and travel-focused digital ecosystems.
          </p>
          <span className="industry-learn-more">
            Learn More →
          </span>
        </Link>

        <Link to="/industries/media-entertainment" className="industries-card">
          <FaFilm className="industry-icon" />
          <h3>Media & Entertainment</h3>
          <p>
            Content management systems, digital experiences,
            and audience engagement platforms.
          </p>
          <span className="industry-learn-more">
            Learn More →
          </span>
        </Link>

        <Link to="/industries/sports-recreation" className="industries-card">
          <FaFutbol className="industry-icon" />
          <h3>Sports & Recreation</h3>
          <p>
            Fan engagement tools, community platforms,
            analytics, and sports technology solutions.
          </p>
          <span className="industry-learn-more">
            Learn More →
          </span>
        </Link>

        <Link to="/industries/food-beverage" className="industries-card">
          <FaUtensils className="industry-icon" />
          <h3>Food & Beverage</h3>
          <p>
            Ordering systems, customer loyalty programs,
            inventory tools, and operational technology solutions.
          </p>
          <span className="industry-learn-more">
            Learn More →
          </span>
        </Link>
      </div>


      </section>
      <section className="industries-adapt">
        <h2>How We Adapt Solutions</h2>

        <div className="industries-steps">

          <div>
            <h3>1. Understand the Industry</h3>
            <p>We analyze workflows, challenges, and business needs.</p>
          </div>

          <div>
            <h3>2. Identify Key Problems</h3>
            <p>We focus on inefficiencies and opportunities for improvement.</p>
          </div>

          <div>
            <h3>3. Build Tailored Solutions</h3>
            <p>We design systems specifically aligned to that industry.</p>
          </div>

          <div>
            <h3>4. Scale & Improve</h3>
            <p>Solutions evolve as the business grows and changes.</p>
          </div>

        </div>
      </section>
      <section className="industries-coming">
        <h2>Case Studies Coming Soon</h2>

        <p>
          As Aurizon Technologies grows, real-world implementations
          across industries will be documented here.
        </p>
      </section>

    </div>
    
  );
};

export default Industries;