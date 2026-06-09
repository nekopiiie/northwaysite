import React, { useState, useEffect, useMemo } from 'react';
import styles from './ReviewsSection.module.css';
import ReviewCard from './ReviewCard';
import ReviewModal from './ReviewModal';
import { Pagination } from '../../ui-library/src/Library';

import Av1 from '../../assets/images/avatars/avatar_rev_1.jpg';
import Av2 from '../../assets/images/avatars/avatar_rev_2.jpg';
import Av3 from '../../assets/images/avatars/avatar_rev_3.jpg';
import Av4 from '../../assets/images/avatars/avatar_rev_4.jpg';

const reviewsData = [
  {
    id: 1,
    name: 'Хозяин Дмитрий',
    cat: 'кот Тор',
    avatar: Av1,
    date: 'ноябрь, 2024',
    text: 'Тор — настоящий компаньон с характером. Любознательный и бесстрашный, но очень ласковый. Отдельное спасибо питомнику за честность и открытость: все документы, тесты родителей и готовность отвечать на вопросы 24/7',
  },
  {
    id: 2,
    name: 'Хозяйка Ирина',
    cat: 'кошка Луна',
    avatar: Av2,
    date: 'октябрь, 2024',
    text: 'С детства мечтала о норвежской лесной, и Луна превзошла все ожидания! Она обожает наших детей, а её шерсть — настоящее чудо. Адаптация прошла легко, чему точно способствовала хорошая социализация в питомнике.',
  },
  {
    id: 3,
    name: 'Хозяйка Анна',
    cat: 'кот Варка',
    avatar: Av3,
    date: 'сентябрь, 2024',
    text: 'Варку брали как кота, а получили лучшего друга. Невероятно контактный и верный. Здоровье отменное — за два года ни разу не болел. Рекомендую питомник North Way как ответственных и душевных заводчиков.',
  },
  {
    id: 4,
    name: 'Хозяин Даниил',
    cat: 'кошка Фрейя',
    avatar: Av4,
    date: 'август, 2024',
    text: 'Фрейя с первого дня правила нашим домом и сердцами. Её ум и тактичность поражают — никогда не навязывается, но всегда рядом. Спасибо за такого идеального питомца и подробные советы по уходу!',
  },
];

const ReviewsSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);

  useEffect(() => {
    document.body.style.overflow = modalOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [modalOpen]);

  const openModal = (review) => {
    setSelectedReview(review);
    setModalOpen(true);
  };

  const handlePageChange = (page) => {
    const safePage = Math.min(Math.max(page, 1), reviewsData.length);
    setCurrentPage(safePage);
  };

  const visibleReviews = useMemo(() => {
    const shift = currentPage - 1;
    return [...reviewsData.slice(shift), ...reviewsData.slice(0, shift)];
  }, [currentPage]);

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Отзывы</h2>
        </div>

        <div className={styles.grid}>
          {visibleReviews.map((review) => (
            <ReviewCard
              key={review.id}
              {...review}
              onViewClick={() => openModal(review)}
            />
          ))}
        </div>

        <div className={styles.paginationWrapper}>
          <Pagination
            totalPages={reviewsData.length}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>

      <ReviewModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        review={selectedReview}
      />
    </section>
  );
};

export default ReviewsSection;