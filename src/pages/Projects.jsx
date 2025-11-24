// src/pages/Projects.jsx
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import "./Projects.css";
import Navbar from "../components/Navbar";

const projects = [
  {
    title: "Domio.nz (Capstone Project)",
    description:
      "A full-stack rental management platform with dashboards, property listings, and tenant workflows.",
    tools:
      "React · JavaScript · Firebase Auth · Firestore · Cloud Storage · Hosting · Tailwind CSS",
    variant: "tall",
  },
  {
    title: "Team Work Management App",
    description:
      "Mobile-style workflow and task management app for teams with real-time updates and clean UI.",
    tools: "React / React Native style · Firebase · Node.js · UI/UX · Authentication",
    variant: "wide",
  },
  {
    title: "Hotel Management System (Java)",
    description:
      "Java-based hotel booking & records system, integrating frontend and backend logic.",
    tools: "Java · JDBC · MySQL · OOP · GUI",
    variant: "",
  },
  {
    title: "Multiplayer Mario-Style Game",
    description:
      "2D Unity platformer with real-time multiplayer engine and smooth physics.",
    tools: "Unity · C# · 2D Physics · Animation · Networking",
    variant: "tall",
  },
  {
    title: "Bank Management System",
    description:
      "Bank operations system with account, transaction and secure data handling.",
    tools: "Java · SQL · OOP · JavaFX · System Design",
    variant: "wide",
  },
  {
    title: "Book Sorting System",
    description:
      "System to organize, sort, and categorize books efficiently for quick lookup.",
    tools: "Java · Data Structures · Sorting Algorithms · UI Design",
    variant: "",
  },
];

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const lightRef = useRef(null);
  const glossRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const light = lightRef.current;
    const gloss = glossRef.current;
    if (!card || !light || !gloss) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateY = ((x - centerX) / centerX) * 6;
      const rotateX = -((y - centerY) / centerY) * 6;

      gsap.to(card, {
        rotationX: rotateX,
        rotationY: rotateY,
        transformPerspective: 800,
        transformOrigin: "center",
        duration: 0.35,
        ease: "power2.out",
      });

      gsap.to(light, {
        x,
        y,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseEnter = () => {
      // Lift card slightly
      gsap.to(card, {
        y: -8,
        duration: 0.4,
        ease: "power2.out",
      });

      // Gloss sweep
      gsap.fromTo(
        gloss,
        { x: "-150%" },
        {
          x: "150%",
          duration: 1.1,
          ease: "power2.out",
        }
      );
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotationX: 0,
        rotationY: 0,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
      });

      gsap.to(light, {
        x: "50%",
        y: "0%",
        duration: 0.5,
        ease: "power2.out",
      });
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
<motion.div
  ref={cardRef}
  className={`project-card ${project.variant}`}
  variants={{
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }}
>

      {/* Neon animated border */}
      <div className="project-border-glow" />

      {/* Glass inner layer */}
      <div className="project-inner">
        {/* Parallax light */}

        {/* Gloss reflection */}
        <div ref={glossRef} className="project-gloss" />

        {/* Default (description) */}
        <div className="project-default">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>

        {/* Hover (tools & languages) */}
        <div className="project-hover">
          <h4>Tools & Languages</h4>
          <p>{project.tools}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <><Navbar />
    <div className="projects-container">
      <motion.h2
        className="projects-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Projects
      </motion.h2>

        <motion.div
        className="masonry-grid"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
            hidden: {},
            show: {
            transition: {
                staggerChildren: 0.15,   // 👈 each card appears one by one
            },
            },
        }}
        >
        {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
        ))}
        </motion.div>

    </div>
    </>
  );
};

export default Projects;
