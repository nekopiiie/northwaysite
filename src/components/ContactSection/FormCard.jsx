import React, { useState } from 'react';
import styles from './FormCard.module.css';
import { Button, Input, Checkbox } from '../../ui-library/src/Library';
import { ReactComponent as PawIcon } from '../../assets/icons/PawMaw.svg';

const FormCard = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [agreed, setAgreed] = useState(false);
  const [checkboxError, setCheckboxError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone) return;

    if (!agreed) {
      setCheckboxError(true);
      return;
    }

    setCheckboxError(false);
    setSubmitted(true);
  };

  return (
    <div className={styles.cardShell}>
      <form
        className={`${styles.card} ${submitted ? styles.cardSubmitted : ''}`}
        onSubmit={handleSubmit}
      >
        <div className={styles.textBlock}>
          <h3 className={styles.heading}>
            <span className={styles.headingLine}>Остались вопросы?</span>
            <span className={styles.headingLine}>Свяжитесь с нами</span>
          </h3>

          <p className={styles.description}>
            Мы с радостью расскажем о наших котятах, условиях содержания и поможем с выбором.
            Ответим на звонок или перезвоним вам в удобное время.
          </p>
        </div>

        <div className={styles.inputsGroup}>
          <div className={styles.row}>
            <Input
              name="name"
              placeholder="Имя"
              value={formData.name}
              onChange={handleChange}
            />
            <Input
              name="phone"
              placeholder="Телефон"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className={styles.checkboxWrapper}>
            <Checkbox
              checked={agreed}
              onChange={() => {
                setAgreed(!agreed);
                setCheckboxError(false);
              }}
              label="Я согласен на обработку персональных данных"
              error={checkboxError}
            />
          </div>
        </div>

        <Button
          variant="primary"
          title="отправить"
          type="submit"
          className={styles.submitBtn}
        />
      </form>

      <div
        className={`${styles.successCard} ${submitted ? styles.successVisible : ''}`}
        aria-hidden={!submitted}
      >
        <div className={styles.successContent}>
          <div className={styles.iconWrap}>
            <PawIcon className={styles.icon} />
          </div>

          <h3 className={styles.successTitle}>Заявка отправлена!</h3>
          <p className={styles.successText}>
            Спасибо! Мы свяжемся с вами<br />в ближайшее время
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormCard;