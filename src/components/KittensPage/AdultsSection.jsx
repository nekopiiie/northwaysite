import React from 'react';
import styles from './AdultsSection.module.css';
import KittenCard from '../KittenCard/KittenCard';

const AdultsSection = ({ adults }) => {
  return (
    <div className={styles.adultsWrapper}>
      <div className={styles.adultsContainer}>
        <div className={styles.adultsHeader}>
          <h2 className={styles.adultsTitle}>Взрослые животные ищут дом!</h2>
          <p className={styles.adultsDescription}>
            Иногда мы помогаем в поиске нового дома для наших взрослых животных (например, вышедших из разведения).
            Это воспитанные, здоровые питомцы с устоявшимся характером.
          </p>
        </div>
        <div className={styles.cardsScroll}>
          {adults.map((adult, idx) => (
            <KittenCard
              key={idx}
              image={adult.image}
              statusText={adult.statusText}
              statusVariant={adult.statusVariant}
              name={adult.name}
              pedigree={adult.pedigree}
              gender={adult.gender}
              birthday={adult.birthday}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdultsSection;