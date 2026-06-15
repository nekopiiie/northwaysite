import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './MobileMenuButton.module.css';

const MobileMenuButton = ({
  title,
  to,
  onClick,
  disabled = false,
  end = false,
}) => {

  if (disabled) {
  return (
    <span className={styles.menuBtn}>
      {title}
    </span>
  );
}

return (
  <NavLink
    to={to}
    end={end}
    className={({ isActive }) =>
      `${styles.menuBtn} ${
        isActive ? styles.active : ''
      }`
    }
    onClick={onClick}
  >
    {title}
  </NavLink>
);
};

export default MobileMenuButton;