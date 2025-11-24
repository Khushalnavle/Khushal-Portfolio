// src/pages/Contact.jsx
import React from "react";
import "./Contact.css";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />

      <div className="contact-container">
        {/* Intro Heading */}
        <motion.h2
          className="contact-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Contact Me
        </motion.h2>

        {/* Description */}
        <motion.p
          className="contact-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Always open for collaboration, freelance, and exciting development opportunities.
        </motion.p>

        {/* Contact Box */}
       <motion.div
  className="contact-box"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.25 }}
>

  {/* TWO-COLUMN ROW */}
  <div className="contact-row">
    <div className="contact-col">
      <div className="contact-label">Email</div>
      <a href="mailto:khushalnavle8@gmail.com" className="contact-value">
        khushalnavle8@gmail.com
      </a>
    </div>

    <div className="contact-col">
      <div className="contact-label">Phone</div>
      <p className="contact-value">+64 022 450 6274</p>
    </div>
  </div>

  {/* LOCATION */}
  <div className="contact-label">Location</div>
  <p className="contact-value">Auckland, New Zealand</p>

  {/* SOCIALS */}
  <div className="contact-label">Socials</div>
  <div className="contact-socials">
    <a href="https://github.com/Khushalnavle" target="_blank">GitHub</a>
    <a href="https://www.linkedin.com/in/khushal-navle-9b849a2ba/" target="_blank">LinkedIn</a>
  </div>

</motion.div>


        {/* CV Button */}
<motion.a
  href="/CV.docx"
  download="Khushal_Navle_CV.docx"
  className="cv-button"
>
  Download CV
</motion.a>

      </div>
    </>
  );
};

export default Contact;
