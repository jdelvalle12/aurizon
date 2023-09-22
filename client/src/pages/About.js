import React from 'react';
import Me from '../images/Me.jpg';
// import Background from '../images/Background.jpg';
import '../styles/About.css';
import '../App.css';

export default function About() {
  return (
    <div className="about-container" >
    {/* <img style={{ backgroundImage: `url(${Background})` }}/> */}
        <h1>Who We Are</h1>
     <div className='about-our-story'> 
        <h2>What's our story?</h2>         
            <p>
              At Aurizon Technologies, we're on a mission to pioneer 
              a brighter future through innovative technology solutions. 
              Our passionate team pushes boundaries and explores new horizons
              in the tech industry, delivering cutting-edge solutions that empower
              businesses and individuals. 
            </p>
            <p>  
              We're committed to nurturing incredible software development talent 
              and providing them with a platform to showcase their work. Our expertise 
              spans web development, software solutions, mobile apps, and more, addressing 
              critical areas like cybersecurity and infrastructure.
            </p>
            <p>
              Our vision is to make technology accessible to everyone by creating intuitive, 
              user-friendly products and services that simplify daily tasks. We're your partner 
              for success, leveraging the latest advancements to elevate your business. Our solutions 
              exceed expectations and drive meaningful impact in the digital landscape.
            </p>
            <p>
              With Aurizon, you step into a world of boundless possibilities. Contact us today to 
              discuss your project, and let Aurizon Technologies turn your vision into reality. 
            </p>
        </div>        
        <div className='about-our-mission'>
          <h2>Our Mission</h2>
            <p>
            At Aurizon Technologies, we're on a mission to lead technological advancements
            by providing innovative solutions that empower businesses and individuals. We're driven 
            by our passion for innovation, creativity, and user-centric design, making technology 
            accessible to all and illuminating a brighter future.
            </p>
            <p>
            We believe in the power of collaboration and talent. That's why we've assembled a team 
            of industry-leading experts who leverage cutting-edge tools to exceed client expectations 
            and drive growth.
            </p>
            <p>
            Join us on this journey, where your talents will shape tomorrow's technology landscape.
            </p>
        </div>
        <div className='about-our-value'>
          <h2>Our Value</h2>
            <p>
              At Aurizon, our culture is guided by core values:
            </p>
            <ul>
              <li>Autonomy: We empower our team to innovate and take ownership.</li>
              <li>Transparency: Open and honest communication builds trust.</li>
              <li>Diversity: We embrace diverse backgrounds and perspectives.</li>
              <li>Positivity: We approach challenges with optimism and creativity.</li>
              <li>Teamwork: Collaboration drives our success.</li>
            </ul>
            <p>
              These values shape our commitment to excellence and inclusivity in the tech industry and beyond.
            </p>
        </div>
        <div className='about-our-history'>
            <h2>The rest is history...</h2>
              <p></p>
        </div>
        <div className='about-the-team'>
          <h2>The Team</h2>
          <img src={Me} alt="Jose" className="profile-picture" />
        </div>
        <div className='about-our-culture'>
          <h2>Our Culture</h2>
        </div>
    </div>
  );
}