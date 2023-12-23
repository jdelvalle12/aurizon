import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import emailjs from 'emailjs-com'; // Import email.js library
import CareersBackground from '../images/careers-background.jpg';
import LearningToo from '../images/learning-2.jpg';
import Learning from '../images/learning.jpg';
import Working from '../images/working.jpg';
import HavingFun from '../images/having-fun.jpg'

import BalanceIcon from '../images/work-life-balance.png';
import PersonalGrowthIcon from '../images/personal-growth.png';
import AnywhereIcon from '../images/diversity.png';
import EquityIcon from '../images/equity.png';
import ProfessionalIcon from '../images/education.png';
import HealthIcon from '../images/health.png';

import '../index.css';
import '../App.css';

const Careers = () => {
    const [showCareerTitle, setCareerTitle] = useState(false);

    useEffect(() => {
        setCareerTitle(true);

        const typingText = "Be part of a team that is ambitious, creative, & bold, who wants to be part of the journey on building something from nothing.";
        const typingSpeed = 30;

        const typingContainer = document.getElementById('typing-text');
        let charIndex = 0;

        function typeText() {
            if(charIndex < typingText.length) {
                typingContainer.textContent += typingText.charAt(charIndex);
                charIndex++;
                setTimeout(typeText, typingSpeed);
            }
        }
        typeText();
    }, []);

    
return (
    <div className='careers-container'>
      <img src={CareersBackground} alt='CareersBackground' className='careers-background'></img>
        <div className={`career-title ${showCareerTitle ? 'slide-in' : ''}`} >
            <h2>Careers</h2>
                <p>The Future starts with you</p>
        </div>
        <div className='head-text'>
            <p id='typing-text'></p>
        </div>
        <div className={`button-container ${showCareerTitle ? 'slide-in' : ''}`}>
            <Link to='/careers-page' className={`careers-button ${showCareerTitle ? 'slide-in' : ''}`}>Explore Job Opportunities<span className='arrow'>&rarr;</span></Link>
        </div>
        <div className='why-work'>
            <h1>Why Work at Aurizon?</h1>
        </div>
        <div className='career-description'>
           <p>
           At Aurizon, we're fueled by ambitious goals and innovative ideas,
           and we recognize that achieving them requires a dedicated and talented
           team. We invite individuals from diverse backgrounds, whether you're a
           developer, designer, analyst, marketer, or possess any other skill set, 
           to join our dynamic workforce.
           </p>
        </div>
           <img src={LearningToo} alt='learning-too' className='learning-too'></img>
           <span className='random-design'></span>
        <div className='career-description-two'>
           <p>
           By becoming a part of the Aurizon team, you'll have the opportunity to
           contribute to our growth story and play a crucial role in shaping the 
           future. Here, you'll find an inclusive and collaborative work environment,
           ongoing learning and development opportunities, and a chance to work on 
           exciting projects that make a real impact.
           </p>
        <span className='random-design'></span>
        <span className='random-design'></span>  
        </div> 
            <img src={Learning} alt='learning' className='learning'></img>
           <span className='random-design'></span> {/* Second circle */}
        <div className='having-fun-description'>
            <p>
             More importantly, at Aurizon, we believe in fostering an environment 
             where you can have fun and be yourself. We value authenticity and 
             encourage you to bring your unique personality to the workplace.   
            </p>
        <span className='random-design'></span>
        <span className='random-design'></span>
        </div>
            <img src={HavingFun} alt='having-fun' className='having-fun'></img>
            <span className='random-design'></span>
        <div className='we-offer'>
            <h2>What We Offer</h2>
                <p>
                We are all about transparency, NO BS. As a startup, there aren't any fancy
                perks right now, but that will come over time as the company grows. In the 
                meantime, being part of a startup team from the beginning will give the sense 
                of satisfaction that you helped build something from the ground up. Doesn't 
                mean you won't receive anything in the beginning. Here is what you will receive 
                from the start with more added in the near future...
                </p>
                <ul>              
              <li><img className='offer-icon' src={BalanceIcon} alt='Icon Description' />
              <strong>Work-Life Balance</strong> We believe in promoting harmony between professional 
                  and personal life for a fulfilling journey, having flexible time off for the days that
                  are important to you. In addition, spending time with family is important so we also offer 
                  long Thanksgiving weekend and one week off between Christmas & New Years.
              </li>              
              <li><img className='offer-icon' src={EquityIcon} alt='Icon Description' />
              <strong>Equity</strong> As part of our ongoing efforts to recognize and reward your dedication, 
              we're actively exploring the introduction of equity opportunities for our team. This initiative 
              is designed to align everyone with the long-term success and prosperity of Aurizon. While 
              the details are still in progress, we're committed to ensuring that every team member has the 
              chance to share in the success they contribute to.</li>              
              <li><img className='offer-icon' src={AnywhereIcon} alt='Icon Description' />
              <strong>Work Anywhere</strong> As a startup, we work anywhere and everywhere, in other words remotely,
                    but in the spirit of transparency, eventually we will have the option to have a hybrid option
                    especially for those who don't fully like to work remotely and have the balance of working from
                    home, but also see your fellow coworkers.</li>              
              <li><img className='offer-icon' src={HealthIcon} alt='Icon Description' />
              <strong>Health</strong> We are diligently working towards the implementation of comprehensive health 
              insurance coverage for all team members. Our goal is to provide you with the security and support 
              needed to thrive both inside and outside the workplace. We understand the importance of health, 
              and we're excited about the positive impact this will have on our team. .</li>              
              {/* <li><img className='offer-icon' src={TeamworkIcon} alt='Icon Description' />
              <strong>Teamwork</strong> Collaboration drives our success. We foster an environment 
                    where every team member's voice is heard, ideas are valued, and 
                    innovation flourishes.
              </li> */}
              <li><img className='offer-icon' src={PersonalGrowthIcon} alt='Icon Description' />
              <strong>Personal Growth</strong> We believe in fostering an environment where each 
                  team member has the opportunity to learn, grow, and reach their 
                  full potential.
              </li>              
              <li><img className='offer-icon' src={ProfessionalIcon} alt='Icon Description' />
              <strong>Professional</strong> We believe it is important to continue your education, especially in the 
                    tech industry, new technologies are constantly emerging. Thats why we offer our own inhouse university 
                    to learn new technologies and as well as refresher courses to go back to what you know already know but
                    may not have worked with in awhile.
              </li>              
              {/* <li><img className='offer-icon' src={AutonomyIcon} alt='Icon Description' />
              <strong>Autonomy</strong> We empower our team to innovate and take ownership.</li> */}
            </ul>
        </div>
        <div className='career-description-three'>
           <p> 
           Join us in our journey to redefine possibilities and create meaningful
           solutions. Together, we can achieve remarkable milestones and advance 
           your career in the process. Explore our current job openings and take 
           the first step toward a rewarding future with Aurizon.
           </p>
           <span className='random-design'></span>
           <span className='random-design'></span>
        </div>
            <img src={Working} alt='working' className='working'></img>
        </div>
    );
};

export default Careers;