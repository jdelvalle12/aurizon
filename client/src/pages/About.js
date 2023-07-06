import React from 'react';
import Me from '../images/Me.jpg';
import Background from '../images/Background.jpg';
import '../styles/About.css';
import '../App.css';

export default function About() {
  return (
    <section className="aboutme-container" style={{ backgroundImage: `url(${Background})` }}>
     <div> 
        <h2 className='abouttitle'>About Me</h2>
      <img src={Me} alt="Jose" className="profile-picture" />
        <h2 className="aboutme">Hello my name is Jose...</h2>
        <div />
        <div className='description'>
          ...I am a full stack developer based in Orlando with experience in HTML5, variety of CSS frameworks such as Bootstrap, Tailwind, & Bulma,
          JavaScript, jQuery, and used Web, Third party & Server-side APIs on the front end 
          development. In addition, on the back end development, I have experience in MySQL, NoSQL, OOP, MVC, ORM, Node.js, 
          Express.js, GraphQL & MongoDB, plus REACT & RESTful APIs. I have an appetite for continuous learning, collaboration, 
          and problem-solving, and I plan to create and maintain websites while also developing apps. Aside from 
          programming, I'm originally from NYC, I like listening to a variety of music, play videogames and travel 
          around the world. 
        </div>
      </div>
    </section>
  );
}