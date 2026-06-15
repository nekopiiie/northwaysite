import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Breadcrumb.module.css';

import { ReactComponent as ArrowTop } from '../../ui-library/src/assets/icons/ArrowTop.svg';

const Breadcrumb = ({ items = [], className }) => {
  return (
    <nav className={`${styles.container} ${className || ''}`}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <React.Fragment key={index}>
            {isLast ? (
              <span className={`${styles.item} ${styles.active}`}>
                {item.title}
              </span>
            ) : (
              <Link to={item.path} className={styles.item}>
                {item.title}
              </Link>
            )}

            {!isLast && (
              <span className={styles.iconWrapper}>
                <ArrowTop className={styles.icon} />
              </span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;