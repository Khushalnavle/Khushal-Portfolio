// src/pages/Gallery.jsx
import React from "react";
import { motion } from "framer-motion";
import "./Gallery.css";
import Navbar from "../components/Navbar";

import img1 from "../assets/gallery/img1.jpg";
import img2 from "../assets/gallery/img2.jpg";
import img3 from "../assets/gallery/img3.jpg";
import img4 from "../assets/gallery/img4.jpg";
import img6 from "../assets/gallery/img6.jpg";
import img8 from "../assets/gallery/img8.jpg";
import img9 from "../assets/gallery/img9.jpg";
import img10 from "../assets/gallery/img10.jpg";
import img11 from "../assets/gallery/img11.jpg";
import img12 from "../assets/gallery/img12.jpg";
import img13 from "../assets/gallery/img13.jpg";
import img14 from "../assets/gallery/img14.jpg";
import img15 from "../assets/gallery/img15.jpg";
import img16 from "../assets/gallery/img16.jpg";
import img17 from "../assets/gallery/img17.jpg";

const images = [
  img1, img2, img3, img4,
  img6, img8, img9, img10,
  img11, img12, img13, img14, img15,
  img16, img17,
];

function shuffleArray(array) {
  return array
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

const Gallery = () => {
  return (
    <>
      <Navbar />

      <div className="gallery-container">

        {/* ✨ NEW QUOTE */}
        <motion.p
          className="gallery-quote"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Photography is just my side hobby a way to capture moments I don’t want to forget.
        </motion.p>

        <motion.div
          className="gallery-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {shuffleArray(images).map((img, index) => (
            <motion.div
              key={index}
              className="gallery-card"
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
            >
              <div className="gallery-overlay">View</div>
              <img src={img} alt="" className="gallery-img" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Gallery;
