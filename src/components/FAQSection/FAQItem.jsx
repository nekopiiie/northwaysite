import React from 'react';
import styles from './FAQItem.module.css';

const FAQItem = ({ id, number, question, answer, colorVariant, isOpen, onToggle }) => {
  return (
    <div 
      className={`${styles.faqItem} ${styles[colorVariant]} ${isOpen ? styles.open : ''}`}
      onClick={onToggle}
    >
      <div className={styles.header}>
        <p className={styles.question}>{question}</p>
        <span className={styles.number}>{number}</span>
      </div>

      <div className={styles.answerWrapper}>
        <p className={styles.answer}>{answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;