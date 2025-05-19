// src/pages/AboutPage/AboutPage.jsx
import React from 'react';
import styles from './AboutPage.module.css'; // Crie este arquivo CSS também
// import profileImage from '../../assets/images/profile.jpg'; // Exemplo de import de imagem

const AboutPage = () => {
  return (
    <div className={`${styles.aboutPage} container section`}>
      <h1 className="section-title">Sobre Mim</h1>
      <div className={styles.content}>
        {/* <img src={profileImage} alt="Leonardo Deina" className={styles.profileImage} /> */}
        <div className={styles.textSection}>
          <h2>Leonardo Santos Deina</h2>
          <p>
            Olá! Sou um desenvolvedor web apaixonado por transformar ideias em realidade digital. 
            Minha jornada no mundo da tecnologia começou com [conte sua história brevemente]...
          </p>
          <p>
            Com a "LD Web Solutions", meu objetivo é oferecer soluções web personalizadas,
            combinando um design rústico moderno com as melhores práticas de desenvolvimento
            para criar sites que não apenas pareçam bons, mas que também performem
            excepcionalmente bem e ajudem meus clientes a alcançar seus objetivos.
          </p>
          <h3>Minhas Habilidades:</h3>
          <ul>
            <li>HTML5, CSS3 (Flexbox, Grid, CSS Modules)</li>
            <li>JavaScript (ES6+)</li>
            <li>React.js, React Router</li>
            <li>PHP (para processamento de formulários)</li>
            <li>Design Responsivo</li>
            <li>Noções de SEO</li>
            <li>Git & GitHub</li>
            {/* Adicione mais habilidades */}
          </ul>
          <h3>Minha Abordagem:</h3>
          <p>
            Acredito na comunicação transparente e no trabalho colaborativo com meus clientes.
            Desde o briefing inicial até a entrega final, busco entender profundamente
            suas necessidades para entregar um produto que exceda as expectativas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;