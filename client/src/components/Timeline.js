import React from 'react';

function Timeline() {
  return (
    <div className="timeline">
      <div className="timeline-item">
        <div className="timeline-content">
          <h3>Year 1</h3>
          <p>Event description for Year 1.</p>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-content">
          <h3>Year 2</h3>
          <p>Event description for Year 2.</p>
        </div>
      </div>
      {/* Add more timeline items as needed */}
    </div>
  );
}

export default Timeline;