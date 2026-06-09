import React from 'react';
import styles from './ReviewCard.module.css';
import { Button } from '../../ui-library/src/Library'; // импорт кнопки

import { ReactComponent as ColonIcon } from '../../assets/icons/Colon.svg';

const ReviewCard = ({ name, cat, avatar, text, date, onViewClick }) => {
  return (
    <div className={styles.card} onClick={onViewClick}>
      {/* Верхняя часть: Аватар и Имена */}
      <div className={styles.topSection}>
        <div className={styles.namesWrapper}>
          <h6 className={styles.name}>{name}</h6>
          <p className={styles.catName}>{cat}</p>
        </div>
        <img src={avatar} alt={name} className={styles.avatar} />
      </div>

      {/* Средняя часть: Иконка и Текст */}
      <div className={styles.middleSection}>
        <div className={styles.iconWrapper}>
           <ColonIcon className={styles.icon} />
        </div>
        <p className={styles.text}>{text}</p>
      </div>

      {/* Нижняя часть: Дата и Кнопка */}
      <div className={styles.bottomSection}>
        <span className={styles.date}>{date}</span>
        <Button variant="link" title="смотреть" onClick={onViewClick} />
      </div>
    </div>
  );
};

export default ReviewCard;