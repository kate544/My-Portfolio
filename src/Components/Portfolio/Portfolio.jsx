import React from "react";
import "./Portfolio.css";

import ZenithDesign from "../../assets/ZenithDesign.png";
import HomePage from "../../assets/Figma Homepage.png";
import ComfortHomesDesign from "../../assets/ComfortHomesDesign.png";
import ComfortHomes from "../../assets/ComfortHomes.png";
import ComfortHomesMpesa from "../../assets/ComfortHomesMpesa.png";
import RegistrationForm from "../../assets/RegistrationForm.png";

const Portfolio = () => {
  const portfolioItems = [
    { image: HomePage, title: "HomePage Design", link: "https://www.figma.com/design/mfWCWF6Fb6vxDaxUxNmcRE/My-Portfolio?m=auto&t=MlU7se9biphIX45G-6"},
    { image: ZenithDesign, title: "Zenith Ai Design", link: "https://www.figma.com/design/ruI0RV5L6MMjTcYmCo2W3t/Zenith-AI?m=auto&t=sRBnSeYxmc4QprKu-6" },
    { image: ComfortHomesDesign, title: "ComfortHomesDesign", link: "https://www.figma.com/design/DxXqgKApQpjZkRL6OyenUF/Comfort-Homes?m=auto&t=wPmaW7kuzy8N88P9-6"},
    { image: ComfortHomes, title: "ComfortHomes Website", link: "https://kate544.github.io/Comfort-Homes-2/" },
    { image: ComfortHomesMpesa , title: "MpesaPayment Api", link: "https://kate544.github.io/ComfortHomes-Payment/" },
    { image: RegistrationForm, title: "Registration Form", link: "https://kate544.github.io/React-login-registration-form/" },
  ];

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-header">
        <h2>My Latest <span>Work</span></h2>
      </div>
      <div className="portfolio-grid">
        {portfolioItems.map((item, index) => (
          /* 3. Wrap the card in an anchor tag so it's clickable */
          <a href={item.link} target="_blank" rel="noopener noreferrer" key={index} className="portfolio-link">
            <div className="portfolio-card">
              <img src={item.image} alt={item.title} />
              <div className="portfolio-title">{item.title}</div>
            </div>
          </a>
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