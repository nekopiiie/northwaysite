import React from 'react';
import styles from './ReviewCard.module.css';
import { Button } from '../../ui-library/src/Library'; // ← импорт Button
import { ReactComponent as ColonIcon } from '../../assets/icons/Colon.svg';

const ReviewModal = ({ isOpen, onClose, review }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        
        {/* Шапка модалки */}
        <div className={styles.topSection}>
          <div className={styles.namesWrapper}>
            <h6 className={styles.name}>{review.name}</h6>
            <p className={styles.catName}>{review.cat}</p>
          </div>
          <img src={review.avatar} alt={review.name} className={styles.avatar} />
        </div>

        {/* Текст без ограничений */}
        <div className={styles.middleSection}>
          <div className={styles.iconWrapper}>
            <ColonIcon className={styles.icon} />
          </div>
          <p className={styles.fullText}>{review.text}</p>
        </div>

        {/* Подвал с датой и крестиком */}
        <div className={styles.bottomSection}>
          <span className={styles.date}>{review.date}</span>
          <Button variant="circleClose" onClick={onClose} />
        </div>

      </div>
    </div>
  );
};

export default ReviewModal;