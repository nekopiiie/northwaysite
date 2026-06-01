import React, { useState, useRef } from 'react';
import styles from './WhyUsSection.module.css';
import WhyUsCard from '../WhyUsCard/WhyUsCard';
import { PaginationDots } from '../../ui-library/src/Library';

import { ReactComponent as LoupeIcon } from '../../assets/icons/Loupe.svg';
import { ReactComponent as ShieldIcon } from '../../assets/icons/Shield.svg';
import { ReactComponent as DocIcon } from '../../assets/icons/Document.svg';
import { ReactComponent as SupportIcon } from '../../assets/icons/Support.svg';

const cardsData = [
  { id: 1, icon: LoupeIcon, title: "Опыт и экспертиза", text: "Мы — зарегистрированный питомник, наши производители регулярно проходят экспертизу на выставках и имеют допуск в разведение. Мы руководствуемся знаниями в области фелинологии и генетики." },
  { id: 2, icon: ShieldIcon, title: "Здоровье", text: "Все животные регулярно обследуются у ветеринара, имеют прививки и документы. Мы открыто информируем о генетических тестах родителей." },
  { id: 3, icon: DocIcon, title: "Документы", text: "Каждый котёнок передаётся новому владельцу с полным пакетом документов: договор, ветеринарный паспорт, метрика (родословная)." },
  { id: 4, icon: SupportIcon, title: "Поддержка", text: "Мы остаёмся на связи после переезда котёнка и всегда готовы дать консультацию по выращиванию, воспитанию и содержанию." }
];

const WhyUsSection = () => {
  const [activeDot, setActiveDot] = useState(1);
  const scrollRef = useRef(null); // Привязка к полосе скролла

  // ФУНКЦИЯ СЛЕДЯЩАЯ ЗА СКРОЛЛОМ
  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      // Ширина одной карточки + отступ (344 + 16 = 360px)
      const cardWidth = 360; 
      // Вычисляем, какая карточка сейчас в фокусе
      const newIndex = Math.round(scrollLeft / cardWidth) + 1;
      if (newIndex >= 1 && newIndex <= 4 && newIndex !== activeDot) {
        setActiveDot(newIndex);
      }
    }
  };

  // Клик по точке -> скроллим к нужной карточке
  const handleDotClick = (dotIndex) => {
    setActiveDot(dotIndex);
    if (scrollRef.current) {
      const scrollTo = (dotIndex - 1) * 360; // 360 * (индекс - 1)
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.imageCol}>
        <div className={styles.textOverlay}>
          <h2 className={styles.heading}>Почему мы</h2>
          <p className={styles.subtitle}>Мы не просто продаём котят, а с любовью продолжаем породу, отвечая за каждое своё решение и каждого питомца.</p>
        </div>
      </div>

      <div className={styles.cardsCol}>
        <div className={styles.grid} ref={scrollRef} onScroll={handleScroll}>
          {cardsData.map(card => (
            <WhyUsCard key={card.id} {...card} />
          ))}
        </div>
        
        <div className={styles.dotsWrapper}>
          <PaginationDots totalDots={4} activeDot={activeDot} onDotChange={handleDotClick} />
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;