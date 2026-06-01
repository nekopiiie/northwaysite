import React from 'react';
import styles from './KittensSection.module.css';
import KittenCard from '../KittenCard/KittenCard';
import { Button } from '../../ui-library/src/Library';

import K1 from '../../assets/images/kittens/k1.jpg';
import K2 from '../../assets/images/kittens/k2.jpg';
import K3 from '../../assets/images/kittens/k3.jpg';

const KittensSection = () => {
  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.sectionContainer}>
        
        <div className={styles.content}>
          <div className={styles.textBlock}>
            <div className={styles.textInner}>
              <h2 className={styles.heading}>Наши котята</h2>
              <p className={styles.subtitle}>В нашем питомнике есть свободные котята!</p>
            </div>
            <Button variant="primary" title="все котята питомника" className={styles.desktopBtn} />
          </div>

          <div className={styles.cardsScroll}>
            <KittenCard 
              image={K1} statusText="свободен" statusVariant="statusFree" 
              name="Фред" pedigree="Fred North Way*RU" gender="male" birthday="11.07.2024" 
            />
            <KittenCard 
              image={K2} statusText="забронирован" statusVariant="statusBooked" 
              name="Фрида" pedigree="Frida North Way*RU" gender="female" birthday="11.07.2024" 
            />
            <KittenCard 
              image={K3} statusText="под наблюдением" statusVariant="statusStay" 
              name="Фьелл" pedigree="Fjell North Way*RU" gender="male" birthday="11.07.2024" 
            />
          </div>

          <Button variant="white" title="все котята питомника" className={styles.mobileBtn} />
        </div>
      </div>
    </section>
  );
};

export default KittensSection;