import React from 'react';
import styles from './HeroSection.module.css';
import { Button } from '../../ui-library/src/Library';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                Питомник норвежских<br />лесных кошек
                </h1>
                <Button variant="white" title="посмотреть свободных котят" />
            </div>
        </div>
    </section>
  );
};

export default HeroSection;