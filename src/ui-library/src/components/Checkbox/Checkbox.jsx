import React from 'react';
import styles from './Checkbox.module.css';

import { ReactComponent as CheckIcon } from '../../assets/icons/Check.svg';

const Checkbox = ({ label, checked = false, onChange, error = false }) => {
  return (
    <label className={`${styles.label} ${error ? styles.error : ''}`}>
      
      {/* Невидимый настоящий чекбокс для логики */}
      <input 
        type="checkbox" 
        className={styles.realInput} 
        checked={checked} 
        onChange={onChange} 
      />

      {/* Наш визуальный квадратик */}
      <span className={styles.square}>
        <CheckIcon className={styles.icon} />
      </span>

      <span className={styles.text}>{label}</span>
    </label>
  );
};

export default Checkbox;