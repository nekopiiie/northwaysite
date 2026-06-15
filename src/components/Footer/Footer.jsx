import React from 'react';
import styles from './Footer.module.css';
import { Button } from '../../ui-library/src/Library';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/icons/Logo.svg';
import { ReactComponent as VKIcon } from '../../ui-library/src/assets/icons/VK.svg';
import { ReactComponent as TGIcon } from '../../ui-library/src/assets/icons/TG.svg';
import { ReactComponent as ArrowTop } from '../../ui-library/src/assets/icons/ArrowTop.svg';

const NAV_ITEMS = [
  { id: 'main', title: 'главная', path: '/' },
  { id: 'kittens', title: 'котята', path: '/kittens' },
  { id: 'cats', title: 'наши кошки', path: '/cats' },
  { id: 'about', title: 'о питомнике', path: '/about' },
  { id: 'info', title: 'полезное', path: '/info' },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topRow}>
          <Link to="/" className={styles.logoLink}>
            <Logo />
          </Link>

          <div className={styles.contacts}>
            <Button variant="alternativeLink" title="info@northway.com" />
            <div className={styles.socialIcon}><VKIcon /></div>
            <div className={styles.socialIcon}><TGIcon /></div>
          </div>
        </div>

        <div className={styles.bottomRow}>
          <div className={styles.copyrightWrapper}>
            <p className={styles.address}>Санкт-Петербург, пр. Лесной, 79</p>
            <p className={styles.copyright}>© 2026, Nortway</p>
          </div>

          <div className={styles.navWrapper}>
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={styles.footerLink}
              >
                {item.title}
              </Link>
            ))}

            <Button
              variant="circlePrimary"
              className={`${styles.circleBtn} ${styles.desktopScrollBtn}`}
              onClick={scrollToTop}
            >
              <ArrowTop />
            </Button>
          </div>
        </div>
      </div>

      <Button
        variant="circlePrimary"
        className={styles.mobileScrollBtn}
        onClick={scrollToTop}
      />
    </footer>
  );
};

export default Footer;