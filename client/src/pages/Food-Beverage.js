import React from 'react';
import { Link } from 'react-router-dom';

import BusyKitchen from '../images/commercial-kitchen.mp4';
import FoodWarehouse from '../images/food-warehouse.jpg';
import FoodProduction from '../images/food-production-line.jpg';
import ManagerTablet from '../images/manager-tablet.jpg';

import {
  FaUtensils,
  FaStore,
  FaTruck,
  FaCloud,
  FaLock,
  FaMobileAlt
} from 'react-icons/fa';

import '../styles/Food-Beverage.css';
import '../App.css';

const FoodBeverage = () => {
  return (
    <div className="food-page">     
      <header className="food-hero">
     
       <video
        autoPlay
        loop
        muted
        playsInline
        className="food-video"
        >
        <source src={BusyKitchen} type="video/mp4" />
        </video>
          <div className="food-overlay"></div>
            <div className="food-hero-content">
              <h1>Food & Beverage</h1>
                <p>
                 Supporting restaurants, food manufacturers,
                 distributors, and retailers through secure,
                 scalable, and innovative technology solutions.
                </p>
            </div>     
      </header>

      {/* OVERVIEW */}
      <section className="food-overview">
        <h2>Supporting the Future of Food & Beverage</h2>
          <p>
            The food and beverage industry depends on technology 
            to improve operations, enhance customer experiences, 
            and maintain efficient supply chains. From restaurants 
            and hospitality businesses to food manufacturers, 
            distributors, and retailers, organizations must balance 
            quality, speed, safety, and operational efficiency.
            Aurizon Technologies helps modernize digital infrastructure 
            through cloud computing, cybersecurity, software development, 
            IT support, and technology consulting, enabling secure, scalable, 
            and innovative solutions across the food and beverage industry.
          </p>
      </section>
      {/* IMAGE */}
            <section className="food-image-section">      
              <img
                src={FoodWarehouse}
                alt="Fitness Center"
                className="food-image"
              />      
            </section>
      
            {/* FOCUS AREAS */}
            <section className="food-areas">      
              <h2>Food & Beverage Technology Focus Areas</h2>
      
              <div className="food-grid">
                <div className="food-card">
                  <FaUtensils className="food-icon" />
                  <h3>Restuarant & Operations Management</h3>
                  <p>
                    Technology supporting restaurant operations, inventory, 
                    scheduling, and workforce management.
                  </p>
                </div>
      
                <div className="food-card">
                  <FaStore className="food-icon" />
                  <h3>Customer Experience</h3>
                  <p>
                    Mobile ordering, loyalty programs, self-service kiosks, 
                    and digital engagement platforms.
                  </p>
                </div>
      
                <div className="food-card">
                  <FaTruck className="food-icon" />
                  <h3>Supply Chain & Distribution</h3>
                  <p>
                    Supporting inventory management,
                    warehouse operations, logistics,
                    and food distribution networks.
                  </p>
                </div>  
      
                <div className="food-card">
                  <FaCloud className="food-icon" />
                  <h3>Cloud Infrastructure</h3>
                  <p>
                   Scalable cloud environments supporting restaurants, 
                   food manufacturers, and distribution networks.
                  </p>
                </div>
      
                <div className="food-card">
                  <FaLock className="food-icon" />
                  <h3>Cybersecurity</h3>
                  <p> 
                    Protecting customer data, payment systems, and business operations.
                  </p>
                </div>
      
                <div className="food-card">
                  <FaMobileAlt className="food-icon" />
                  <h3>Digital Commerce</h3>
                  <p>
                    Online ordering, delivery integrations, and mobile applications that enhance customer convenience.
                  </p>
                </div>      
              </div>      
            </section>

      {/* IMAGE */}
            <section className="food-image-section">      
              <img
                src={FoodProduction}
                alt="Efood Arena"
                className="food-image"
              />      
            </section>

      {/* CHALLENGES */}
            <section className="food-challenges">      
              <h2>Industry Challenges</h2>      
              <div className="food-grid">
      
             <div className="food-card">
                <h3>Supply Chain Management</h3>
                <p>
                  Maintaining reliable sourcing, inventory, 
                  and distribution across changing market conditions.
                </p>
              </div>
      
              <div className="food-card">
                <h3>Food & Safety Compliance</h3>
                <p>
                  Meeting health regulations while ensuring product quality and traceability.
                </p>
              </div>
      
              <div className="food-card">
                <h3>Labor Shortages</h3>
                <p>
                  Improving workforce efficiency through automation and digital tools.
                </p>
              </div>
      
              <div className="food-card">
                <h3>Customer Expectations</h3>
                <p>
                  Delivering convenient ordering, personalized experiences, and fast service.
                </p>
              </div>
      
              <div className="food-card">
                <h3>Cybersecurity</h3>
                <p>
                  Protecting payment systems, customer information, and operational technology.
                </p>
              </div>
      
              <div className="food-card">
                <h3>Digital Transformations</h3>
                <p>
                  Modernizing legacy systems while adopting cloud, automation, and AI technologies.
                </p>
              </div>      
              </div>      
            </section>
      
            {/* WHY SECTION */}
            <section className="food-why">
      
              <div className="food-why-content">
      
                <div className="food-why-text">
                  <h2>Why Aurizon Technologies?</h2>
                    <p>
                      Aurizon Technologies helps food and beverage 
                      organizations modernize operations through 
                      cloud platforms, cybersecurity, software development, 
                      IT support, and technology consulting. Our focus is on 
                      creating secure, scalable, and efficient solutions that 
                      improve operational performance, strengthen customer 
                      experiences, and support long-term business growth.
                    </p>
                </div>
      
                <div className="food-why-image">
                  <img
                    src={ManagerTablet}
                    alt="Coach using a tablet"
                  />
                </div>
      
              </div>
      
            </section>
      
            {/* CTA */}
            <section className="food-cta">      
              <h2>Explore Food & Beverage Solutions</h2>      
                <p> 
                  Discover how Aurizon Technologies helps food 
                  and beverage organizations modernize technology, 
                  strengthen security, optimize operations, and 
                  deliver exceptional customer experiences.
                </p>
      
              <Link to="/solutions" className="food-button">
                View Solutions
              </Link>
      
            </section>
    </div>
  );
};

export default FoodBeverage;