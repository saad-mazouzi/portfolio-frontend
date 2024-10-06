// src/components/Portfolio.js
import React from 'react';
import Navbar from './Navbar/Navbar'; 
import AboutMe from './Aboutme/AboutMe';
import Education from './Education/Education';
import ProfessionalExperience from './Experience/ProfessionalExperience';
import TechnicalSkills from './Technicalskills/TechnicalSkills';
import InterpersonalSkills from './Interpersonalskills/InterpersonalSkills';
import Contact from './Contact/Contact';
import ResumeDownload from './Resume/ResumeDownload';
import Projects from './Projects/Projects';
import CertificationCarousel from './Certification/CertificationCarousel';

import 'bootstrap/dist/css/bootstrap.min.css'; 

const Portfolio = () => {
  return (
    <div>
      <Navbar />
      <ResumeDownload />
      <AboutMe />
      <ProfessionalExperience />
      <Projects />
      <CertificationCarousel />
      <Education />
      <TechnicalSkills />
      <InterpersonalSkills />
      <Contact />
    </div>
  );
};

export default Portfolio;
