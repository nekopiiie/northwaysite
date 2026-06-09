import React, { useState } from 'react';
import styles from './FAQSection.module.css';
import FAQItem from './FAQItem';

const faqData = [
  {
    id: 1,
    number: '01',
    question: 'С какого возраста можно забрать котенка?',
    answer: 'Мы отдаём котят в новые дома не раньше 3,5–4 месяцев. Это важно для завершения первичной вакцинации, социализации и формирования устойчивой психики.',
    colorVariant: 'lightGreen1'
  },
  {
    id: 2,
    number: '02',
    question: 'Подойдёт ли норвежская лесная кошка для жизни в квартире?',
    answer: 'Да, норвежская лесная кошка подходит для содержания в квартире, но требует активного образа жизни и высокого вертикального пространства.',
    colorVariant: 'lightGreen2'
  },
  {
    id: 3,
    number: '03',
    question: 'Ладят ли «норвеги» с детьми и собаками?',
    answer: 'Норвежские лесные кошки известны своим дружелюбным и терпеливым характером, они прекрасно уживаются с детьми и другими животными при правильном знакомстве.',
    colorVariant: 'lightGreen3'
  },
  {
    id: 4,
    number: '04',
    question: 'Есть ли гарантия на здоровье котёнка?',
    answer: 'Да, каждый котёнок имеет ветеринарный паспорт с отметками о прививках, и мы предоставляем гарантию на здоровье согласно договору купли-продажи.',
    colorVariant: 'lightGreen4'
  },
];

const FAQSection = () => {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.heading}>Часто задаваемые вопросы</h2>

          <div className={styles.faqList}>
            {faqData.map((item) => (
              <FAQItem
                key={item.id}
                {...item}
                isOpen={openId === item.id}
                onToggle={() => toggleFAQ(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;