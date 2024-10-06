// src/components/Education.js
import React, { useEffect, useState } from 'react';
import './Education.css'; 

import esiImage from '../../images/esi.jpg'; 
import cpgeImage from '../../images/cpge.jpg';

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Déconnecte l'observer après la première détection
        }
      },
      { threshold: 0.1 } // Déclenche l'événement lorsque 10% de la section est visible
    );

    const element = document.getElementById('education');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="education" className={`education ${isVisible ? 'fadeInUp' : ''}`}>
      <h2 className='education-title'>Éducation</h2>
      <div className="education-container">
        <div className="education-item">
          <img src={esiImage} alt="École des Sciences de l'Information" className="education-image" loading="lazy" />
          <div className="education-details">
            <h3>École des Sciences de l'Information (ESI)</h3>
            <div className="education-info">
              <p className="education-date">Septembre 2021 - Juin 2024</p>
              <p className="education-location">Rabat, Maroc</p>
            </div>
            <p className="education-description">
              Diplôme d'Ingénieur d'État en Ingénierie des Connaissances et Science des Données
            </p>
          </div>
        </div>
        <div className="education-item">
          <img src={cpgeImage} alt="Classes Préparatoires aux Grandes Écoles" className="education-image" loading="lazy" />
          <div className="education-details">
            <h3>Classes Préparatoires aux Grandes Écoles (CPGE), Filière MP</h3>
            <div className="education-info">
              <p className="education-date">Septembre 2019 - Juin 2021</p>
              <p className="education-location">Meknès, Maroc</p>
            </div>
            <p className="education-description">
              Réussite au Concours National Commun (CNC)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
