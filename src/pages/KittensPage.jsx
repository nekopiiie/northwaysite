import React from 'react';
import { useNavigate } from 'react-router-dom';
import KittensHero from '../components/KittensHero/KittensHero';

import LitterSection from '../components/KittensPage/LitterSection';
import AdultsSection from '../components/KittensPage/AdultsSection';

import styles from './KittensPage.module.css';

// Импорты изображений (относительно папки pages)
import K1 from '../assets/images/kittens/k1.jpg';
import K2 from '../assets/images/kittens/k2.jpg';
import K3 from '../assets/images/kittens/k3.jpg';
import K4 from '../assets/images/kittens/k4.jpg';
import K5 from '../assets/images/kittens/k5.jpg';
import K6 from '../assets/images/kittens/k6.jpg';
import K7 from '../assets/images/kittens/k7.jpg';
import K8 from '../assets/images/kittens/k8.jpg';

const KittensPage = () => {
  const navigate = useNavigate();

  // Помет F (с переходом для Фреда)
  const litterF = {
    title: 'Помет "F"',
    date: '11.07.2024',
    kittens: [
      {
        name: 'Фред',
        pedigree: 'Fred North Way*RU',
        gender: 'male',
        statusText: 'свободен',
        statusVariant: 'statusFree',
        birthday: '11.07.2024',
        image: K1,
        onDetailClick: () => navigate('/kitten/fred'),
      },
      {
        name: 'Фрида',
        pedigree: 'Frida North Way*RU',
        gender: 'female',
        statusText: 'забронирован',
        statusVariant: 'statusBooked',
        birthday: '11.07.2024',
        image: K2,
      },
      {
        name: 'Фьелл',
        pedigree: 'Fjell North Way*RU',
        gender: 'male',
        statusText: 'под наблюдением',
        statusVariant: 'statusStay',
        birthday: '11.07.2024',
        image: K3,
      },
    ],
  };

  // Помет S
  const litterS = {
    title: 'Помет "S"',
    date: '03.03.2024',
    kittens: [
      {
        name: 'Стелла',
        pedigree: 'Stella North Way*RU',
        gender: 'female',
        statusText: 'забронирован',
        statusVariant: 'statusBooked',
        birthday: '03.03.2024',
        image: K4,
      },
      {
        name: 'Шейн',
        pedigree: 'Shane North Way*RU',
        gender: 'male',
        statusText: 'забронирован',
        statusVariant: 'statusBooked',
        birthday: '03.03.2024',
        image: K5,
      },
      {
        name: 'Сара',
        pedigree: 'Sara North Way*RU',
        gender: 'female',
        statusText: 'остается в питомнике',
        statusVariant: 'statusStay',
        birthday: '03.03.2024',
        image: K6,
      },
    ],
  };

  // Взрослые животные
  const adults = [
    {
      name: 'Сана',
      pedigree: 'Sana North Way*RU',
      gender: 'female',
      statusText: 'свободен',
      statusVariant: 'statusFree',
      birthday: '11.07.2022',
      image: K7,
    },
    {
      name: 'Хлоя',
      pedigree: 'Chloe North Way*RU',
      gender: 'female',
      statusText: 'свободен',
      statusVariant: 'statusFree',
      birthday: '11.11.2021',
      image: K8,
    },
  ];

  return (
    <>
      <KittensHero />

      {/* Блок описания, видимый только на мобилке */}
      <div className={styles.mobileDescriptionWrapper}>
        <p className={styles.mobileDescription}>
          Здесь представлены котята питомника «North Way», готовые к переезду в новые дома.
          Это здоровые социализированные малыши от проверенных производителей, получившие
          всю необходимую заботу с первых дней жизни.
        </p>
      </div>

      <LitterSection {...litterF} />
      <LitterSection {...litterS} />
      <AdultsSection adults={adults} />
    </>
  );
};

export default KittensPage;