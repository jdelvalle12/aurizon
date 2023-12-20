import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import emailjs from 'emailjs-com'; // Import email.js library
import CareersBackground from '../images/careers-background.jpg';
import LearningToo from '../images/learning-2.jpg';
import Learning from '../images/learning.jpg';
import Working from '../images/working.jpg';
import HavingFun from '../images/having-fun.jpg'

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
        <div className='career-description-two'>
           <p>
           By becoming a part of the Aurizon team, you'll have the opportunity to
           contribute to our growth story and play a crucial role in shaping the 
           future. Here, you'll find an inclusive and collaborative work environment,
           ongoing learning and development opportunities, and a chance to work on 
           exciting projects that make a real impact.
           </p>
        </div>   
            <img src={Learning} alt='learning' className='learning'></img>
        <div className='having-fun-description'>
            <p>
             More importantly, at Aurizon, we believe in fostering an environment 
             where you can have fun and be yourself. We value authenticity and 
             encourage you to bring your unique personality to the workplace.   
            </p>

        </div>
            <img src={HavingFun} alt='having-fun' className='having-fun'></img>
        <div className='career-description-three'>
           <p> 
           Join us in our journey to redefine possibilities and create meaningful
           solutions. Together, we can achieve remarkable milestones and advance 
           your career in the process. Explore our current job openings and take 
           the first step toward a rewarding future with Aurizon.
           </p>
        </div>
            <img src={Working} alt='working' className='working'></img>
        </div>
    );
};

export default Careers;