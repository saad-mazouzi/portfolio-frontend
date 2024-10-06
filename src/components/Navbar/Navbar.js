import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Assurez-vous que Bootstrap est importé
import './Navbar.css'; // Importez votre feuille de style personnalisée
import logo from '../../images/943026.png'; // Chemin correct pour importer l'image

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container-fluid"> {/* Changement de container à container-fluid */}
        {/* Conteneur pour l'image et le texte aligné à gauche */}
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img src={logo} alt="Mon CV" className="navbar-logo" />
          <span className="ml-2">Portfolio</span>
        </a>

        {/* Boutons de la navbar alignés à droite */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link custom-blue" href="#about">À propos de moi</a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-blue" href="#education">Éducation</a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-blue" href="#professional-experience">Expériences professionnelles</a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-blue" href="#projects">Projets réalisés</a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-blue" href="#technical-skills">Compétences techniques</a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-blue" href="#interpersonal-skills">Compétences interpersonnelles</a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-blue" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
