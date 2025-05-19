// src/pages/ContactPage/ContactPage.jsx
import React from 'react';
import styles from './ContactPage.module.css'; // Crie este arquivo CSS também
import ContactForm from '../../components/forms/ContactForm'; // Importando o formulário

const ContactPage = () => {
  return (
    <div className={`${styles.contactPage} container section`}>
      <h1 className="section-title">Fale Comigo</h1>
      <p className={styles.introText}>
        Tem alguma pergunta, sugestão ou quer discutir um novo projeto?
        Utilize o formulário abaixo ou entre em contato através dos canais listados.
        Estou ansioso para ouvir de você!
      </p>

      <ContactForm />

      <div className={styles.otherContactInfo}>
        <h2>Outras Formas de Contato</h2>
        <p><strong>Email:</strong> seu.email@example.com</p>
        <p><strong>WhatsApp/Telefone:</strong> (XX) XXXXX-XXXX (opcional)</p>
        <p>
          <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/seu-linkedin" target="_blank" rel="noopener noreferrer">Seu Perfil no LinkedIn</a>
        </p>
         <p>
          <strong>GitHub:</strong> <a href="https://github.com/LeonardoDeina" target="_blank" rel="noopener noreferrer">LeonardoDeina</a>
        </p>
      </div>
    </div>
  );
};

export default ContactPage;