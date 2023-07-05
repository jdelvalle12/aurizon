import React from 'react';
import Image from 'react-bootstrap/Image';
import Flick from '../images/Flick-Tracker.jpg';
// import manifesto from '../images/manifesto.jpg';
import SEO from '../images/SEO.jpg';
import Journeez from '../images/Journeez.jpg';
import Weather from '../images/weather-forecast.jpg';
import Planner from '../images/day-planner.jpg';
import Notepad from '../images/notepad.jpg';
import Winery from '../images/Winery.jpg';
import Fireworks from '../images/digital-fireworks.mp4';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Projects.css';
import '../App.css';
import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaJs } from 'react-icons/fa';
import { DiMongodb, DiBootstrap } from 'react-icons/di';



const Carousel = () => {
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

const Projects = () => {
  return (
    <div>
      <video src={Fireworks} autoPlay loop muted className="projects-background-video"></video>      
      <div>
        <div className='title'>
          <h2>Projects</h2>
        </div>
        <div className="carousel-container relative w-full items-center ">
          <Carousel />
        </div>
      </div>
    </div>
  );
}

export default Projects ;