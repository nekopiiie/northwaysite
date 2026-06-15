import React from 'react';
import styles from './HeroSection.module.css';
import { Button } from '../../ui-library/src/Library';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleKittensClick = () => {
    navigate('/kittens');
  };

  return (
    <section id="hero" className={styles.hero}>
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                Питомник норвежских<br />лесных кошек
                </h1>
                <Button variant="white" 
                title="посмотреть свободных котят" 
                onClick={handleKittensClick}
                />
            </div>
        </div>
    </section>
  );
};

export default HeroSection;