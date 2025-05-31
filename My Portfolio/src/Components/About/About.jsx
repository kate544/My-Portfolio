import React from 'react';
import './About.css';
import Image from '../../assets/Image.jpg';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-left">
        <img src={Image} alt="Profile" className="about-image" />
      </div>

      <div className="about-right">
        <h2 className="about-title">About <span>me</span></h2>
       <p>
  I'm a budding Frontend Developer and UI/UX enthusiast with a year of focused learning and hands-on practice. 
  In this time, I've designed and built several personal projects that helped me develop a strong understanding of responsive design, user experience, and modern web development practices.
</p>
<p>
  I'm driven by curiosity and a passion for crafting clean, user-friendly interfaces. 
  While I'm still building my portfolio, I'm constantly learning, experimenting, and refining my skills to grow into a well-rounded frontend developer.
</p>
<p>
  I enjoy working with tools like <strong>React </strong>and <strong>Figma</strong> to bring ideas to life.
</p>


        <div className="skills">
          {[
            { name: 'HTML & CSS', level: '80%' },
            { name: 'React JS', level: '90%' },
            { name: 'JavaScript', level: '90%' },
             { name: 'Figma', level: '90%'},
          ].map(skill => (
            <div className="skill" key={skill.name}>
              <span>{skill.name}</span>
              <div className="bar">
                <div style={{ width: skill.level }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
