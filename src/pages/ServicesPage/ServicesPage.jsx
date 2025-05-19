// src/pages/ServicesPage/ServicesPage.jsx
import React from 'react';
import styles from './ServicesPage.module.css'; // Crie este arquivo CSS também

const ServicesPage = () => {
  const services = [
    {
      title: "Criação de Landing Pages",
      description: "Desenvolvo Landing Pages com foco em conversão, design atraente e totalmente responsivas. Ideais para campanhas de marketing, lançamento de produtos ou captação de leads.",
      details: [
        "Design personalizado e moderno",
        "Otimização para SEO básica",
        "Integração com formulários de contato/captura",
        "Carregamento rápido",
        "Visualização perfeita em todos os dispositivos"
      ]
    },
    {
      title: "Desenvolvimento de Sites Institucionais",
      description: "Crio sites institucionais (até X páginas, por exemplo, 5 páginas como Sobre, Serviços, Contato, etc.) para apresentar sua empresa, marca ou projeto de forma profissional e organizada na internet.",
      details: [
        "Estrutura de navegação intuitiva",
        "Seções informativas e bem distribuídas",
        "Design que reflete a identidade da sua marca",
        "Blog básico (opcional)",
        "Mapa de localização e formulário de contato"
      ]
    },
    {
      title: "Manutenção e Atualização de Sites Simples",
      description: "Ofereço suporte para pequenas atualizações de conteúdo, correções de bugs em sites estáticos ou baseados em HTML/CSS/JS simples, e otimizações de performance.",
      details: [
        "Atualização de textos e imagens",
        "Correção de links quebrados ou problemas de layout",
        "Melhorias de velocidade de carregamento",
        "Pequenos ajustes de design"
      ]
    },
    {
      title: "Consultoria para Presença Online (Em Breve)",
      description: "Planejando expandir para oferecer consultoria para ajudar pequenos negócios e profissionais a definir a melhor estratégia para sua presença online.",
      details: []
    },
    {
      title: "Desenvolvimento de E-commerce (Futuramente)",
      description: "Tenho planos de, no futuro, expandir meus serviços para incluir o desenvolvimento de lojas virtuais completas.",
      details: []
    }
  ];

  return (
    <div className={`${styles.servicesPage} container section`}>
      <h1 className="section-title">Meus Serviços</h1>
      <p className={styles.introText}>
        Ofereço soluções web personalizadas para atender às suas necessidades,
        com foco na qualidade, design moderno e funcionalidade.
      </p>
      <div className={styles.servicesContainer}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <h2 className={styles.serviceTitle}>{service.title}</h2>
            <p className={styles.serviceDescription}>{service.description}</p>
            {service.details && service.details.length > 0 && (
              <ul className={styles.serviceDetails}>
                {service.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;