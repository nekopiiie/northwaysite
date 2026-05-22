import React from 'react';
import styles from './Footer.module.css';
import { Button } from '../../ui-library/src/Library';

import { ReactComponent as Logo } from '../../assets/icons/Logo.svg';
import { ReactComponent as VKIcon } from '../../ui-library/src/assets/icons/VK.svg';
import { ReactComponent as TGIcon } from '../../ui-library/src/assets/icons/TG.svg';
import { ReactComponent as ArrowTop } from '../../ui-library/src/assets/icons/ArrowTop.svg';

const NAV_ITEMS = [
  { id: 'main', title: 'главная' },
  { id: 'kittens', title: 'котята' },
  { id: 'cats', title: 'наши кошки' },
  { id: 'about', title: 'о питомнике' },
  { id: 'info', title: 'полезное' },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* === ВЕРХНИЙ БЛОК (Лого + Контакты) === */}
        <div className={styles.topRow}>
          <div className={styles.logoWrapper}>
            <Logo />
          </div>

          <div className={styles.contacts}>
            <Button variant="alternativeLink" title="info@northway.com" />
            <div className={styles.socialIcon}><VKIcon /></div>
            <div className={styles.socialIcon}><TGIcon /></div>
          </div>
        </div>

        {/* === НИЖНИЙ БЛОК (Адрес/Копирайт + Навигация) === */}
        <div className={styles.bottomRow}>
          
          <div className={styles.copyrightWrapper}>
            <p className={styles.address}>Санкт-Петербург, пр. Лесной, 79</p>
            <p className={styles.copyright}>© 2026, Nortway</p>
          </div>

          <div className={styles.navWrapper}>
            {NAV_ITEMS.map((item) => (
              <Button 
                key={item.id}
                variant="alternativeWhite" 
                title={item.title} 
              />
            ))}
            {/* Кнопка "Наверх" с локальным изменением размера */}
            <Button 
                variant="circlePrimary" 
                className={styles.circleBtn}
            >
                <ArrowTop />
            </Button>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;