import React from 'react';
import styles from './KittenCard.module.css';
import Tag from '../Tag/Tag';
import { Button } from '../../ui-library/src/Library';

import { ReactComponent as MaleIcon } from '../../assets/icons/Male.svg';
import { ReactComponent as FemaleIcon } from '../../assets/icons/Female.svg';
import { ReactComponent as CakeIcon } from '../../assets/icons/Cake.svg';

const KittenCard = ({ image, statusText, statusVariant, name, pedigree, gender, birthday, onDetailClick }) => {
  // Логика выбора иконки и текста для пола
  const isMale = gender === 'male';
  const GenderIcon = isMale ? MaleIcon : FemaleIcon;
  const genderText = isMale ? 'male / кот' : 'female / кошка';

  return (
    <div className={styles.card}>
      <div className={styles.topSection}>
        <Tag variant={statusVariant} text={statusText} />
        <div className={styles.photoFrame}>
          <img src={image} alt={name} className={styles.photo} />
        </div>
      </div>

      <div className={styles.info}>
        <div className={styles.names}>
          <h6 className={styles.name}>{name}</h6>
          <p className={styles.pedigree}>{pedigree}</p>
        </div>
        
        <div className={styles.tags}>
          <Tag variant="gender" icon={GenderIcon} text={genderText} />
          <Tag variant="birthday" icon={CakeIcon} text={birthday} />
        </div>
      </div>

      <Button variant="primary" title="подробнее" onClick={onDetailClick}/>
    </div>
  );
};

export default KittenCard;