import React from 'react';
import styles from './MobileMenuButton.module.css';

const MobileMenuButton = ({ title, isActive, onClick }) => {
  return (
    <button 
      className={`${styles.menuBtn} ${isActive ? styles.active : ''}`} 
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default MobileMenuButton;