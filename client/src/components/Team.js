import React, { useState } from 'react';
import Me from '../images/Me.jpg';

import {
  FaLinkedin,
  FaFacebook,
  FaEnvelope
} from 'react-icons/fa';

import '../App.css';
import '../styles/About.css';

const Team = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      name: 'Jose Del Valle - Founder & CEO',

      photo: Me,

      description: `
Jose Del Valle is the Founder and CEO of Aurizon Technologies.

He focuses on building scalable systems, digital ecosystems,
and long-term technological innovation.

His background spans software development, business strategy,
marketing, leadership, and technology operations.

Aurizon Technologies was created from a vision of building
future-focused solutions that empower individuals,
businesses, and innovation across industries.

Outside of technology, he enjoys travel, gaming, spend time with
his kids, continuously learning, and enjoy nature.
      `,
    },
  ];

  const openModal = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);

    // Prevent background scrolling
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedMember(null);
    setIsModalOpen(false);

    // Restore scrolling
    document.body.style.overflow = 'auto';
  };

  return (

    <section className="about-the-team">

      <h2>The Team</h2>

      <p>
        Meet the people building Aurizon Technologies.
      </p>

      <div className="team-grid">

        {teamMembers.map((member, index) => (

          <div
            key={index}
            className="team-member"
            onClick={() => openModal(member)}
          >

            <img
              src={member.photo}
              alt={member.name}
            />

            <p>{member.name}</p>

          </div>

        ))}

      </div>

      {/* CUSTOM MODAL */}

      {isModalOpen && selectedMember && (

        <div
          className="modal-overlay"
          onClick={closeModal}
        >

          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="close-btn"
              onClick={closeModal}
            >
              ✕
            </button>

            <img
              src={selectedMember.photo}
              alt={selectedMember.name}
              className="modal-image"
            />

            <h2>{selectedMember.name}</h2>

            <div className="social-icons-team-member">

              <a
                href="https://linkedin.com/in/jose-del-valle-94993a124/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://facebook.com/jose.j.delvalle.58"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook />
              </a>

              <a href="mailto:josejr.delvalle@aetherosglobal.com">
                <FaEnvelope />
              </a>

            </div>

            <p className="modal-description">
              {selectedMember.description}
            </p>

          </div>

        </div>

      )}

    </section>
  );
};

export default Team;