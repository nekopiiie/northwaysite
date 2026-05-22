export const typography = {
  // Семейства шрифтов
  families: {
    heading: "'Coolvetica', sans-serif",
    body: "'Involve', sans-serif",
    pagination: "'Manrope', sans-serif",
  },

  // Heading (Coolvetica)
  h1: { size: '64px', weight: 400, lineHeight: '60px', family: "'Coolvetica', sans-serif" },
  h2: { size: '48px', weight: 400, lineHeight: '45px', family: "'Coolvetica', sans-serif" },
  h3: { size: '32px', weight: 400, lineHeight: '30px', family: "'Coolvetica', sans-serif" },
  h4: { size: '24px', weight: 400, lineHeight: '26px', family: "'Coolvetica', sans-serif" },
  h5: { size: '18px', weight: 400, lineHeight: '18px', family: "'Coolvetica', sans-serif" },

  // Heading 6 & Body (Involve)
  h6: { size: '18px', weight: 600, lineHeight: '22px', family: "'Involve', sans-serif" }, // semibold обычно 600
  body1: { size: '16px', weight: 500, lineHeight: '22px', family: "'Involve', sans-serif" }, // medium
  body2: { size: '16px', weight: 700, lineHeight: '24px', family: "'Involve', sans-serif" }, // bold (line-height не указан, поставил стандартный)
  body3: { size: '15px', weight: 500, lineHeight: '18px', family: "'Involve', sans-serif" }, // medium
  body4: { size: '15px', weight: 400, lineHeight: '20px', family: "'Involve', sans-serif" }, // regular
  body5: { size: '16px', weight: 600, lineHeight: '20px', family: "'Involve', sans-serif" }, // semibold

  // Pagination (Manrope)
  pagination: { size: '30px', weight: 500, lineHeight: '40px', letterSpacing: '0.5px', family: "'Manrope', sans-serif" },

  // для инпутов
  input: { size: '11px', weight: 500, lineHeight: '16px', family: "'Involve', sans-serif" },
  
  // для чекбоксов
  checkboxText: { size: '10px', weight: 500, lineHeight: '11px', family: "'Involve', sans-serif" },
};