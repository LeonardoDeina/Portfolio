// src/pages/QuotePage/QuotePage.jsx
import React from 'react';
import styles from './QuotePage.module.css'; // Crie este arquivo CSS também
// Importe o QuoteForm quando ele for criado
// import QuoteForm from '../../components/forms/QuoteForm';

const QuotePage = () => {
  return (
    <div className={`${styles.quotePage} container section`}>
      <h1 className="section-title">Solicite um Orçamento</h1>
      <p className={styles.introText}>
        Pronto para dar o próximo passo e transformar sua ideia em um site incrível?
        Preencha o formulário abaixo com o máximo de detalhes possível sobre o seu projeto,
        e entrarei em contato em breve com uma proposta personalizada.
      </p>

      {/* Você vai adicionar o componente QuoteForm aqui quando ele estiver pronto */}
      {/* <QuoteForm /> */}
      <div className={styles.formPlaceholder}>
        <p>Formulário de Orçamento em breve aqui!</p>
        <p>Enquanto isso, você pode adaptar o <code>ContactForm.jsx</code> para criar um <code>QuoteForm.jsx</code> com os campos necessários (tipo de site, número de páginas, funcionalidades desejadas, etc.) e um script PHP <code>quote.php</code> no backend.</p>
      </div>
    </div>
  );
};

export default QuotePage;