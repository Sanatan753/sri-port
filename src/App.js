import React from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import "./App.css"
import Home from "./Home.js" ;
import About from "./About.js";
import Skills from "./Skills.js";
import Projects from "./Projects.js";
import Publications from "./Publications.js";
import Contact from "./Contact.js";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white font-sans">
        <nav className="p-4 bg-gray-800 flex justify-between items-center shadow-lg">
          <h1 className="text-2xl font-bold">Suka Sriyansu Pattanaik</h1>
          <div className="space-x-4">
            <NavLink to="/" className="hover:text-gray-400">Home</NavLink>
            <NavLink to="/about" className="hover:text-gray-400">About</NavLink>
            <NavLink to="/projects" className="hover:text-gray-400">Projects</NavLink>
            <NavLink to="/skills" className="hover:text-gray-400">Skills</NavLink>
            <NavLink to="/publications" className="hover:text-gray-400">Publications</NavLink>
            <NavLink to="/contact" className="hover:text-gray-400">Contact</NavLink>
          </div>
        </nav>
        <div className="p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
