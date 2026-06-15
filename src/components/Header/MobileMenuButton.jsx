import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './MobileMenuButton.module.css';

const MobileMenuButton = ({ title, to, onClick }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `${styles.menuBtn} ${isActive ? styles.active : ''}`}
      onClick={onClick}
    >
      {title}
    </NavLink>
  );
};

export default MobileMenuButton;