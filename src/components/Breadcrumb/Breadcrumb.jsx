import React from 'react';
import styles from './Breadcrumb.module.css';

import { ReactComponent as ArrowTop } from '../../ui-library/src/assets/icons/ArrowTop.svg';

const Breadcrumb = ({ items = [] }) => {
  return (
    <nav className={styles.container}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <React.Fragment key={index}>
            {/* Если элемент последний - просто текст, иначе - ссылка-кнопка */}
            {isLast ? (
              <span className={`${styles.item} ${styles.active}`}>
                {item.title}
              </span>
            ) : (
              <a href={item.path} className={styles.item}>
                {item.title}
              </a>
            )}

            {/* Рисуем стрелочку-разделитель после всех элементов, КРОМЕ последнего */}
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