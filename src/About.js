import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">SUKA SRIYANSU PATTANAIK</h1>
      <h2 className="about-subtitle">4TH YEAR INTEGRATED MSc PHYSICS</h2>
      <p className="about-contact">Phone: +91 79784 58634 | Email: p.sriyansu@gmail.com</p>
      
      <section className="about-section">
        <h3>Education</h3>
        <p><strong>Integrated MSc Physics</strong> – Department of Physics and Astronomy, NIT Rourkela</p>
        <p><strong>12th Grade</strong> – Kendriya Vidyalaya Rourkela, CBSE</p>
      </section>
      
      <section className="about-section">
        <h3>Research Experience</h3>
        <p><strong>3+2 Sterile Neutrino Oscillations</strong> – University College London (2021-Present)</p>
        <p>Advisor: Prof. Frank F Deppisch | Sterile Neutrino Oscillations using GLoBES for T2K</p>
        <p><strong>Neutrino Oscillation Phenomenology</strong> – IIT Bhilai (May 2024)</p>
        <p>Advisor: Dr. Sudhanwa Patra | Simulating Neutrino Oscillations using Mathematica & C</p>
        <p><strong>Plasma Physics Applications</strong> – IUAC (Oct 2023)</p>
      </section>
      
      <section className="about-section">
        <h3>Relevant Courses</h3>
        <ul>
          <li>Quantum Mechanics, Classical Mechanics, Thermal Physics</li>
          <li>Condensed Matter Physics, Neutrino Physics, Group and Ring Theory</li>
        </ul>
      </section>
      
      <section className="about-section">
        <h3>Skills</h3>
        <ul>
          <li>Python, C Programming, Linux</li>
          <li>GLoBES, AutoCAD, Adobe Photoshop & Illustrator</li>
        </ul>
      </section>
      
      <section className="about-section">
        <h3>Extra-Curricular Activities</h3>
        <p>Creative Head – AstroNITR | Designer – Inspire NITR | Freelancer – Writing & Editing</p>
      </section>
    </div>
  );
};

export default About;
