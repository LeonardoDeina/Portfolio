// src/components/Navbar/Navbar.jsx
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
// import logoImage from '../../assets/images/logo.png'; // Descomente se tiver um logo

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={`${styles.navContainer} container`}>
        <Link to="/" className={styles.navLogo}>
          {/* <img src={logoImage} alt="LD Web Solutions Logo" className={styles.logoImage} /> */}
          LD Web Solutions
        </Link>

        <button className={styles.menuToggle} onClick={toggleMenu} aria-label="Abrir menu">
          {isOpen ? '✕' : '☰'}
        </button>

        <ul className={`${styles.navMenu} ${isOpen ? styles.active : ''}`}>
          <li className={styles.navItem}>
            <NavLink to="/" className={({isActive}) => isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink} onClick={() => setIsOpen(false)}>Início</NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to="/sobre" className={({isActive}) => isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink} onClick={() => setIsOpen(false)}>Sobre Mim</NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to="/portfolio" className={({isActive}) => isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink} onClick={() => setIsOpen(false)}>Portfólio</NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to="/servicos" className={({isActive}) => isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink} onClick={() => setIsOpen(false)}>Serviços</NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to="/orcamento" className={`${styles.navLink} ${styles.ctaLink}`} onClick={() => setIsOpen(false)}>Orçamento</NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to="/contato" className={styles.navLink} onClick={() => setIsOpen(false)}>Contato</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;