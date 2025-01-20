import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './logo.png'; // Add your logo here

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo-title">
          <img src={logo} alt="Logo" className="navbar-logo" />
          <h1 className="navbar-title">Chiranjeevi</h1>
        </div>
        <ul className="nav-links">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/about" className="nav-link">About</Link></li>
          <li><Link to="/projects" className="nav-link">Projects</Link></li>
          <li><Link to="/skills" className="nav-link">Skills</Link></li>
          <li><Link to="/contact" className="nav-link">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
