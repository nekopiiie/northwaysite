import React from 'react';
import styles from './Input.module.css';

const Input = ({ placeholder = 'Введите текст...', value, onChange, type = 'text', name }) => {
  return (
    <input 
      className={styles.input}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      id={name}
    />
  );
};

export default Input;