import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CertificationCarousel.css';

const CertificationCarousel = () => {
  const [certifications, setCertifications] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchCertifications = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/certifications/');
        setCertifications(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des certifications:', error);
      }
    };

    fetchCertifications();
  }, []);

  const prevCertification = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? certifications.length - 1 : prevIndex - 1));
  };

  const nextCertification = () => {
    setCurrentIndex((prevIndex) => (prevIndex === certifications.length - 1 ? 0 : prevIndex + 1));
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextCertification();
    }, 5000); // Change every 5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [certifications]);

  if (certifications.length === 0) {
    return <p>Aucune certification disponible</p>;
  }

  return (
    <div className="certification-carousel-container">
      <h2 className="certification-carousel-title">Certifications</h2>
      <div className="certification-carousel auto-slide">
        <button className="carousel-button prev" onClick={prevCertification}>
          &lt;
        </button>
        <div className="certification-image-container">
          <img
            src={certifications[currentIndex].certificat}
            alt={`Certification ${currentIndex + 1}`}
            className="certification-image"
          />
        </div>
        <button className="carousel-button next" onClick={nextCertification}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default CertificationCarousel;
