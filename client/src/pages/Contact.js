import React, { useState } from 'react';

import ContactUs from '../images/digital-network.jpg';
import WhyContact from '../images/why-contact.jpg';

import '../styles/Contact.css';
import '../App.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="contact-container">

      {/* HERO */}
      <section className="contact-hero">

        <img
          src={ContactUs}
          alt="Contact Aurizon"
          className="contact-background"
        />

        <div className="contact-overlay"></div>

        <div className="contact-title">
          <h1>Contact Aurizon</h1>

          <p>
            Let's start the conversation.
            Whether you have questions about technology solutions,
            consulting, partnerships, or future opportunities,
            we'd love to hear from you.
          </p>
        </div>

      </section>

      {/* CONTACT OPTIONS */}

      <section className="contact-options">

        <div className="contact-card">
          <h3>General Inquiries</h3>
          <p>
            Questions about Aurizon Technologies and our services.
          </p>
        </div>

        <div className="contact-card">
          <h3>Technology Consulting</h3>
          <p>
            Discuss technology challenges, planning, and future projects.
          </p>
        </div>

        <div className="contact-card">
          <h3>Partnership Opportunities</h3>
          <p>
            Explore collaboration and strategic partnerships.
          </p>
        </div>

      </section>

      {/* FORM */}

      <section className="contact-form-section">

        <div className="contact-form-card">

          <h2>Send Us a Message</h2>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone (Optional)"
              value={formData.phone}
              onChange={handleChange}
            />

            <select
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleChange}
              required
            >
              <option value="">Select Inquiry Type</option>
              <option>General Question</option>
              <option>Technology Consulting</option>
              <option>IT Support</option>
              <option>Partnership</option>
              <option>Career Inquiry</option>
            </select>

            <textarea
              name="message"
              placeholder="How can we help?"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button type="submit">
              Submit Inquiry
            </button>

          </form>

        </div>

      </section>

      {/* WHY CONTACT */}

      <section className="contact-section">

        <img
          src={WhyContact}
          alt="Technology Solutions"
          className="contact-image"
        />

        <div className="contact-text">

          <h2>Why Contact Aurizon?</h2>

          <p>
            Technology should help organizations move forward with confidence.
          </p>

          <p>
            Whether you're looking for guidance, consulting,
            technical support, or future collaboration,
            we're here to help.
          </p>

        </div>

      </section>

      {/* CTA */}

      <section className="contact-cta">

        <h2>Let's Build Something Together</h2>

        <p>
          We're always open to conversations about technology,
          innovation, and future opportunities.
        </p>

        <a
          href="mailto:info@aurizontech.com"
          className="contact-button"
        >
          Email Us
        </a>

      </section>

    </div>
  );
};

export default Contact;