import React from 'react';
import styles from './Button.module.css';

import { ReactComponent as ArrowButton } from '../../assets/icons/ArrowButton.svg';
import { ReactComponent as ArrowTop } from '../../assets/icons/ArrowTop.svg';
import { ReactComponent as Phone } from '../../assets/icons/Phone.svg';
import { ReactComponent as CloseIcon } from '../../assets/icons/CloseIcon.svg';

const Button = ({
  title = 'button title',
  variant = 'primary',
  onClick,
  className = '',
  type = 'button',
}) => {
  const renderContent = () => {
    if (['alternativePrimary', 'alternativeWhite', 'alternativeLink', 'alternativeText', 'textVariant'].includes(variant)) {
      return <span className={styles.text}>{title}</span>;
    }

    if (variant === 'circleClose') {
      return <CloseIcon className={styles.icon} />;
    }

    if (variant === 'circlePrimary') {
      return <ArrowTop className={styles.icon} />;
    }

    if (['withIconPrimary', 'withIconSecondary'].includes(variant)) {
      return (
        <>
          <Phone className={styles.icon} />
          <span className={styles.text}>{title}</span>
        </>
      );
    }

    return (
      <>
        <span className={styles.text}>{title}</span>
        <span className={styles.iconWrapper}>
          <ArrowButton className={styles.icon} />
        </span>
      </>
    );
  };

  return (
    <button
      type={type}
      className={`${styles.button} ${styles[variant]} ${className}`}
      onClick={onClick}
    >
      {renderContent()}
    </button>
  );
};

export default Button;