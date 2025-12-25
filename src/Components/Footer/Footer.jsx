import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className='footer-logo'>Kathryn Tokoli<span> .</span></div>
          <p>
            I am a frontend developer passionate about creating user-friendly, responsive web designs.
          </p>
        </div>

        <div className="footer-subscribe">
          <div className="subscribe-box">
            <input type="email" placeholder="Enter your email" />
            <button className="subscribe-btn">Subscribe</button>
          </div>
        </div>
      </div>

      <hr className="divider" />

      <div className="footer-bottom">
        <p>&copy; 2025 Kathryn Tokoli. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Connect with me</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;