import React from 'react';
import styles from './Pagination.module.css';

import { ReactComponent as ArrowTop } from '../../assets/icons/ArrowTop.svg';

const Pagination = ({ totalPages = 4, currentPage = 1, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const canGoPrev = currentPage > 1;
  const canGoNext = currentPage < totalPages;

  const handlePrev = () => {
    if (canGoPrev) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (canGoNext) onPageChange(currentPage + 1);
  };

  return (
    <div className={styles.container}>
      <button
        type="button"
        className={`${styles.arrowBtn} ${!canGoPrev ? styles.disabled : ''}`}
        onClick={handlePrev}
        disabled={!canGoPrev}
        aria-label="Предыдущая страница"
      >
        <ArrowTop className={styles.arrowIcon} style={{ transform: 'rotate(-90deg)' }} />
      </button>

      {pages.map((page) => {
        const isActive = page === currentPage;

        return (
          <React.Fragment key={page}>
            <span className={isActive ? styles.activeItem : styles.item}>
              {String(page).padStart(2, '0')}
            </span>

            {isActive && <span className={styles.line} aria-hidden="true" />}
          </React.Fragment>
        );
      })}

      <button
        type="button"
        className={`${styles.arrowBtn} ${!canGoNext ? styles.disabled : ''}`}
        onClick={handleNext}
        disabled={!canGoNext}
        aria-label="Следующая страница"
      >
        <ArrowTop className={styles.arrowIcon} style={{ transform: 'rotate(90deg)' }} />
      </button>
    </div>
  );
};

export default Pagination;