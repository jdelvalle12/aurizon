import React, {useEffect}from 'react';
import Innovation from '../images/innovation.jpg';
import Passion from '../images/passion.jpg';
import Me from '../images/Me.jpg';
import Culture from '../images/our-culture-video.mp4';
import '../index.css';
import '../App.css';

const About = () => {

    useEffect(() => {
        const video = document.querySelector('.about-background-video');
        video.play();
      }, []);

  return (
    <div className="about-container" > 
        <video src={Culture} play loop muted className='about-background-video'></video>
            <div className="content-container">
                <h1>Who We Are</h1>
                    <h2>Our Culture</h2>
                        <p>Discover the core values, mission, and vision that drive us 
                           at Aurizon. Explore the vibrant tapestry of our 
                           team, where innovation meets inclusivity, and endless possibilities 
                           are nurtured.
                        </p>
            </div>
     <div className='about-our-story'> 
        <div className='story-description'>
            <h2>What's our story?</h2>  
            <p>
              At Aurizon, we're on a mission to pioneer 
              a brighter future through innovative technology solutions. 
              Our passionate team pushes boundaries and explores new horizons
              in the tech industry, delivering cutting-edge solutions that empower
              businesses and individuals. We're committed to nurturing incredible 
              software development talent and providing them with a platform to 
              showcase their work. Our expertise spans web development, software 
              solutions, mobile apps, and more, addressing critical areas like 
              cybersecurity and infrastructure.
            </p>
            <p>
              Our vision is to make technology accessible to everyone by creating intuitive, 
              user-friendly products and services that simplify daily tasks. We're your partner 
              for success, leveraging the latest advancements to elevate your business. Our solutions 
              exceed expectations and drive meaningful impact in the digital landscape. With Aurizon, 
              you step into a world of boundless possibilities. Contact us today to 
              discuss your project, and let Aurizon Technologies turn your vision into reality. 
            </p>
            </div>       
            <img src={Innovation} alt='innovation' className='innovation'></img>
        </div>        
        <div className='about-our-mission'>
          <img src={Passion} alt='passion' className='passion'></img>
            <div className='mission-description'>
          <h2>Our Mission</h2>
          <p>
          We're on a mission to lead technological advancements by providing innovative solutions 
          that empower businesses and individuals. We're driven by our passion for innovation, 
          creativity, and user-centric design, making technology accessible to all and illuminating 
          a brighter future.
          </p>
          <p>
          We believe in the power of collaboration and talent. That's why we've assembled a team 
          of industry-leading experts who leverage cutting-edge tools to exceed client expectations 
          and drive growth. Join us on this journey, where your talents will shape tomorrow's technology landscape.
          </p>
            </div>
        </div>
        <div className='about-our-value'>
          <h2>Our Value</h2>
            <p>
              At Aurizon, our culture is guided by core values:
            </p>
            <ul>
              <li>Work-Life Balance: Promoting harmony between professional 
                  and personal life for a fulfilling journey.
              </li>
              <li>Transparency: Open and honest communication builds trust.</li>
              <li>Diversity: We embrace diverse backgrounds and perspectives.</li>
              <li>Positivity: We approach challenges with optimism and creativity.</li>
              <li>Teamwork: Collaboration drives our success.</li>
              <li>Personal Growth: We believe in fostering an environment where each 
                  team member has the opportunity to learn, grow, and reach their 
                  full potential.
              </li>
              <li>Innovation: Cultivating creative brilliance to pioneer innovative 
                  solutions and drive industry progress
              </li>
              <li>Autonomy: we empower our team to innovate and take ownership.</li>
            </ul>
        </div>
        <div className='about-our-history'>
            <h2>The rest is history...</h2>
              <p>
                The Founder and CEO Jose Del Valle always wondered what he wanted to do as a career. 
                After attending the University of Central Florida to pursue a degree in Criminal Justice 
                and work in Law enforcement, things didn’t go as planned and it wasn’t meant to be, however he 
                knew he likes to build something from the ground up and wanted to start a business of some kind. 
                A few years later in 2021, he realized he had an interest in Software Engineering, but to go back
                to school to pursue another degree was pricey, so instead he learned how code on his own for only 
                a fraction of the price. Months later, he decided to enter a 6 month bootcamp to streamline the 
                process of learning to code and didn’t know what to expect in the class, but met incredible people, 
                worked alongside with them on different projects and also did one on his own. After a grueling 
                6 month bootcamp, he took a bit of a break, but went right back at it and applied for 
                several jobs to enter the industry, however, after more than 50 job applied, half of them 
                rejecting him the opportunity for even an interview, and on July 2023, he decided to start 
                a company and founded Aurizon, which is a name he found by accident, but realized it made 
                sense, a new beginning with endless possibilities, and with that in mind, he had many ideas 
                to develop web apps or software for businesses and individuals alike. However, he quickly 
                realized it became even more personal for him when he started the company, given how many 
                posts he read from many people wanting to get into the industry, but not given the chance 
                to get an interview and so he started the company to give talented developers a chance 
                to utilize their skills and make a difference. 
              </p>
              <p>
                Today, he continues to work hard, with being an entrepreneur 
                and starting a company, as well being a leader is no easy task, but he is still determined 
                to grow the company and make his vision become a reality, just like he would 
                do for his customers. 
              </p>
        </div>
        <div className='about-the-team'>
          <h2>The Team</h2>
            <p>Meet the team that make it all happen...</p>
          <img src={Me} alt="Jose" className="profile-picture" />
            <h5>Founder and CEO</h5>
        </div>
        <div className='about-facts-figures'>
          <h2>Facts & Figures</h2>
        </div>
        <div className='about-partners'>
          <h2>Our Partners</h2>
            <p>We recognize that achieving success in the ever-evolving tech landscape 
               requires collaboration; we cannot do it alone. That's why we are committed 
               to forming strategic partnerships that amplify our strengths and open doors 
               to new opportunities.
            </p>
        </div>
        <div className='about-awards'>
          <h2>Achievements & Awards</h2>
        </div>
        <div className='about-goals-vision'>
          <h2>Our Goals & Vision</h2>
            <p>
              Our Vision is to be a leading tech company as we embark on a journey of 
              innovation and transformation, illuminating the path to a better tomorrow. 
              Our dedicated team of brilliant technologists harnesses creative brilliance 
              and cutting-edge advancements, empowering businesses and individuals with 
              limitless possibilities.
            </p>
            <p>
              We believe in the power of personal growth, continuous learning, and 
              collaboration. At Aurizon, we foster an environment where developers thrive, 
              learn from one another, and have a place to gather and collaborate on 
              groundbreaking projects. We envision a bright future not only for our clients 
              but also for our team members.
            </p>
            <p>
              We strive to shape this bright future by offering high-end solutions that 
              exceed expectations and drive meaningful impact in the digital landscape. 
              As your gateway to extraordinary solutions, we are committed to creating 
              a brighter, tech-driven world, where endless innovations illuminate the path ahead.
            </p>
            <p>
              Join us on this exciting journey, and together, let's shape a future that goes beyond the horizon.
            </p>
        </div>
        <div className='about-community'>
          <h2>Community Involvement</h2>
        </div>
        <div className='about-timeline'>
          <h2>Travel In time...</h2>
        </div>
        <div className='faq'>
          <h3>FAQs</h3>
        </div>
    </div>
  );
};

export default About;