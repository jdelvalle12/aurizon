import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Flick from '../images/Flick-Tracker.jpg';
// import manifesto from '../images/manifesto.jpg';
import SEO from '../images/SEO.jpg';
import Journeez from '../images/Journeez.jpg';
import Weather from '../images/weather-forecast.jpg';
import Planner from '../images/day-planner.jpg';
import Notepad from '../images/notepad.jpg';
import Winery from '../images/Winery.jpg';
import Background from '../images/digital background.jpg';

// import Codes from '../images/coding.mp4';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Portfolio.css';
import '../App.css';
import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaJs } from 'react-icons/fa';
import { DiMongodb, DiBootstrap } from 'react-icons/di';


const projects = [
  { image: Flick, name: "Flick Tracker", description: "Flick Tracker is looking to create a new way to engage with fellow movie lovers, through a user database system. Each user will have a profile where you can view their followed users, following, watched movies, etc. We want to show you analytics based off of the information you provide, to help refine and diversify your taste. We will allow people to post reviews on movies they have seen, in order for their followers to potentially add new items into their watchlist that wouldn't be curated from their own analytics.", 
    technologies: [<FaNodeJs />, <FaHtml5 />, <FaCss3 />, <FaJs />, "Express"], category: "Full Stack", githubLink: "https://github.com/NicholasTozzi/flick-tracker", link: "https://flick-tracker.herokuapp.com/" },
  // { image: manifesto, name: "Gambling Manifesto", link: "https://stickkman.github.io/gamblingManifesto-Proj01/" },
  { image: SEO, name: "Horiseon", description: "This project is a visually stunning representation of modern web design principles, showcasing the perfect blend of aesthetics and functionality. Explore the beautifully crafted user interface, seamless navigation, and eye-catching visual elements that make a true visual delight. Immerse yourself in the world of elegant design and get inspired by the possibilities of web development.", 
    technologies: [<FaHtml5 />, <FaCss3 />] , category: "Front-end", githubLink: "https://github.com/jdelvalle12/horiseon-webpage", link: "https://jdelvalle12.github.io/horiseon-webpage/" },
  { image: Journeez, name: "JourneEZ", description: "Many people travel to many parts of the world everyday, and some of them are first time solo travelers, but they get overwhelmed with all the information that is out there, about where to go, where to stay, where to eat, what to do, etc. This app aims to ease those nerves for first time travelers in the most simplistic way by providing information and tips as well as share their experience with other solo travelers and a way to document their experiences.", 
    technologies: [<FaReact />, <FaNodeJs />, <FaHtml5 />, <FaCss3 />, <FaJs />, <DiBootstrap />, "GraphQL"] , category: "Full Stack", githubLink: "https://github.com/jdelvalle12/journeeztrip", link: "https://www.journeeztrip.com/" },
  { image: Weather, name: "Weather Forecast", description: "Stay prepared for any weather condition with this intuitive app. Get real-time weather updates and accurate forecasts for your location and other areas of interest. Plan your activities, trips, and outdoor adventures with confidence, knowing you have reliable weather information at your fingertips. Stay informed and make the most of your day with the Weather Forecast app", 
    technologies: [<FaHtml5 />, <FaCss3 />, <FaJs />] , category: "Front-end", githubLink: "https://github.com/jdelvalle12/5-day-national-weather-forecast", link: "https://jdelvalle12.github.io/5-day-national-weather-forecast/" },
  { image: Planner, name: "Day Planner", description: "A user-friendly app that helps you organize your daily schedule. Input appointments, meetings, and important events, and save them in a day planner. Stay organized and never miss a task with this intuitive and convenient tool.", 
    technologies: [<FaHtml5 />, <FaCss3 />, <FaJs />, <FaNodeJs />] , category: "Front-end", githubLink: "https://github.com/jdelvalle12/day-planner", link: "https://jdelvalle12.github.io/day-planner/" },
  { image: Notepad, name: "Notepad", description: "Capture and organize your thoughts with ease using this versatile note-taking app. Jot down important information, ideas, and reminders, and conveniently access them whenever you need. Stay productive and never forget a thing with this handy digital notebook.", 
    technologies: [<FaHtml5 />, <FaCss3 />, <FaJs />, <FaNodeJs />, "Express"] , category: "Back-end", githubLink: "https://github.com/jdelvalle12/notepad", link: "https://notetaken.herokuapp.com/" },
  { image: Winery, name: "The Valley Winery", description: "This project is a visually stunning representation of modern web design principles, showcasing the perfect blend of aesthetics and functionality. Explore the beautifully crafted user interface, seamless navigation, and eye-catching visual elements that make a true visual delight. Immerse yourself in the world of elegant design and get inspired by the possibilities of web development.", 
  technologies: [<FaHtml5 />, <FaCss3 />] , category: "Front-end", githubLink: "https://github.com/jdelvalle12/thevalleywinery", link: "https://jdelvalle12.github.io/thevalleywinery/" }
];

