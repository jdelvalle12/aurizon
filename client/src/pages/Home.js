import React from 'react';
// import { Link } from 'react-router-dom';

import HeroSection from '../components/HeroSection.js';
import AboutSection from '../components/AboutSection.js';
import ServicesSection from '../components/ServicesSection.js';
import IndustriesSection from '../components/IndustriesSection.js';
import CollabEcosystemSection from '../components/CollabEcosystemSection.js';
import InsightsSection from '../components/InsightsSection.js';
import CareersSection from '../components/CareersSection.js';
import CTASection from '../components/CTASection.js';
import SubscribeSection from '../components/SubscribeSection.js';

import '../App.css';
import '../styles/Home.css';

const Home = () => {

  return (

    <div className="home-container">

      <HeroSection />

      <AboutSection />

      <ServicesSection />

      <IndustriesSection />

      <CollabEcosystemSection />

      <InsightsSection />

      <CareersSection />

      <CTASection />

      <SubscribeSection />

    </div>

  );
};

export default Home;