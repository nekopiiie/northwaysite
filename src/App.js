import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainPage from './pages/MainPage'; // Импортируем страницу

function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'white' }}>
      <Header variant="primary" activePage="main" />
      
      <main style={{ flex: 1 }}>
        <MainPage /> {/* Рендерим страницу */}
      </main>

      <Footer />
    </div>
  );
}

export default App;