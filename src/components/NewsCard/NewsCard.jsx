import React from 'react';
import styles from './NewsCard.module.css';
import Tag from '../Tag/Tag';
import { Button } from '../../ui-library/src/Library';

const NewsCard = ({ type = 'text', tagText, title, description, image, dateText }) => {
  return (
    <div className={`${styles.card} ${styles[type]}`}>
      
      {/* ТИП 1: ГЛАВНАЯ НОВОСТЬ */}
      {type === 'featured' && (
        <>
          <div className={styles.featuredImage}>
            <img src={image} alt={title} />
          </div>
          <div className={styles.featuredContent}>
            <Tag variant="news" text={tagText} />
            <h3 className={styles.titleFeatured}>{title}</h3>
            
            <p className={styles.description}>{description}</p>
            <div className={styles.footer}>
              <span className={styles.date}>{dateText}</span>
              <Button variant="link" title="смотреть" />
            </div>
          </div>
        </>
      )}

      {/* ТИП 2: СТАТЬЯ БЕЗ ФОТО */}
      {type === 'text' && (
        <>
          <Tag variant="news" text={tagText} />
          <h4 className={styles.title}>{title}</h4>
          <p className={styles.description}>{description}</p>
          <div className={styles.footer}>
            <span className={styles.date}>{dateText}</span>
            <Button variant="link" title="смотреть" />
          </div>
        </>
      )}

      {/* ТИП 3: СТАТЬЯ С ФОТО ВНИЗУ */}
      {type === 'image' && (
        <>
          <Tag variant="news" text={tagText} />
          <div className={styles.imageSmall}>
            <img src={image} alt={title} />
          </div>
          <h4 className={styles.title}>{title}</h4>
          <p className={styles.description}>{description}</p>
          <div className={styles.footer}>
            <span className={styles.date}>{dateText}</span>
            <Button variant="link" title="смотреть" />
          </div>
        </>
      )}
    </div>
  );
};

export default NewsCard;