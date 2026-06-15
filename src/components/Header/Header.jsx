import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import { Button } from '../../ui-library/src/Library';
import MobileMenuButton from './MobileMenuButton';
import { NavLink } from 'react-router-dom';

// Твои иконки
import { ReactComponent as Logo } from '../../assets/icons/Logo.svg';
import { ReactComponent as CloseIcon } from '../../ui-library/src/assets/icons/CloseIcon.svg';
import { ReactComponent as VKIcon } from '../../ui-library/src/assets/icons/VK.svg';
import { ReactComponent as TGIcon } from '../../ui-library/src/assets/icons/TG.svg';
import { ReactComponent as PhoneIcon } from '../../ui-library/src/assets/icons/Phone.svg';
import { ReactComponent as BurgerMenuIcon } from '../../ui-library/src/assets/icons/BurgerMenu.svg';

const NAV_ITEMS = [
  { id: 'main', title: 'главная', path: '/' },
  { id: 'kittens', title: 'котята', path: '/kittens' },

  { id: 'cats', title: 'наши кошки', disabled: true },
  { id: 'about', title: 'о питомнике', disabled: true },
  { id: 'info', title: 'полезное', disabled: true },
];

const Header = ({ variant = 'primary' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isMenuOpen]);

  // Закрываем меню при растягивании окна
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const currentVariant =
  variant === 'primary' && isScrolled
    ? 'secondary'
    : variant;

  return (
    <header
      className={`${styles.header} ${styles[currentVariant]} ${
        isScrolled ? styles.scrolled : ''
      }`}
    >
      
      {/* ДЕСКТОП */}
      <div className={styles.container}>
        <div className={styles.desktop}>
          <div className={styles.logoWrapper}>
            <NavLink to="/">
              <Logo />
            </NavLink>
          </div>

          <nav className={styles.nav}>
            {NAV_ITEMS.map((item) => {
            const baseClass =
              currentVariant === 'primary'
                ? styles.navLinkPrimary
                : styles.navLinkSecondary;

            if (item.disabled) {
              return (
                <span
                  key={item.id}
                  className={baseClass}
                >
                {item.title}
                </span>
              );
            }

            return (
              <NavLink
                key={item.id}
                to={item.path}
                end={item.path === '/'}

                className={({ isActive }) =>
                  `${currentVariant === 'primary'
                    ? styles.navLinkPrimary
                    : styles.navLinkSecondary} ${
                      isActive
                        ? currentVariant === 'primary'
                          ? styles.activeNavLinkPrimary
                          : styles.activeNavLinkSecondary
                        : ''
                    }`
                }

              >
                {item.title}
              </NavLink>
            );
          })}
          </nav>

          <div className={styles.actions}>
            <div className={styles.socialIcon}><VKIcon /></div>
            <div className={styles.socialIcon}><TGIcon /></div>
            <Button 
              variant={currentVariant === 'primary' ? 'withIconPrimary' : 'withIconSecondary'} 
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
              <NavLink to="/">
                <Logo />
              </NavLink>
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
                  to={item.path}
                  disabled={item.disabled}
                  end={item.path === '/'}
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