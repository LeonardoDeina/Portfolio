// src/components/Button/Button.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

const Button = ({ children, to, onClick, primary, type = 'button', disabled = false }) => {
  const buttonClasses = `${styles.btn} ${primary ? styles.primary : styles.secondary}`;

  if (to) {
    return (
      <Link to={to} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={buttonClasses} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;