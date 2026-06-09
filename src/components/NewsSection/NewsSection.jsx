import React from 'react';
import styles from './NewsSection.module.css';
import NewsCard from '../NewsCard/NewsCard';
import { Button } from '../../ui-library/src/Library';

import Img1 from '../../assets/images/news1.jpg';
import Img3 from '../../assets/images/news3.jpg';

const NewsSection = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <h2 className={styles.heading}>Последние новости</h2>
      </div>

      {/* Слайдер с карточками */}
      <div className={styles.cardsScroll}>
        <NewsCard 
          type="featured"
          tagText="новость"
          title="У нас пополнение!"
          description="В питомнике родились трое здоровых малышей. Девочки получили имена Сара, Стелла и мальчик Шейн. Все котята чувствуют себя отлично, активно набирают вес и уже готовятся к переезду в новые дома."
          image={Img1}
          dateText="01.01.2024"
        />
        <NewsCard 
          type="text"
          tagText="статья"
          title="Как подготовить дом к приезду норвежского лесного котенка?"
          description="Переезд в новый дом - стресс для малыша. Рассказываем, что нужно купить заранее: от правильных мисок и лотка до когтеточки и безопасных мест для первого укрытия"
          dateText="15.01.2024"
        />
        <NewsCard 
          type="image"
          tagText="новость"
          title="Привет от выпускника!"
          description="Получили письмо из Санкт-Петербурга: «Баюн стал главным членом семьи. Провожает на работу, встречает у двери, спит только в ногах. Здоровье отличное, шерсть блестит. Огромное спасибо питомнику за такого друга!»"
          image={Img3}
          dateText="20.01.2024"
        />
      </div>

      <div className={styles.buttonWrapper}>
        <Button variant="primary" title="ко всем новостям" className={styles.mobileBtn}/>
      </div>

    </section>
  );
};

export default NewsSection;