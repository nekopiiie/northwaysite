import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import { Button } from '../../ui-library/src/Library';
import MobileMenuButton from './MobileMenuButton';

// Твои иконки
import { ReactComponent as Logo } from '../../assets/icons/Logo.svg';
import { ReactComponent as CloseIcon } from '../../ui-library/src/assets/icons/CloseIcon.svg';
import { ReactComponent as VKIcon } from '../../ui-library/src/assets/icons/VK.svg';
import { ReactComponent as TGIcon } from '../../ui-library/src/assets/icons/TG.svg';
import { ReactComponent as PhoneIcon } from '../../ui-library/src/assets/icons/Phone.svg';
import { ReactComponent as BurgerMenuIcon } from '../../ui-library/src/assets/icons/BurgerMenu.svg';

const NAV_ITEMS = [
  { id: 'main', title: 'главная' },
  { id: 'kittens', title: 'котята' },
  { id: 'cats', title: 'наши кошки' },
  { id: 'about', title: 'о питомнике' },
  { id: 'info', title: 'полезное' },
];

const Header = ({ variant = 'primary', activePage = 'main' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isMenuOpen]);

  // НОВЫЙ useEffect: Закрываем меню при растягивании окна
  useEffect(() => {
    const handleResize = () => {
      // Если экран стал шире 768px (наш переходный барьер)
      if (window.innerWidth > 768) {
        setIsMenuOpen(false); // Принудительно закрываем меню!
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className={`${styles.header} ${styles[variant]}`}>
      
      {/* ДЕСКТОП */}
      <div className={styles.container}>
        <div className={styles.desktop}>
          <div className={styles.logoWrapper}>
            <Logo />
          </div>

          <nav className={styles.nav}>
            {NAV_ITEMS.map((item) => (
              <Button 
                key={item.id}
                variant={variant === 'primary' ? 'alternativeWhite' : 'alternativePrimary'}
                title={item.title}
                style={activePage === item.id ? { color: 'var(--color-maingreen90)' } : {}}
              />
            ))}
          </nav>

          <div className={styles.actions}>
            <div className={styles.socialIcon}><VKIcon /></div>
            <div className={styles.socialIcon}><TGIcon /></div>
            <Button 
              variant={variant === 'primary' ? 'withIconPrimary' : 'withIconSecondary'} 
              title="999-99-99"
              icon={<PhoneIcon />}
            />
          </div>
          <div className={styles.standalonePhone}>
            <PhoneIcon />
          </div>
            
        </div>
      </div>

      {/* МОБИЛЬНАЯ ВЕРСИЯ */}
      <div className={styles.mobileWrapper}>
        {!isMenuOpen && (
          <div className={styles.mobile}>
            <div className={styles.logoWrapperMobile}>
              <Logo />
            </div>
            <div className={styles.mobileActions}>
              <div className={styles.socialIcon}><PhoneIcon /></div>
              <button className={styles.burger} onClick={() => setIsMenuOpen(true)}>
                <BurgerMenuIcon />
              </button>
            </div>
          </div>
        )}

        {isMenuOpen && (
          <div className={styles.mobileMenu} onClick={(e) => e.stopPropagation()}>
            <div className={styles.menuTop}>
              <button className={styles.menuClose} onClick={() => setIsMenuOpen(false)}>
                <CloseIcon />
              </button>
            </div>
            <nav className={styles.menuList}>
              {NAV_ITEMS.map((item) => (
                <MobileMenuButton 
                  key={item.id}
                  title={item.title}
                  isActive={activePage === item.id}
                  onClick={() => setIsMenuOpen(false)} 
                />
              ))}
            </nav>
          </div>
        )}
      </div>

      {isMenuOpen && <div className={styles.overlayBg} onClick={() => setIsMenuOpen(false)} />}
    </header>
  );
};

export default Header;