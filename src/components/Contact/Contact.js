import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Assurez-vous que cela vient du bon package
import './Contact.css'; // Assurez-vous que le chemin est correct


const ContactInfo = () => {
    const [contactInfo, setContactInfo] = useState({});

    useEffect(() => {
        const fetchContactInfo = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/contacts/'); // Remplacez par l'URL de votre API
                setContactInfo(response.data[0]); // Supposons que la réponse soit un tableau
            } catch (error) {
                console.error('Erreur lors de la récupération des informations de contact', error);
            }
        };

        fetchContactInfo();
    }, []);

    return (
        <section id="contact">
        <div className="contact-info">
            <h2>Informations de Contact</h2>
            <p>
                <FontAwesomeIcon icon={faEnvelope} />
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            </p>
            <p>
                <FontAwesomeIcon icon={faLinkedin} />
                <a href={`https://${contactInfo.linkedin}`} target="_blank" rel="noopener noreferrer">{contactInfo.linkedin}</a>
            </p>
            <p>
                <FontAwesomeIcon icon={faPhone} />
                {contactInfo.phone_number}
            </p>
            <p>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                {contactInfo.address}
            </p>
        </div>
    </section>
    );
};

export default ContactInfo;
