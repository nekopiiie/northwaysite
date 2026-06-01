import React from 'react';
import styles from './Tag.module.css';

const Tag = ({ variant = 'status', icon: Icon, text }) => {
  return (
    <div className={`${styles.tag} ${styles[variant]}`}>
      {Icon && <div className={styles.iconWrapper}><Icon /></div>}
      <span className={styles.text}>{text}</span>
    </div>
  );
};

export default Tag;