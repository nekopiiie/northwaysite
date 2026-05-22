import './assets/fonts/fonts.css';

import { colors } from './tokens/colors';
import { typography } from './tokens/typography';

export { default as Button } from './components/Button/Button';
export { default as Input } from './components/Input/Input';
export { default as Checkbox } from './components/Checkbox/Checkbox';
export { default as Pagination } from './components/Pagination/Pagination';
export { default as Modal } from './components/Modal/Modal';
export { default as PaginationDots } from './components/PaginationDots/PaginationDots';

// ФУНКЦИЯ ИНЪЕКЦИИ ТОКЕНОВ В CSS
const injectDesignTokens = () => {
  const root = document.documentElement;

  // цвета (--color-khaki, --color-darkgreen и т.д.)
  Object.entries(colors).forEach(([name, value]) => {
    root.style.setProperty(`--color-${name}`, value);
  });

  // базовые шрифты
  root.style.setProperty('--font-heading', typography.families.heading);
  root.style.setProperty('--font-body', typography.families.body);
  root.style.setProperty('--font-pagination', typography.families.pagination);

  // стили для тегов (H1, H2, Body и т.д.)
  const stylesMap = {
    h1: typography.h1, h2: typography.h2, h3: typography.h3,
    h4: typography.h4, h5: typography.h5, h6: typography.h6,
    body1: typography.body1, body2: typography.body2, 
    body3: typography.body3, body4: typography.body4,
    body5: typography.body5,
    input: typography.input,
    checkboxText: typography.checkboxText,
    pagination: typography.pagination,
  };

  Object.entries(stylesMap).forEach(([tag, styles]) => {
    root.style.setProperty(`--${tag}-size`, styles.size);
    root.style.setProperty(`--${tag}-weight`, styles.weight);
    root.style.setProperty(`--${tag}-line-height`, styles.lineHeight);
    if (styles.letterSpacing) {
      root.style.setProperty(`--${tag}-letter-spacing`, styles.letterSpacing);
    }
  });
};

injectDesignTokens();