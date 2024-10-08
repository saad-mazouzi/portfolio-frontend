import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import './AboutMe.css'; 
import axios from 'axios'; 
import { RingLoader } from 'react-spinners'; // Importez RingLoader

const AboutMe = () => {
  const [aboutMeData, setAboutMeData] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    config: { duration: 3000 }, 
  });

  // Affiche le RingLoader en cas de chargement
  if (loading) {
    return (
      <div className="loader-container">
        <RingLoader color="#007bff" size={150} /> {/* Personnalisez la couleur et la taille */}
      </div>
    );
  }

  if (error) return <p>{error}</p>;
  if (!aboutMeData) return <p>Aucune donnée disponible.</p>;

  return (
    <section id="about" className="about-me">
      <div className="container d-flex align-items-center">
        <animated.img
          src={aboutMeData.profile_picture}
          alt="Mon image"
          className="about-me-image"
          style={fadeIn}
        />
        <animated.div className="about-me-text" style={fadeIn}>
          <h2>À propos de moi</h2>
          <p>{aboutMeData.description}</p>
        </animated.div>
      </div>
    </section>
  );
};

export default AboutMe;
