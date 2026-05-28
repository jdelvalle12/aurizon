import React from 'react';


import '../App.css';
import '../styles/About.css';

const Timeline = () => {
 const timelineData = [
  {
    id: 1,
    year: 'July 2023',
    content: 'Jose founded Aurizon and is officially registered as a business name.',
  },
  {
    id: 2,
    year: 'November 2023',
    content: 'Aurizon is fully launched and operations begin.',
  },
  {
    id: 3,
    year: 'May 2025',
    content: 'Aurizon separated its operations for web development and planning stages for Mosaic Digital Creations began.',
  },
];



  return (
    <div className="timeline">
      {timelineData.map((event) => (
        <div key={event.id} className='timeline-item'>
          <div className='timeline-branch'></div>
          <div className='timeline-content'>
            <h3>{event.year}</h3>
            <p>{event.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;




