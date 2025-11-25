import React from "react";
import "./Home.css";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom"; 
import myPhoto1 from "../assets/images/Photo1.jpg";
import myPhoto2 from "../assets/images/Photo2.jpg";
import myPhoto3 from "../assets/images/Photo3.jpg";
import Sign from "../assets/images/Sign.png";

const Home = () => {

  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <div className="home-wrapper">
        <div className="home-left">
          <h1 className="home-title">Khushal Navle</h1>
          <p className="home-subtitle">Developer • Designer • Creator</p>
        </div>

        <div className="home-right">
          <img src={myPhoto1} alt="Khushal" className="profile-img" />
        </div>
      </div>

      {/* ABOUT SECTION */}
      <div className="about-creative">

        {/* CENTER PHOTO */}
        <div className="about-center-img">
          <img src={myPhoto2} alt="Khushal" className="about-photo" />
        </div>

        {/* TEXT BLOCKS AROUND THE PHOTO */}
        <div className="about-text about-top-left">
          <span className="about-number">01</span>
          <h3 className="about-heading">LOVE</h3>
          <p>I love minimalism, UI design, clean animation and modern aesthetic.</p>
        </div>

        <div className="about-text about-top-right">
          <span className="about-number">02</span>
          <h3 className="about-heading">EXPERIENCE</h3>
          <p>Worked across multiple full-stack and design-focused projects.</p>
        </div>

        <div className="about-text about-bottom-left">
          <span className="about-number">03</span>
          <h3 className="about-heading">APPROACH</h3>
          <p>I mix engineering logic with clean visual design for best results.</p>
        </div>

        <div className="about-text about-bottom-right">
          <span className="about-number">04</span>
          <h3 className="about-heading">INSPIRATION</h3>
          <p>Inspired by music, photography, nature and modern digital art.</p>
        </div>

      </div>

      {/* INSPIRATION / QUOTE SECTION */}
      <div className="quote-section">

        <div className="quote-left">
          <img 
            src={myPhoto3}   // replace if you upload a new image
            alt="Inspiration" 
            className="quote-photo" 
          />
        </div>

        <div className="quote-right">
          <p className="quote-text">
            “Technology is best when it brings people together
            and I build software that does exactly that.”
          </p>
        </div>

      </div>

      {/* PROJECTS BUTTON */}
      <div className="projects-btn-wrapper">
        <button 
          className="projects-btn"
          onClick={() => navigate("/projects")}   // <-- FIXED
        >
          Projects
        </button>
      </div>
      <footer className="footer">

      {/* LEFT SIDE — SIGNATURE */}
      <div className="footer-left">
        <img src={Sign} alt="Signature" className="signature-img" />
      </div>

      {/* MIDDLE VERTICAL LINE */}
      <div className="footer-divider-vertical"></div>

      {/* RIGHT SIDE — SOCIAL ICONS */}
      <div className="footer-right">
        <div className="footer-icons">
          <a href="https://www.instagram.com/khushal__3?igsh=Zm1kZ283d2hsaDhi" target="_blank"><i className="fa-brands fa-instagram"></i></a>
          <a href="https://www.linkedin.com/in/khushal-navle-9b849a2ba/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
          <a href="https://github.com/Khushalnavle" target="_blank"><i className="fa-brands fa-github"></i></a>
          <a href="mailto:khushalnavle8@gmail.com"><i className="fa-solid fa-envelope"></i></a>
        </div>
      </div>

    </footer>

    {/* COPYRIGHT */}
    <div className="footer-copy-wrapper">
      <p className="footer-copy">
        © {new Date().getFullYear()} Khushal Navle. All rights reserved.  
        All images used are owned by Khushal Navle.
      </p>
    </div>
          </>
        );
      };

export default Home;
