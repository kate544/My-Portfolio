import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  return (
    <header className="header">
      <a href="#" className="logo-name">Kathryn Tokoli</a>

     <ul className="nav-menu">
  <li><a href="#home">Home</a></li>
  <li><a href="#about">About Me</a></li>
  <li><a href="#services">Services</a></li>
  <li><a href="#portfolio">Portfolio</a></li>
  <li><a href="#contact">Contact</a></li>
</ul>

      <div className="nav-right">
        <div className="nav-connect">Connect with me</div>
        <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