const Carousel = ({projects}) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
  };

  // Handle button click
  const handleButtonClick = (url) => {
    window.open(url, '_blank');
  };
  
  return (
    <Slider {...settings}>
      {projects.map((project, index) => (
        <div key={index}>
          <div className="project-card">
            <Image src={project.image} alt={`Slide ${index + 1}`} width={600} height={400}/>
            <div className="project-card-overlay">
              <a href={project.link} className="project-card-image-link">
                <h3>{project.name}</h3>
              </a>
            </div>
          </div>
          <div className="project-card-details">
              <h3>{project.category}</h3>
              <h4>{project.name}</h4>
            <p>{project.description}</p>
          <div className="project-card-button">
            <button onClick={() => handleButtonClick(project.githubLink)}>GitHub</button>
          </div>
            <div className="project-card-icons">
              <h5>Technologies</h5>
                  {project.technologies.map((technology, i) => (
                    <span key={i} className="technology-icon">
                      {technology}
                    </span>
                  ))}
                  <span className="additional-text"></span>
                </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

const SubNavbar = () => {
  const [isDevelopmentDropdownOpen, setIsDevelopmentDropdownOpen] = useState(false);
  const [isIndustryDropdownOpen, setIsIndustryDropdownOpen] = useState(false);

  const toggleDevelopmentDropdown = () => {
    setIsDevelopmentDropdownOpen(!isDevelopmentDropdownOpen);
    // Close Industry dropdown when Development dropdown is opened
    if (!isDevelopmentDropdownOpen && isIndustryDropdownOpen) {
      setIsIndustryDropdownOpen(false);
    }
  };

  const toggleIndustryDropdown = () => {
    setIsIndustryDropdownOpen(!isIndustryDropdownOpen);
    // Close Development dropdown when Industry dropdown is opened
    if (!isIndustryDropdownOpen && isDevelopmentDropdownOpen) {
      setIsDevelopmentDropdownOpen(false);
    }
  };

  return (
    <nav className={`sub-navbar ${isDevelopmentDropdownOpen || isIndustryDropdownOpen ? 'active' : ''}`}>
      <ul>
        <li><Link to='/portfolio#all' style={{ textDecoration: 'none', transition: 'color 0.3s, background 0.3s' }} className="hover-effect">All</Link></li>
        <li>
          <span onClick={toggleDevelopmentDropdown} 
                style={{cursor: 'pointer', textDecoration: 'none', transition: 'color 0.3s, background 0.3s' }} 
                className="hover-effect">
            Development Type
          <span className={`portolio-dropdown-arrow ${isDevelopmentDropdownOpen ? 'open' : ''}`}>&#9662;</span></span></li>
          {/*Nested unordered list for the dropdown */}
          {isDevelopmentDropdownOpen && (
            <ul className='development-dropdown'>
              <li><Link to='/portfolio#front-end-development' style={{ textDecoration: 'none',  transition: 'color 0.3s, background 0.3s' }} className="hover-effect">Front-End Development</Link></li>
              <li><Link to='/portfolio#web-development' style={{ textDecoration: 'none',  transition: 'color 0.3s, background 0.3s' }} className="hover-effect">Full Stack Development</Link></li>
              <li><Link to='/portfolio#software-development' style={{ textDecoration: 'none',  transition: 'color 0.3s, background 0.3s' }} className="hover-effect">Software Development</Link></li>
              <li><Link to='/portfolio#mobile-app-development' style={{ textDecoration: 'none',  transition: 'color 0.3s, background 0.3s' }} className="hover-effect">Mobile App Development</Link></li>
            </ul>
          )}
        <li>
          <span 
            onClick={toggleIndustryDropdown} 
            style={{cursor: 'pointer', textDecoration: 'none', transition: 'color 0.3s, background 0.3s' }} 
            className="hover-effect">
            Industry
          <span className={`portolio-dropdown-arrow ${isIndustryDropdownOpen ? 'open' : ''}`}>&#9662;</span></span></li>
          {/*Nested unordered list for the dropdown */}
          {isIndustryDropdownOpen && (
            <ul className='industry-dropdown'>
              <li><Link to='/portfolio#entertainment' style={{ textDecoration: 'none',  transition: 'color 0.3s, background 0.3s' }} className="hover-effect">Entertainment</Link></li>
              <li><Link to='/portfolio#sports' style={{ textDecoration: 'none',  transition: 'color 0.3s, background 0.3s' }} className="hover-effect">Sports</Link></li>
              <li><Link to='/portfolio#travel' style={{ textDecoration: 'none',  transition: 'color 0.3s, background 0.3s' }} className="hover-effect">Travel</Link></li>
              <li><Link to='/portfolio#technology' style={{ textDecoration: 'none',  transition: 'color 0.3s, background 0.3s' }} className="hover-effect">Technology</Link></li>
              <li><Link to='/portfolio#food-beverage' style={{ textDecoration: 'none',  transition: 'color 0.3s, background 0.3s' }} className="hover-effect">Food & Beverage</Link></li>
              <li><Link to='/portfolio#real-estate' style={{ textDecoration: 'none',  transition: 'color 0.3s, background 0.3s' }} className="hover-effect">Real-Estate</Link></li>
              <li><Link to='/portfolio#logistics' style={{ textDecoration: 'none',  transition: 'color 0.3s, background 0.3s' }} className="hover-effect">Logistics</Link></li>
              <li><Link to='/portfolio#ecommerce' style={{ textDecoration: 'none',  transition: 'color 0.3s, background 0.3s' }} className="hover-effect">E-commerce</Link></li>
              <li><Link to='/portfolio#finance' style={{ textDecoration: 'none',  transition: 'color 0.3s, background 0.3s' }} className="hover-effect">Finance</Link></li>
            </ul>
          )}
      </ul>
    </nav>
  );
}



const Projects = () => {
  const [showTitle, setShowTitle] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All'); // Track the selected category

    useEffect(() => {
      setShowTitle(true); //When the component mounts, set showTitle to true.

      const typingText = 'Take a look at our work that we have done so far, with more to come. If you like any of the designs, go to our marketplace and select the designs you like, and we can make it to your liking.';
      const typingSpeed = 30; // Speed in milliseconds between each character

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

    // Filter projects based on the selctced category
    const filteredProjects = projects.filter(project => {
      if (selectedCategory === 'All') {
        return true; // Show all projects
      }
      return project.category === selectedCategory; //Show projects of the selected category
    });

return (
  <div className='portfolio-container'>
      <img src={Background} alt='portfolio-background' className='portfolio-background'></img>
      {/* // <video src={Codes} autoPlay loop muted className="projects-background-video"></video>       */}
        <div className={`title ${showTitle ? 'fade-in' : ''}`}>
          <h2>Our Portfolio</h2>
        </div>
        <div className='sub-text'>
            <p id='typing-text'></p>
        </div>
      <div className='sub-navbar'>
       <SubNavbar
        selectedCategory={selectedCategory} 
        onSelectedCategory={(category) => setSelectedCategory(category)} // Set the selected category
        />
      </div>
        {/*Display the filtered projects */}
        {/* <div className="carousel-container relative w-full items-center ">
          <Carousel projects={filteredProjects} />
        </div> */}
    </div>
  );
}

export default Projects ;