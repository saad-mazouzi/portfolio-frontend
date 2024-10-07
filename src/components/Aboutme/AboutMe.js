// src/components/AboutMe.js
import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import './AboutMe.css'; 
import axios from 'axios'; 

const AboutMe = () => {
  // Déclarez les états pour stocker les données du backend
  const [aboutMeData, setAboutMeData] = useState(null); // Passez à null initialement
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Utilisez useEffect pour récupérer les données du backend
  useEffect(() => {
    const fetchAboutMeData = async () => {
      try {
        const response = await axios.get('https://portfolio-backend-1-qp1v.onrender.com/api/aboutme');
        if (response.data.length > 0) {
          setAboutMeData(response.data[0]);
        }
        setLoading(false);
      } catch (err) {
        setError('Erreur lors du chargement des données');
        setLoading(false);
      }
    };

    fetchAboutMeData();
  }, []);

  const fadeIn = useSpring({
    opacity: 8,
    transform: 'translateX(0)',
    from: { opacity: 0, transform: 'translateX(-30px)' },
    config: { duration: 3000 }, // Durée de l'animation en millisecondes
  });

  // Affiche un message de chargement ou d'erreur
  if (loading) return <p>Chargement en cours...</p>;
  if (error) return <p>{error}</p>;
  if (!aboutMeData) return <p>Aucune donnée disponible.</p>; // Vérifiez si les données existent

  return (
    <section id="about" className="about-me">
      <div className="container d-flex align-items-center">
        <animated.img
          src={aboutMeData.profile_picture} // Utilisez l'image récupérée depuis le backend
          alt="Mon image"
          className="about-me-image"
          style={fadeIn}
        />
        <animated.div className="about-me-text" style={fadeIn}>
          <h2>À propos de moi</h2>
          <p>{aboutMeData.description}</p> {/* Utilisez la description récupérée */}
        </animated.div>
      </div>
    </section>
  );
};

export default AboutMe;
