import React from 'react';
import './Contact.css';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-info">
          <h2 className="contact-header">
            <span>Get In</span> Touch</h2>
          <p>
            I'm currently available to take on new projects, so feel free to send me a message about anything
            that you want me to work on. You can contact anytime.
          </p>
          <div className="contact-details">
            <p><MdEmail /> kathryntokoli@gmail.com</p>
            <p><MdPhone /> +254780170460</p>
            <p><MdLocationOn /> Nairobi,Kenya</p>
          </div>
        </div>
        <form className="contact-form">
          <label>Your Name</label>
          <input type="text" placeholder="Enter your name" />
          <label>Your Email</label>
          <input type="email" placeholder="Enter your email" />
          <label>Write your message here</label>
          <textarea placeholder="Enter your message" rows="6" />
          <button type="submit" className="submit-btn">Submit now</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
