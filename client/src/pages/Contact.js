import React from 'react';
// import emailjs from 'emailjs-com'; // Import email.js library
import Rotating from '../images/rotating-planet.mp4';
import '../styles/Contact.css';
import '../App.css';

export default function Contact() {
  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
  //     .then((success) => {
  //       console.log(success);
  //       // Reset the form or show success message, etc.
  //     }, (invalid) => {
  //       console.log(invalid);
  //       // Handle error, show error message, etc.
  //     });
  // };

  return (
    <section>
      <video src={Rotating} autoPlay loop muted className="background-video"></video>
      <div className='contact-container'>
        <h1 className='contact-title'>Contact</h1>
        <div className="design-inquiries">
          <h3 className='contact-header'>Design Inquiries:</h3>
            <p> Do you have a question or comment? Click on the button below and provide the following:</p>
              <ul>
                <li>Name</li>
                <li>Email</li>
                <li>Nature of your inquiry</li>
                <li>Email to: <button onClick={() => window.location.href = 'mailto:jdelvalle88@live.com'}>jdelvalle88@live.com</button></li>
              </ul>
          {/* <form onSubmit={sendEmail}> 
            <label className="text-right" htmlFor="name">Name:</label>
            <input type="text" id="name" name="from_name" /> 
            <br />
            <label className="text-right" htmlFor="email">Email:</label>
            <input type="text" id="email" name="from_email" /> 
            <br />
            <label className="text-right" htmlFor="message">Message:</label>
            <input type="text" id="message" name="message" /> 
            <br />
            <div className="text-center">
              <button type="submit">SEND</button>
            </div>
          </form> */}
        </div>
      </div>
    </section>
  );
}
