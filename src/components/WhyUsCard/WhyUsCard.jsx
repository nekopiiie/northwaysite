import React from 'react';
import styles from './WhyUsCard.module.css';

const WhyUsCard = ({ icon: Icon, title, text }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.iconWrapper}>
          <Icon />
        </div>
        <h6 className={styles.title}>{title}</h6>
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default WhyUsCard;