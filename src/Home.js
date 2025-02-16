import React from "react";
import { motion } from "framer-motion";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <motion.h1 
        className="home-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to My Physics Portfolio
      </motion.h1>
      
      <motion.p 
        className="home-description"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        Hi! I'm a passionate Physics major graduate with a deep interest in quantum mechanics, astrophysics, and computational modeling.
      </motion.p>

      <motion.button 
        className="home-button"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        Explore My Work
      </motion.button>
    </div>
  );
};

export default Home;
