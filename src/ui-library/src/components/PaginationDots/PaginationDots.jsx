import React from 'react';
import styles from './PaginationDots.module.css';

const PaginationDots = ({ totalDots = 4, activeDot = 1, onDotChange }) => {
  const dots = Array.from({ length: totalDots }, (_, i) => i + 1);

  return (
    <div className={styles.container}>
      {dots.map((dot) => (
        <span 
          key={dot}
          className={`${styles.dot} ${dot === activeDot ? styles.active : ''}`}
          onClick={() => onDotChange(dot)}
        />
      ))}
    </div>
  );
};

export default PaginationDots;