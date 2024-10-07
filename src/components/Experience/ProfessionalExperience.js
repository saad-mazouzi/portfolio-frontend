import React, { useEffect, useState } from 'react';
import './ProfessionalExperience.css'; // Assurez-vous d'importer le fichier CSS
import axios from 'axios';

const ProfessionalExperience = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await axios.get('https://portfolio-backend-1-qp1v.onrender.com/api/experiences/');
        console.log(response.data);
        setExperiences(response.data);
      } catch (err) {
        setError('Erreur lors du chargement des expériences');
      } finally {
        setLoading(false);
      }
    };

    fetchExperiences();
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

    const element = document.getElementById('professional-experience');
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
    <section id="professional-experience" className={`professional-experience ${isVisible ? 'fadeInUp' : ''}`}>
      <h2 className='experience-title'>
        <span className="line-above"></span>
        Expériences Professionnelles
        <span className="line-below"></span>
      </h2>
      {loading && <p>Chargement...</p>}
      {error && <p>{error}</p>}
      <div className="experience-container">
        {experiences.map((experience, index) => (
          <div
            className="experience-card"
            key={experience.id}
            style={{ animationDelay: `${index * 0.1}s` }} // Ajout d'un délai d'animation
          >
            <img src={experience.company_logo} alt={`${experience.company_name} Logo`} className="company-logo" />
            <div className="experience-details">
              <h3>{experience.job_title} - {experience.company_name}</h3>
              <p><strong>Période:</strong> {experience.start_date} - {experience.end_date}</p>
              <p><strong>Projet:</strong> {experience.project_title}</p>
              <p><strong>Description:</strong> {experience.description}</p>
              <p><strong>Compétences techniques:</strong> {experience.technical_skills}</p>
              <p><strong>Lieu:</strong> {experience.location}</p>
            </div>
            {experience.project_video && (
              <div className="video-container">
                <video
                  src={experience.project_video}
                  controls
                  autoPlay
                  loop
                  muted
                  className="project-video"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProfessionalExperience;
