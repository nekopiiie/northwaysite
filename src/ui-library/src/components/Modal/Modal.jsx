import React, { useEffect } from 'react';
import styles from './Modal.module.css';
import Button from '../Button/Button'; 

const Modal = ({ isOpen, onClose, title = "Заголовок", images = [], currentIndex = 0, onPrev, onNext }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen]);

  if (!isOpen) return null;

  const currentImage = images[currentIndex];

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modalBox} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h4 className={styles.title}>{title}</h4>
          <Button variant="circleClose" onClick={onClose} />
        </div>
        <div className={styles.imageFrame}>
          <img src={currentImage} alt="Modal content" className={styles.image} />
        </div>
        {images.length > 1 && (
          <div className={styles.navigation}>
            <Button variant="circlePrimary" onClick={onPrev} className={styles.navPrev} />
            <Button variant="circlePrimary" onClick={onNext} className={styles.navNext} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;