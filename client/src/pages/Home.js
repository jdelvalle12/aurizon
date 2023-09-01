import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Motion from '../images/background-motion.mp4';
import Digital from '../images/digital-motion.mp4';
import '../index.css';
import '../App.css';

const Home = () => {
  const [showSlogan, setShowSlogan] = useState(false);

  useEffect(() => {
    setShowSlogan(true);

    const typingText = 'Your gateway to extraordinary solutions';
    const typingSpeed = 50; // Speed in milliseconds between each character

    const typingContainer = document.getElementById('typing-text');
    let charIndex = 0;

    function typeText() {
      if (charIndex < typingText.length) {
        typingContainer.textContent += typingText.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, typingSpeed);
      }
    }

    typeText();
  }, []);

  return (
    <div className="home-container">
      <video src={Motion} autoPlay loop muted className="background-video"></video>
      <h1 className={showSlogan ? 'fade-in' : ''}>"Aeon Innovations, Illuminating Tomorrow"</h1>
      <h2>
        <span id="typing-text"></span>
      </h2>
        <span className={`mission ${showSlogan ? 'fade-in' : ''}`}>
        Embarking on an innovation journey, we lead with purpose,
        guiding progress towards a brighter future. Committed to 
        pioneering technology, we empower businesses and individuals 
        through cutting-edge solutions.
        </span>
      <div className={`button-container ${showSlogan ? 'slide-in' : ''}`}>
        <Link to="/contact" className={`contact-button ${showSlogan ? 'slide-in' : ''}`}>Let's Get Started</Link>
      </div>
      <div className="home-about-container">
        <div className="glass-box">
          <h3 className='who-we-are'>Who We Are</h3>
            <p className='home-about-para'>At Aurizon, we are passionate about pushing boundaries and 
            exploring new horizons in the tech industry. We are committed to empowering businesses and 
            individuals with cutting-edge technologies that drive growth.</p>
          <Link to="/about" className="about-link">Learn More</Link>
        </div>
      <video src={Digital} autoPlay loop muted className="motion-video"></video>
      </div>
      <div className='what-we-do-container'>
        <h3 className='what-we-do'>What We Do</h3>
        <p className={showSlogan ? 'slide-in' : ''}>
          At Aurizon, we build and manage technology that helps businesses succeed and develop intuitive
          and user-friendly products to simplify everyday tasks.
        </p>      
        <div className="service-container">
          <div className="service-box web">
            <h4>Web Development</h4>
              <p>Crafting user-focused websites with stunning designs and 
                seamless functionality, transforming ideas into engaging 
                online experiences.
              </p>
          </div>
          <div className="service-box api">
            <h4>API Development</h4>
              <p>Building powerful APIs that connect applications and services,
                enabling smooth data exchange and enhancing software interoperability.
              </p>
          </div>
          <div className="service-box business">
            <h4>Business Solution</h4>
              <p>Creating tailored software solutions that streamline business processes,
                drive efficiency, and empower organizations to thrive.
              </p>
          </div>
          <div className="service-box manage">
            <h4>Web Management</h4>
              <p>
                Efficiently overseeing the operation, maintenance, and optimization of websites
                to ensure seamless performance, security, and a flawless user experience.
              </p>
          </div>
          <div className="service-box manage">
            <h4>Consult & Strategy</h4>
              <p>
              We offer technology consulting services to help clients define their digital strategies,
              align technology solutions with business goals, and plan for future growth.
              </p>
          </div>
          <div className="service-box mobile">
            <h4>Mobile App Developemnt</h4>
              <p>Coming soon: Expertly crafting mobile applications that bring your ideas 
                to life on smartphones and tablets, delivering unique user experiences.
              </p>
          </div>
        </div>
      </div>     
    </div>
  );
};

export default Home;