import React from 'react';
// Мы импортируем кнопку прямо из нашего файла Library.js
import { Button } from './Library';

function App() {
  return (
    <div style={{ padding: '50px', fontFamily: 'sans-serif' }}>
      <h1>Тестовая страница библиотеки</h1>
      
      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        {/* Проверяем нашу кнопку */}
        <Button text="Главная кнопка" variant="primary" />
        <Button text="Второстепенная" variant="secondary" />
      </div>

    </div>
  );
}

export default App;