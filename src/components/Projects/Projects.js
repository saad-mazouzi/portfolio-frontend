import React, { useEffect, useState } from 'react';
import './Projects.css'; // Assurez-vous d'importer le fichier CSS
import axios from 'axios';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/projects/');
        console.log(response.data);
        setProjects(response.data);
      } catch (err) {
        setError('Erreur lors du chargement des projets');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
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

    const element = document.getElementById('projects-section');
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
    <section id="projects" className={`projects ${isVisible ? 'fadeInUp' : ''}`}>
      <h2 className='projects-title'>Projets réalisés</h2>
      {loading && <p>Chargement...</p>}
      {error && <p>{error}</p>}
      <div className="projects-container">
        {projects.map((project, index) => (
          <div
            className="project-card"
            key={project.id}
            style={{ animationDelay: `${index * 0.1}s` }} // Ajout d'un délai d'animation
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href=''></a>
            {project.cover_image && ( // Remplacez 'cover_image' par le champ approprié si différent
              <div className="image-container">
                <img
                  src={project.cover_image}
                  alt={project.title}
                  className="project-image"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
