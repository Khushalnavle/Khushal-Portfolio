import React from "react";
import "./Navbar.css";
import { track } from "@vercel/analytics";

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
          <a 
            href="/" 
            className="nav-link"
            onClick={() => track("nav_click", { page: "Home" })}
          >
            Home
          </a>

          <a 
            href="/skills" 
            className="nav-link"
            onClick={() => track("nav_click", { page: "Skills" })}
          >
            Skills
          </a>

          <a 
            href="/projects" 
            className="nav-link"
            onClick={() => track("nav_click", { page: "Projects" })}
          >
            Projects
          </a>

          <a 
            href="/gallery" 
            className="nav-link"
            onClick={() => track("nav_click", { page: "Gallery" })}
          >
            Gallery
          </a>

          <a 
            href="/contact" 
            className="nav-link"
            onClick={() => track("nav_click", { page: "Contact" })}
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
