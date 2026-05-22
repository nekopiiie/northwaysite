import React, { useEffect } from 'react';
import styles from './Modal.module.css';
import Button from '../Button/Button'; 

const Modal = ({ isOpen, onClose, title = "Заголовок", imageUrl = "" }) => {
  // Блокируем скролл тела при открытии
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen]);

  // Если окно закрыто - не рендерим ничего
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      {/* stopPropagation нужен, чтобы клик по белому окну не закрывал его */}
      <div className={styles.modalBox} onClick={(e) => e.stopPropagation()}>
        
        {/* Шапка: текст + крестик */}
        <div className={styles.header}>
          <h4 className={styles.title}>{title}</h4>
          <Button variant="circleClose" onClick={onClose} />
        </div>

        {/* Фрейм с картинкой */}
        <div className={styles.imageFrame}>
          {/* Заглушка-картинка (когда будет своя, заменишь src) */}
          <img 
            src={imageUrl || "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&h=600&fit=crop"} 
            alt="Modal content" 
            className={styles.image}
          />
        </div>

      </div>
    </div>
  );
};

export default Modal;