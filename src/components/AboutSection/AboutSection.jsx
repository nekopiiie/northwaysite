import React from 'react';
import styles from './AboutSection.module.css';
import TextBox from '../TextBox/TextBox';

// Импортируем локальные иконки (путь поправишь, когда сохранишь файлы)
import { ReactComponent as KittyIcon } from '../../assets/icons/Kitty.svg';
import { ReactComponent as HeartIcon } from '../../assets/icons/Heart.svg';
import { ReactComponent as PawIcon } from '../../assets/icons/Paw.svg';

const AboutSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Контейнер 1: Тексты */}
        <div className={styles.textContainer}>
          <h2 className={styles.heading}>
            Легенда Севера<br />у вас дома
          </h2>
          <p className={styles.subtitle}>
            Норвежская лесная кошка (скогкат) — легендарная порода с суровой северной красотой. 
            Веками эти независимые и преданные кошки жили рядом с викингами. Узнайте, почему их любят во всем мире.
          </p>
        </div>

        {/* Контейнер 2: Карточки */}
        <div className={styles.cardsContainer}>
          <TextBox 
            icon={KittyIcon} 
            title="Активный интеллектуал" 
            description="Это сильные, ловкие и любознательные животные, отличные охотники и верхолазы. Они медленно взрослеют (до 5 лет), сохраняя игривость котенка, и обожают наблюдать за миром с высоты." 
          />
          <TextBox 
            icon={HeartIcon} 
            title="Отличное здоровье" 
            description="Норвежские лесные кошки — аборигенная порода, закалённая суровым климатом. Естественный отбор подарил им крепкое здоровье и выносливость, что обеспечивает долгую (15 и более лет) и активную жизнь." 
          />
          <TextBox 
            icon={PawIcon} 
            title="Дружелюбный характер" 
            description="«Норвеги» известны своим мягким, уравновешенным нравом, высоким интеллектом и терпимостью к детям и другим животным. Они формируют крепкую связь со всеми членами семьи." 
          />
        </div>

      </div>
    </section>
  );
};

export default AboutSection;