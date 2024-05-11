import React from 'react';
import { useForm } from 'react-hook-form';
// import emailjs from 'emailjs-com'; // Import email.js library
import ContactUs from '../images/contact-us-two.jpg';
import '../styles/Contact.css';
import '../App.css';

const Contact = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

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
      <div className='contact-container'>
      <img src={ContactUs} alt='ContactUs' className="contact-us-background"></img>
        <h1 className='contact-title'>Contact</h1>
        <div className="design-inquiries">
          <h3 className='contact-header'>Design Inquiries:</h3>
            <p>Do you have a question? Click on the button below and provide the following:</p>
              <ul>
                <li>Name</li>
                <li>Email</li>
                <li>Nature of your inquiry</li>
                <li>Email to: <button onClick={() => window.location.href = 'mailto:jdelvalle88@live.com'}>jdelvalle88@live.com</button></li>
              </ul>
           <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor='firstName'>First Name:</label>
            <input type='text' name='firstName' id='firstName' ref={register({required: true})} />
            {errors.firstName && <span>This field is required</span>}

            <label htmlFor='lastName'>Last Name:</label>
            <input type='text' name='lastName' id='lastName' ref={register({required: true})} />
            {errors.lastName && <span>This field is required</span>}

            <label htmlFor='companyEmail'>Company Email:</label>
            <input type='email' name='companyEmail' id='companyEmail' ref={register({required: true})} />
            {errors.companyEmail && <span>This field is required</span>}

            <label htmlFor='phone'>Phone:</label>
            <input type='text' name='phone' id='phone' ref={register({required: true})} />
            {errors.phone && <span>This field is required</span>}

            <label htmlFor='companyName'>Company Name:</label>
            <input type='text' name='companyName' id='companyName' ref={register} />

            <lable htmlFor='industry'>Industry:</lable>
            <input type='text' name='industry' id='industry' ref={register} />

            <label htmlFor='state'>State:</label>
            <input type='text' name='state' id='state' ref={register} />

            <label htmlFor='intent'>Intent of Message:</label>
            <input type='text' name='intent' id='intent' ref ={register} />

            <label htmlFor='message'>Message:</label>
            <textarea name='message' id='message' ref={register} />

            <input type='submit' value='Submit' />
           </form>
        </div>
      </div>
  );
}

export default Contact;