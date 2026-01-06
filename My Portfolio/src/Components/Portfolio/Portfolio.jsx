import React from "react";
import "./Portfolio.css";

// Import screenshots from assets
import ContactPage from "../../assets/Figma ContactPage.png";
import HomePage from "../../assets/Figma Homepage.png";
import LoginPage from "../../assets/Figma LoginPage.png";
import LoginForm from "../../assets/Loginform project.png";
import RegistrationForm from "../../assets/RegistrationForm.png";
import ToDoList from "../../assets/ToDoList.png";

const Portfolio = () => {
  const portfolioItems = [
    { image: HomePage, title: "Homepage Design" },
    { image: ContactPage, title: "Contact Page Design" },
    { image: LoginPage, title: "Login Page Design" },
    { image: LoginForm, title: "Login Form Project" },
    { image: RegistrationForm, title: "Registration Form" },
    { image: ToDoList, title: "To-Do List Project" },
  ];

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-header">
        <h2>My Latest <span>Work</span></h2>
      </div>
      <div className="portfolio-grid">
        {portfolioItems.map((item, index) => (
          <div className="portfolio-card" key={index}>
            <img src={item.image} alt={item.title} />
            <div className="portfolio-title">{item.title}</div>
          </div>
        ))}
      </div>
  <div className="show-more-wrapper">
    <button className="show-more-btn">
      Show More <span className="arrow">→</span>
    </button>
  </div>
    </section>
  );
};

export default Portfolio;