import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className='services' id='services'>
      <div className='services-title'>
        <h1>My <span>Services</span></h1>
      </div>

      <div className='services-container'>
        <div className='service-card'>
          <h2>01</h2>
          <h3><span>Web </span>design</h3>
          <p>Creating responsive and enganging websites tailored to your brand.</p>
          <a href="#">Read More →</a>
        </div>

        <div className='service-card'>
          <h2>02</h2>
          <h3><span>Graphics </span>design</h3>
          <p>Designing eye-catching graphics for both digital and print media.</p>
          <a href="#">Read More →</a>
        </div>

        <div className='service-card'>
          <h2>03</h2>
          <h3><span>Blog </span>writing</h3>
          <p>Crafting compelling blog content that not only informs but also boosts engagement, SEO, and your brand's authority.</p>
          <a href="#">Read More →</a>
        </div>
        <div className='service-card'>
          <h2>04</h2>
          <h3><span>App </span>design</h3>
          <p>Designing sleek and intuitive mobile and desktop applications for a smooth user experience.</p>
          <a href="#">Read More →</a>
        </div>
      </div>
    </div>
    
  );
};

export default Services;