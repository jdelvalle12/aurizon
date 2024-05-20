import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import emailjs from 'emailjs-com'; // Import email.js library
import ContactUs from '../images/contact-us-two.jpg';
import '../styles/Contact.css';
import '../App.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyEmail: '',
    phone: '',
    companyName: '',
    industry: '', 
    state: '',
    intent: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission, e.g., send data to an API or email service
  };

  return (
      <div className='contact-container'>
        <img src={ContactUs} alt='ContactUs' className="contact-us-background" />
        <h1 className='contact-title'>Contact Us</h1>
        <div className="design-inquiries">
          {/* <h3 className='contact-header'>Design Inquiries:</h3> */}
          <p>Questions, feedback, need further assistance, we are here to help. Fill out the form below of your inquiry.</p>
          {/* <ul>
            <li>Name</li>
            <li>Email</li>
            <li>Nature of your inquiry</li>
            <li>Email to: <button onClick={() => window.location.href = 'mailto:jdelvalle88@live.com'}>jdelvalle88@live.com</button></li>
          </ul> */}
          <form onSubmit={handleSubmit}>
            <label htmlFor='firstName'>First Name:</label>
            <input type='text' name='firstName' id='firstName' value={formData.firstName} onChange={handleChange} required />
            <span>This field is required</span>
            <br />
            <label htmlFor='lastName'>Last Name:</label>
            <input type='text' name='lastName' id='lastName' value={formData.lastName} onChange={handleChange} required />
            <span>This field is required</span>
            <br />
            <label htmlFor='companyEmail'>Company Email:</label>
            <input type='email' name='companyEmail' id='companyEmail' value={formData.companyEmail} onChange={handleChange} required />
            <span>This field is required</span>
            <br />
            <label htmlFor='phone'>Phone:</label>
            <input type='text' name='phone' id='phone' value={formData.phone} onChange={handleChange} required />
            <span>This field is required</span>
            <br />
            <label htmlFor='companyName'>Company Name:</label>
            <input type='text' name='companyName' id='companyName' value={formData.companyName} onChange={handleChange} />
            <br />
            <label htmlFor='industry'>Industry:</label>
            <input type='text' name='industry' id='industry' value={formData.industry} onChange={handleChange} />
            <br />
            <label htmlFor='state'>State:</label>
            <input type='text' name='state' id='state' value={formData.state} onChange={handleChange} />
            <br />
            <label htmlFor='intent'>Intent of Message:</label>
            <input type='text' name='intent' id='intent' value={formData.intent} onChange={handleChange} />
            <br />
            <label htmlFor='message'>Message:</label>
            <textarea name='message' id='message' value={formData.message} onChange={handleChange} />
            <br />
            <input type='submit' value='Submit' />
          </form>
        </div>
      </div>
  );
}

export default Contact;