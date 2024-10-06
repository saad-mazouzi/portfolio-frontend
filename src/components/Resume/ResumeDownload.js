// ResumeDownload.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ResumeDownload.css'; // Assurez-vous d'importer le fichier CSS

const ResumeDownload = () => {
    const [resumeUrl, setResumeUrl] = useState('');

    useEffect(() => {
        // Récupérer le CV depuis le backend
        const fetchResume = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/resume/');
                if (response.data.length > 0) {
                    setResumeUrl(response.data[0].file);
                }
            } catch (error) {
                console.error('Erreur lors de la récupération du CV:', error);
            }
        };

        fetchResume();
    }, []);

    return (
        <div style={{ textAlign: 'center', margin: '20px 0' }}>
            <a
                href={resumeUrl}
                download
                className="resume-download animate" // Ajoutez les classes CSS
            >
                Télécharger mon CV
            </a>
        </div>
    );
};

export default ResumeDownload;
