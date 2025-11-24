import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      {/* Hamburger Button */}
      <div className="hamburger hover-zone">
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Slide Panel */}
      <div className="side-panel hover-zone">
        <div className="panel-content">
          <a href="/" className="nav-link">Home</a>
          <a href="/skills" className="nav-link">Skills</a>
          <a href="/projects" className="nav-link">Projects</a>
          <a href="/gallery" className="nav-link">Gallery</a>
          <a href="/contact" className="nav-link">Contact</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
