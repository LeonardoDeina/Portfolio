// src/pages/HomePage/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';
import Button from '../../components/Button/Button'; // Componente de botão reutilizável

// Importe algumas imagens de projetos ou uma imagem de herói
// import heroImage from '../../assets/images/hero-background.jpg';
// import projectThumb1 from '../../assets/images/project-thumb1.jpg';
// import projectThumb2 from '../../assets/images/project-thumb2.jpg';

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <header className={styles.heroSection} /* style={{ backgroundImage: `url(${heroImage})` }} */>
        <div className={`${styles.heroContent} container`}>
          <h1 className={styles.heroTitle}>Soluções Web Criativas e Modernas para o seu Negócio</h1>
          <p className={styles.heroSubtitle}>
            Desenvolvo Landing Pages e Sites Institucionais com design rústico-moderno,
            focados em usabilidade e resultados.
          </p>
          <div className={styles.heroActions}>
            <Button to="/portfolio" primary>Veja Meus Projetos</Button>
            <Button to="/orcamento">Solicite um Orçamento</Button>
          </div>
        </div>
      </header>

      {/* Seção Sobre Mim (Resumida) */}
      <section className={`${styles.aboutPreview} section container`}>
        <h2 className="section-title">Quem Sou</h2>
        <div className={styles.aboutContent}>
          {/* <img src={profileImage} alt="Leonardo Deina" className={styles.profilePic} /> */}
          <div>
            <p>
              Olá! Sou Leonardo Santos Deina, um desenvolvedor web apaixonado por criar
              experiências digitais únicas que combinam estética e funcionalidade.
              Com foco em um design rústico moderno, busco entregar soluções que
              realmente representem a identidade dos meus clientes.
            </p>
            <Button to="/sobre">Saiba Mais Sobre Mim</Button>
          </div>
        </div>
      </section>

      {/* Seção de Serviços (Resumida) */}
      <section className={`${styles.servicesPreview} section`} style={{backgroundColor: 'var(--color-wood-light)', color: 'var(--color-text-primary)'}}>
        <div className="container">
            <h2 className="section-title" style={{color: 'var(--color-wood-dark)'}}>O Que Eu Faço</h2>
            <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
                <h3>Landing Pages</h3>
                <p>Páginas de aterrissagem otimizadas para conversão, com design impactante.</p>
            </div>
            <div className={styles.serviceItem}>
                <h3>Sites Institucionais</h3>
                <p>Presença online profissional para sua empresa, com até X páginas.</p>
            </div>
            <div className={styles.serviceItem}>
                <h3>Design Responsivo</h3>
                <p>Seu site perfeito em qualquer dispositivo: desktops, tablets e celulares.</p>
            </div>
            </div>
            <div style={{textAlign: 'center', marginTop: '30px'}}>
                <Button to="/servicos">Ver Todos os Serviços</Button>
            </div>
        </div>
      </section>

      {/* Seção de Portfólio (Destaques) */}
      <section className={`${styles.portfolioPreview} section container`}>
        <h2 className="section-title">Últimos Trabalhos</h2>
        <div className={styles.portfolioGrid}>
          {/* Exemplo de item de portfólio - idealmente viria de um array de dados e usaria ProjectCard */}
          <div className={styles.portfolioItem}>
            {/* <img src={projectThumb1} alt="Projeto 1" /> */}
            <h3>Nome do Projeto 1</h3>
            <Link to="/portfolio/projeto-1">Ver Detalhes</Link>
          </div>
          <div className={styles.portfolioItem}>
            {/* <img src={projectThumb2} alt="Projeto 2" /> */}
            <h3>Nome do Projeto 2</h3>
            <Link to="/portfolio/projeto-2">Ver Detalhes</Link>
          </div>
          {/* Adicionar mais ou um link para a página completa de portfólio */}
        </div>
        <div style={{textAlign: 'center', marginTop: '30px'}}>
            <Button to="/portfolio" primary>Ver Portfólio Completo</Button>
        </div>
      </section>
    </>
  );
};

export default HomePage;