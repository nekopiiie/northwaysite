import React from 'react';
import styles from './AboutSection.module.css';


import Avatar from '../../assets/images/avatars/avatarperson.jpg';
import { ReactComponent as ColonIcon } from '../../assets/icons/Colon.svg';

const AboutSection = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        
        {/* Контейнер 3: Автор */}
        <div className={styles.authorBlock}>
          <img src={Avatar} alt="Заводчик" className={styles.avatar} />
          <div className={styles.authorInfo}>
            <h5 className={styles.name}>Татьяна Кошкина</h5>
            <p className={styles.role}>Заводчик</p>
          </div>
        </div>

        {/* Контейнер 4: Текст */}
        <div className={styles.textBlock}>
          <ColonIcon className={styles.icon} />

          <p className={styles.text}>
            Наша история <span className={styles.highlight}>началась с любви</span> к одной норвежской лесной кошке, покорившей нас своей красотой и характером. Стремление глубже изучить породу и делиться этой радостью привело к созданию питомника «North Way».
            <br /><br />
            Для нас разведение — <span className={styles.highlight}>это ответственность</span>. Мы заботимся о здоровье и будущем каждого нашего котёнка и радуемся, когда они обретают любящие семьи. Мы приглашаем вас стать частью нашей большой семьи.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;