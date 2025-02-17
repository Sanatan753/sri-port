import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import profilePic from "./profile.png"; // Ensure you have a profile picture in the same directory

const Home = () => {

  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="home-container">
      <motion.div 
        className="profile-pic-container"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <img src={profilePic} alt="Profile" className="profile-pic" />
      </motion.div>

      <motion.h1 
        className="home-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to My Portfolio
      </motion.h1>
      
      <motion.p 
        className="home-description"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        Hi! I'm Suka Sriyansu Pattanaik, a passionate Physics major graduate with a deep interest in quantum mechanics, astrophysics, and computational modeling.
      </motion.p>

      <motion.button 
        className="home-button"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
        onClick={() => navigate("/projects")} // Navigates to Projects
      >
        Explore My Work
      </motion.button>
    </div>
  );
};

export default Home;
