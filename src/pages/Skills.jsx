// src/pages/Skills.jsx
import React from "react";
import "./Skills.css";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const skillData = [
  {
    title: "Frontend Development",
    desc:
      "React.js · JavaScript (ES6+) · Tailwind CSS · HTML5 · CSS3 · UI/UX · Animations · Responsive Design",
  },
  {
    title: "Backend & API Development",
    desc:
      "Node.js · Express.js · Java · Python · REST APIs · Authentication · Realtime Systems",
  },
  {
    title: "Databases & Cloud",
    desc:
      "Firebase · Firestore · MySQL · SQL · PostgreSQL · MongoDB · Google Cloud · AWS",
  },
  {
    title: "Tools & Professional Skills",
    desc:
      "Git · GitHub · Jira · Figma · Postman · Agile Scrum · Debugging · Documentation",
  },
];

const sizeClasses = ["normal", "tall", "wide", "normal"]; // balanced for 2×2 layout

const Skills = () => {
  return (
    <>
      <Navbar />

      <div className="skills-container">
        <motion.div
          className="skills-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {skillData.map((s, i) => (
            <motion.div
              key={i}
              className={`skill-card ${sizeClasses[i]}`}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
            >
              <h3 className="skill-title">{s.title}</h3>
              <p className="skill-desc">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Skills;
