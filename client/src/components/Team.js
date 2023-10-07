import React, { useState } from 'react';
import Me from '../images/Me.jpg';

function AboutTheTeam() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTeamMember, setSelectedTeamMember] = useState(null);

  const teamMembers = [
    {
      name: 'Founder and CEO',
      photoSrc: Me,
      description: 'Founder and CEO description goes here.',
    },
    // Add more team members here
  ];

  const openModal = (teamMember) => {
    setSelectedTeamMember(teamMember);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedTeamMember(null);
    setModalVisible(false);
  };

  return (
    <div className="about-the-team">
      <h2>The Team</h2>
      <p>Meet the team that makes it all happen...</p>

      {/* Render team members */}
      {teamMembers.map((member, index) => (
        <div key={index} className="team-member">
          <img
            src={member.photoSrc}
            alt={member.name}
            onClick={() => openModal(member)}
          />
          <p>{member.name}</p>
        </div>
      ))}

      {/* Modal */}
      {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>{selectedTeamMember.name}</h2>
            <img src={selectedTeamMember.photoSrc} alt={selectedTeamMember.name} />
            <p>{selectedTeamMember.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default AboutTheTeam;