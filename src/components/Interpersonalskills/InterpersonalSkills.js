// src/components/InterpersonalSkills.js
import React, { useEffect, useState } from 'react';
import './InterpersonalSkills.css'; // Assurez-vous d'importer le fichier CSS
import axios from 'axios';

const InterpersonalSkills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get('https://portfolio-backend-1-qp1v.onrender.com/api/interperso/');
        console.log(response.data);
        setSkills(response.data);
      } catch (err) {
        setError('Erreur lors du chargement des compétences interpersonnelles');
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('interpersonal-skills');
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
    <section id="interpersonal-skills" className={`interpersonal-skills ${isVisible ? 'fadeInUp' : ''}`}>
<h2 className="skills-title">Compétences Interpersonnelles</h2>
{loading && <p>Chargement...</p>}
      {error && <p>{error}</p>}
      <div className="skills-container">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.id}>
            <img src={skill.icon} alt={`${skill.skill} Icon`} className="skill-icon" />
            <h3>{skill.skill}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InterpersonalSkills;
