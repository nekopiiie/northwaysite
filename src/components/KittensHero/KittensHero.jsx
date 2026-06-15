import React from 'react';
import styles from './KittensHero.module.css';
import { Button } from '../../ui-library/src/Library';

const KittensHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Котята питомника</h1>
          
          {/* Текст описания – виден только на десктопе (≥769px) */}
          <p className={styles.desktopDescription}>
            Здесь представлены котята питомника «North Way», готовые к переезду в новые дома. 
            Это здоровые социализированные малыши от проверенных производителей, получившие 
            всю необходимую заботу с первых дней жизни.
          </p>

          <div className={styles.buttonsRow}>
            <Button variant="white" title="архив пометов" />
            <Button variant="white" title="планы питомника" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KittensHero;