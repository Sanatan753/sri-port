import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";
import Stars from "./Stars"; // Import the Stars component

const projects = [
  {
    title: "Neutrino Oscillation Simulations",
    description: "Developed simulations using GLoBES to analyze sterile neutrino oscillations.",
    link: "#",
  },
  {
    title: "Quantum Mechanics Computational Model",
    description: "Built a mathematical model to visualize quantum mechanical systems using Python.",
    link: "#",
  },
  {
    title: "Plasma Physics Research",
    description: "Investigated different types of plasma and their applications in particle accelerators.",
    link: "#",
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      
      
      <motion.h1 
        className="projects-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Research & Projects
      </motion.h1>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className="project-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} className="project-link">View Details</a>
          </motion.div>
        ))}
      </div>
      <Stars /> {/* Add the falling stars animation */}
    </div>
  );
};

export default Projects;
