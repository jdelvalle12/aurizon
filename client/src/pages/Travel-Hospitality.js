import React from 'react';
import { Link } from 'react-router-dom';

import BustlingAirport from '../images/bustling-airport.mp4';
import HotelReception from '../images/hotel-reception.jpg';
import LuxuryResort from '../images/luxury-resort.jpg';
import HotelTablet from '../images/hotel-staff-tablet.jpg';

import {
  FaHotel,
  FaPlaneDeparture,
  FaCloud,
  FaLock,
  FaChartLine,
  FaMobileAlt
} from 'react-icons/fa';

import '../styles/Travel-Hospitality.css';
import '../App.css';

const TravelHospitality = () => {
  return (
    <div className="travel-page">     
      <header className="travel-hero">
     
       <video
        autoPlay
        loop
        muted
        playsInline
        className="travel-video"
        >
        <source src={BustlingAirport} type="video/mp4" />
        </video>
          <div className="travel-overlay"></div>
            <div className="travel-hero-content">
              <h1>Travel & Hospitality</h1>
               <p>
                Empowering travel and hospitality organizations through
                secure technology, digital innovation, cloud solutions,
                and exceptional guest experiences.
              </p>
            </div>     
      </header>

      {/* OVERVIEW */}
      <section className="travel-overview">
        <h2>Supporting the Future of Travel & Hospitality</h2>
          <p>
            The travel and hospitality industry depends on reliable,
            secure, and connected technology to deliver exceptional
            guest experiences. From hotels and resorts to airlines,
            attractions, cruise operators, and travel agencies,
            organizations must balance customer expectations with
            operational efficiency.
            Aurizon Technologies helps modernize digital
            infrastructure through cloud technologies,
            cybersecurity, software development,
            IT support, and strategic consulting to
            improve business operations and enhance
            the traveler experience.
          </p>
      </section>
      {/* IMAGE */}
            <section className="travel-image-section">      
              <img
                src={HotelReception}
                alt="Hotel Reception"
                className="travel-image"
              />      
            </section>
      
            {/* FOCUS AREAS */}
            <section className="travel-areas">      
              <h2>Travel & Hospitality Technology Focus Areas</h2>
      
              <div className="travel-grid">
                <div className="travel-card">
                  <FaHotel className="travel-icon" />
                  <h3>Hotel & Property Systems</h3>
                  <p>Guest management platforms and operational technologies.</p>
                </div>
      
                <div className="travel-card">
                  <FaPlaneDeparture className="travel-icon" />
                  <h3>Digital Guest Experience</h3>
                  <p>Mobile apps, self-service check-in, and personalized services.</p>
                </div>
      
                <div className="travel-card">
                  <FaChartLine className="travel-icon" />
                  <h3>Reservation & Booking Systems</h3>
                  <p>Reliable platforms supporting reservations and travel planning.</p>
                </div>
      
                <div className="travel-card">
                  <FaCloud className="travel-icon" />
                  <h3>Cloud Infrastructure</h3>
                  <p>Scalable systems supporting global operations.</p>
                </div>
      
                <div className="travel-card">
                  <FaLock className="travel-icon" />
                  <h3>Cybersecurity</h3>
                  <p>Protecting customer information and payment systems.</p>
                </div>
      
                <div className="travel-card">
                  <FaMobileAlt className="travel-icon" />
                  <h3>Business Analytics</h3>
                  <p>Using data to improve operations and customer satisfaction.</p>
                </div>      
              </div>      
            </section>

      {/* IMAGE */}
            <section className="travel-image-section">      
              <img
                src={LuxuryResort}
                alt="Luxury Resort"
                className="travel-image"
              />      
            </section>

      {/* CHALLENGES */}
            <section className="travel-challenges">      
              <h2>Industry Challenges</h2>      
              <div className="travel-grid">
      
             <div className="travel-card">
                <h3>Customer Expectations</h3>
                <p>Delivering seamless digital experiences.</p>
              </div>
      
              <div className="travel-card">
                <h3>Cybersecurity</h3>
                <p>Protecting customer and payment information.</p>
              </div>
      
              <div className="travel-card">
                <h3>Seasonal Demand</h3>
                <p>Managing fluctuating travel volumes efficiently.</p>
              </div>
      
              <div className="travel-card">
                <h3>Legacy Systems</h3>
                <p>Modernizing aging reservation and operational platforms.</p>
              </div>
      
              <div className="travel-card">
                <h3>Operational Efficiency</h3>
                <p>Improving coordination across multiple locations.</p>
              </div>
      
              <div className="travel-card">
                <h3>Digital Transformation</h3>
                <p>Adopting new technologies to remain competitive.</p>
              </div>      
              </div>      
            </section>
      
            {/* WHY SECTION */}
            <section className="travel-why">
      
              <div className="travel-why-content">
      
                <div className="travel-why-text">
                  <h2>Why Aurizon Technologies?</h2>
                    <p>
                      Aurizon Technologies helps travel and hospitality
                      organizations modernize operations through cloud
                      platforms, cybersecurity, software development,
                      IT support, and technology consulting. Our focus
                      is on creating secure, scalable, and reliable
                      solutions that improve guest experiences,
                      streamline operations, and support long-term
                      business growth.
                    </p>
                </div>
      
                <div className="travel-why-image">
                  <img
                    src={HotelTablet}
                    alt="Modern Hotel Technology"
                  />
                </div>
      
              </div>
      
            </section>
      
            {/* CTA */}
            <section className="travel-cta">      
              <h2>Explore Travel & Hospitality Solutions</h2>      
                <p>
                  Discover how Aurizon Technologies helps
                  travel and hospitality organizations
                  modernize technology, strengthen security,
                  and deliver exceptional customer experiences.
                </p>
      
              <Link to="/solutions" className="travel-button">
                View Solutions
              </Link>
      
            </section>
    </div>
  );
};

export default TravelHospitality;