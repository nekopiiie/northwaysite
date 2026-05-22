import React from 'react';
import styles from './TextBox.module.css';

const TextBox = ({ icon: Icon, title, description }) => {
  return (
    <div className={styles.textBox}>
      <div className={styles.header}>
        <div className={styles.iconWrapper}>
          {Icon && <Icon />}
        </div>
        <h6 className={styles.title}>{title}</h6>
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default TextBox;