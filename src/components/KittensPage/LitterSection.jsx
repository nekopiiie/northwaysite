import React from 'react';
import styles from './LitterSection.module.css';
import KittenCard from '../KittenCard/KittenCard';

const LitterSection = ({ title, date, kittens }) => {
  return (
    <div className={styles.litterWrapper}>
      <div className={styles.litterContainer}>
        <div className={styles.litterHeader}>
          <h2 className={styles.litterTitle}>{title}</h2>
          <span className={styles.litterDate}>{date}</span>
        </div>
        <div className={styles.cardsScroll}>
          {kittens.map((kitten, idx) => (
            <KittenCard
              key={idx}
              image={kitten.image}
              statusText={kitten.statusText}
              statusVariant={kitten.statusVariant}
              name={kitten.name}
              pedigree={kitten.pedigree}
              gender={kitten.gender}
              birthday={kitten.birthday}
              onDetailClick={kitten.onDetailClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LitterSection;