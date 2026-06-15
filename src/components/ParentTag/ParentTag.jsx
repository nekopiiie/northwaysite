import React from 'react';
import styles from './ParentTag.module.css';

const ParentTag = ({ name, avatar }) => {
  return (
    <div className={styles.parentTag}>
      <img src={avatar} alt={name} className={styles.avatar} />
      <span className={styles.text}>{name}</span>
    </div>
  );
};

export default ParentTag;