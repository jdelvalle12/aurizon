import React, { useState } from 'react';
import Me from '../images/Me.jpg';
import {Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../index.css';
import '../App.css';

function AboutTheTeam() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTeamMember, setSelectedTeamMember] = useState(null);

  const teamMembers = [
    {
      name: 'Jose Del Valle Founder and CEO',
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
          <button
            className='team-member-button' 
            onClick={() => openModal(member)}
          >
            <img
              src={member.photoSrc}
              alt={member.name}
            />
          </button>
          <p>{member.name}</p>
        </div>
      ))}

      {/* Modal */}
      <Modal show={modalVisible} onHide={closeModal}>
        {selectedTeamMember && ( // Check if selectedTeamMember is not null
      <>
      <Modal.Header closeButton>
        <Modal.Title>{selectedTeamMember.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={selectedTeamMember.photoSrc} alt={selectedTeamMember.name} />
        <p>{selectedTeamMember.description}</p>
      </Modal.Body>
    </>
  )}
</Modal>
    </div>
  );
}

export default AboutTheTeam;