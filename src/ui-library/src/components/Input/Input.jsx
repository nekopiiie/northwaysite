import React from 'react';
import styles from './Input.module.css';

/**
 * Компонент поля ввода
 * @param {string} placeholder - Подсказывающий текст
 * @param {string} value - Текущее значение
 * @param {function} onChange - Функция при вводе текста
 * @param {string} type - Тип ввода (text, email, password и т.д.)
 */
const Input = ({ placeholder = 'Введите текст...', value, onChange, type = 'text' }) => {
  return (
    <input 
      className={styles.input}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;