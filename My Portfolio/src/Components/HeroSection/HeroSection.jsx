 import React from 'react';
import './HeroSection.css';
import MyImage from '../../assets/Image.jpg'; 

const HeroSection = () => {
  return (
    <div className='HeroSection'>
      <img src={MyImage} alt='My Portrait' className='hero-image' />
      
      <h1>  
  <span className="gradient-name">I'm Kathryn Tokoli,</span> a UI/UX developer & frontend developer based in Kenya.
</h1>

      <p>
        I design and build beautiful, user-friendly websites and digital experiences. 
        Let's create something amazing together.
      </p>
      
      <div className='hero-action'>
        <div className='hero-resume'>My resume</div>
      </div>
    </div>
  );
};

export default HeroSection;
