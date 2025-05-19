// src/components/forms/ContactForm.jsx
import React, { useState } from 'react';
import styles from './Form.module.css'; // Usando um CSS module genérico para formulários
import Button from '../Button/Button';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) { // Limpa o erro ao digitar
        setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Nome é obrigatório.";
    if (!formData.email.trim()) {
        newErrors.email = "Email é obrigatório.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Email inválido.";
    }
    if (!formData.subject.trim()) newErrors.subject = "Assunto é obrigatório.";
    if (!formData.message.trim()) newErrors.message = "Mensagem é obrigatória.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus('sending');
    try {
      // ATENÇÃO: O endpoint '/api/contact.php' precisa estar configurado no seu servidor
      // para receber requisições do seu frontend React (CORS pode ser um problema).
      // Em desenvolvimento, o servidor de dev do React e o servidor PHP rodam em portas diferentes.
      // Em produção, você pode colocar a pasta 'api' junto com os arquivos de build do React.
      const response = await fetch('/api/contact.php', { // Ajuste o caminho conforme sua estrutura de deploy
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' }); // Limpa formulário
      } else {
        setStatus('error');
        // Você pode querer exibir result.message se o backend retornar uma mensagem de erro específica
        console.error('Erro ao enviar:', result.message || 'Erro desconhecido');
      }
    } catch (error) {
      setStatus('error');
      console.error('Falha na requisição:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h3 className={styles.formTitle}>Entre em Contato</h3>

      {status === 'success' && <p className={styles.successMessage}>Mensagem enviada com sucesso! Entraremos em contato em breve.</p>}
      {status === 'error' && <p className={styles.errorMessage}>Ocorreu um erro ao enviar a mensagem. Tente novamente.</p>}

      <div className={styles.formGroup}>
        <label htmlFor="name">Nome Completo</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        {errors.name && <span className={styles.errorText}>{errors.name}</span>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email">Seu Melhor Email</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        {errors.email && <span className={styles.errorText}>{errors.email}</span>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="subject">Assunto</label>
        <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
        {errors.subject && <span className={styles.errorText}>{errors.subject}</span>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="message">Sua Mensagem</label>
        <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
        {errors.message && <span className={styles.errorText}>{errors.message}</span>}
      </div>

      <Button type="submit" primary disabled={status === 'sending'}>
        {status === 'sending' ? 'Enviando...' : 'Enviar Mensagem'}
      </Button>
    </form>
  );
};

export default ContactForm;