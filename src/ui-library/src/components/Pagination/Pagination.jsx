import React from 'react';
import styles from './Pagination.module.css';

import { ReactComponent as ArrowTop } from '../../assets/icons/ArrowTop.svg';

const Pagination = ({ totalPages = 4, currentPage = 1, onPageChange }) => {
  // Создаем массив [1, 2, 3, 4]
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className={styles.container}>
      {/* Кнопка ВЛЕВО */}
      <button 
        className={`${styles.arrowBtn} ${currentPage === 1 ? styles.disabled : ''}`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        
        <ArrowTop className={styles.arrowIcon} style={{ transform: 'rotate(-90deg)' }} />
      </button>

      {/* Цифры и Линия */}
      {pages.map((page) => {
        const isActive = page === currentPage;
        return (
          <React.Fragment key={page}>
            <span className={isActive ? styles.activeItem : styles.item}>
              {/* Добавляем ноль спереди (01, 02...) */}
              {String(page).padStart(2, '0')}
            </span>
            
            {/* ЛИНИЯ Появляется ТОЛЬКО после активного элемента! */}
            {isActive && <span className={styles.line}></span>}
          </React.Fragment>
        );
      })}

      {/* Кнопка ВПРАВО (всегда активна) */}
      <button 
        className={styles.arrowBtn}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <ArrowTop className={styles.arrowIcon} style={{ transform: 'rotate(90deg)' }} />
      </button>
      
    </div>
  );
};

export default Pagination;