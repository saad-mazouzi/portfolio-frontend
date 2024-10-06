import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './TechnicalSkills.css'; // Importez le fichier CSS

const TechnicalSkills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchTechnicalSkills = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/techskills/');
        setSkills(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des compétences techniques', error);
      }
    };

    fetchTechnicalSkills();
  }, []);

  return (
    <section id="technical-skills" className="technical-skills fadeInUp">
      <h2 className="technical-skills-title">Compétences Techniques</h2>
      <div className="technical-skills-container">
        {skills.map((skill) => (
          <div key={skill.id} className="technical-skill-item">
    
            <div className="technical-skill-details">
              <h3 className="technical-skill-title">{skill.title}</h3>
              <p className="technical-skill-description">{skill.description}</p>
            </div>
            {skill.icons && <img src={skill.icons} alt={skill.title} className="technical-skill-icon" />}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnicalSkills;
