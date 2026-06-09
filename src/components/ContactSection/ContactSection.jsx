import React from 'react';
import styles from './ContactSection.module.css';
import FormCard from './FormCard';

const ContactSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <FormCard />
      </div>
    </section>
  );
};

export default ContactSection;