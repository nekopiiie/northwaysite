import React, { useState } from 'react';
import styles from './KittenDetailPage.module.css';
import Tag from '../components/Tag/Tag';
import ParentTag from '../components/ParentTag/ParentTag';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Tabs from '../components/Tabs/KittenTabs';

import K1 from '../assets/images/kittens/k1.jpg';
import ChannelAvatar from '../assets/images/avatars/Channel_avatar.jpg';
import MalooAvatar from '../assets/images/avatars/Maloo_avatar.jpg';

import Modal from '../ui-library/src/components/Modal/Modal';
import NonePhoto from '../assets/images/NonePhoto.jpg';

const KittenDetailPage = () => {
  const [activeTab, setActiveTab] = useState('description');
  
  const [modalOpen, setModalOpen] = useState(false);
//   const [selectedPhoto, setSelectedPhoto] = useState(null);

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const handlePrevPhoto = () => {
  setCurrentPhotoIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const handleNextPhoto = () => {
  setCurrentPhotoIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  const photos = [
  K1,
  NonePhoto,
  NonePhoto,
  NonePhoto,
  NonePhoto,
  NonePhoto,
  ];

  const openModal = (index) => {
  setCurrentPhotoIndex(index);
  setModalOpen(true);
  };

  const kitten = {
    name: 'Фред',
    pedigree: 'Fred North Way*RU',
    gender: 'male',
    birthday: '01.07.2024',
    color: 'черный черепаховый серебристый пятнистый',
    breeder: 'Татьяна Кошкина',
    status: 'свободен',
    statusVariant: 'statusFree',
    mother: { name: 'Channel Aurora Borealis*NO', avatar: ChannelAvatar },
    father: { name: 'Maloo North Way*RU', avatar: MalooAvatar },
    description: 'Фред — невероятно ласковый и спокойный малыш, который уже сейчас проявляет удивительное дружелюбие к людям. Он с радостью придёт на руки за порцией нежности и станет идеальным компаньоном для уютных вечеров. Очень уравновешенный и социализированный котёнок.',
    health: {
      vaccines: 'Первая комплексная вакцинация проведена в 8 недель. Ревакцинация — в 12 недель (будет/проведена). Обработка от паразитов — по графику (отметки в ветпаспорте)',
      sterilization: 'Котёнок продаётся с условием кастрации/стерилизации по достижении возраста (обычно 7-9 месяцев)'
    },
    documents: {
      pedigree: 'Котёнок имеет метрику (свидетельство о рождении), зарегистрированную в системе WCF. После оплаты и подписания договора вы получаете возможность оформить полноценную родословную.',
      purpose: 'Пет-класс (для семьи): Котёнок продаётся как домашний любимец, с обязательной стерилизацией/кастрацией. Без права разведения.'
    }
  };

  const breadcrumbItems = [
    // { title: 'Главная', path: '/' },
    { title: 'котята', path: '/kittens' },
    { title: 'Fred North Way*RU', path: '/kitten/fred' }
  ];

  const tabs = [
    { id: 'description', label: 'описание' },
    { id: 'health', label: 'здоровье' },
    { id: 'documents', label: 'документы' }
  ];

  return (
    <div className={styles.page}>
    <div className={styles.inner}>
      <Breadcrumb items={breadcrumbItems} className={styles.breadcrumb}/>

      <div className={styles.mainContainer}>
        <div className={styles.infoContainer}>
          <div className={styles.photoContainer}>
            <img src={K1} alt={kitten.name} className={styles.photo} />
          </div>

          <div className={styles.detailsContainer}>
            <div className={styles.characteristicsCard}>
              <h3 className={styles.pedigreeTitle}>{kitten.pedigree}</h3>
              <div className={styles.attrsContainer}>
                <div className={styles.attrRow}>
                  <div className={styles.attrLabel}>пол</div>
                  <div className={styles.attrValue}>мужской</div>
                </div>
                <div className={styles.attrRow}>
                  <div className={styles.attrLabel}>дата рождения</div>
                  <div className={styles.attrValue}>{kitten.birthday}</div>
                </div>
                <div className={styles.attrRow}>
                  <div className={styles.attrLabel}>окрас</div>
                  <div className={styles.attrValue}>{kitten.color}</div>
                </div>
                <div className={styles.attrRow}>
                  <div className={styles.attrLabel}>заводчик</div>
                  <div className={styles.attrValue}>{kitten.breeder}</div>
                </div>
              </div>

              <div className={styles.detailsGroup}>
                <div className={styles.detailRow}>
                  <div className={styles.detailLabel}>статус</div>
                  <div className={styles.detailValue}>
                    <Tag variant={kitten.statusVariant} text={kitten.status} />
                  </div>
                </div>
                <div className={styles.detailRow}>
                  <div className={styles.detailLabel}>мать</div>
                  <div className={styles.detailValue}>
                    <ParentTag name={kitten.mother.name} avatar={kitten.mother.avatar} />
                  </div>
                </div>
                <div className={styles.detailRow}>
                  <div className={styles.detailLabel}>отец</div>
                  <div className={styles.detailValue}>
                    <ParentTag name={kitten.father.name} avatar={kitten.father.avatar} />
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.tabsContainer}>
              <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
              <div className={styles.tabContent}>
                {activeTab === 'description' && (
                  <p className={styles.descriptionText}>{kitten.description}</p>
                )}
                {activeTab === 'health' && (
                  <div className={styles.healthContent}>
                    <div className={styles.healthRow}>
                      <span className={styles.healthLabel}>прививки:</span>
                      <span className={styles.healthText}>{kitten.health.vaccines}</span>
                    </div>
                    <div className={styles.healthRow}>
                      <span className={styles.healthLabel}>кастрация/стерилизация:</span>
                      <span className={styles.healthText}>{kitten.health.sterilization}</span>
                    </div>
                  </div>
                )}
                {activeTab === 'documents' && (
                  <div className={styles.documentsContent}>
                    <div className={styles.docRow}>
                      <span className={styles.docLabel}>родословная:</span>
                      <span className={styles.docText}>{kitten.documents.pedigree}</span>
                    </div>
                    <div className={styles.docRow}>
                      <span className={styles.docLabel}>назначение:</span>
                      <span className={styles.docText}>{kitten.documents.purpose}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        
        </div>
      
      <div className={styles.galleryContainer}>
        <div className={styles.galleryGrid}>
            {photos.map((photo, idx) => (
                <div key={idx} className={styles.galleryItem} onClick={() => openModal(idx)}>
                    <img src={photo} alt={`Фото ${idx + 1}`} className={styles.galleryImage} />
                </div>
            ))}
        </div>
      </div>
      </div>

      
      
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="4 недели"
        images={photos}
        currentIndex={currentPhotoIndex}
        onPrev={handlePrevPhoto}
        onNext={handleNextPhoto}
      />
    </div>
    </div>
  );
};

export default KittenDetailPage;