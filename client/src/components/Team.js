import React, { useState } from 'react';

// Define your TeamMember component as previously described

function AboutTheTeam() {
  const teamMembers = [
    {
      name: 'Founder and CEO',
      photoSrc: Me,
      description: 'Founder and CEO description goes here.',
    },
    // Add more team members here
  ];

  return (
    <div className="about-the-team">
      <h2>The Team</h2>
      <p>Meet the team that makes it all happen...</p>

      {/* Render team members */}
      {teamMembers.map((member, index) => (
        <TeamMember
          key={index}
          name={member.name}
          photoSrc={member.photoSrc}
          description={member.description}
        />
      ))}
    </div>
  );
}

export default AboutTheTeam;