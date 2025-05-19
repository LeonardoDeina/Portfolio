// src/components/Footer/Footer.jsx
import React from 'react';
import styles from './Footer.module.css'; // Você precisará criar este arquivo CSS também

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerContent} container`}>
        <p>&copy; {new Date().getFullYear()} LD Web Solutions. Todos os direitos reservados.</p>
        <p>
          <a href="https://www.linkedin.com/in/leonardo-deina-seu-linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a> | 
          <a href="https://github.com/LeonardoDeina" target="_blank" rel="noopener noreferrer">GitHub</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;