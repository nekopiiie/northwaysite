import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import MainPage from './pages/MainPage';
import KittensPage from './pages/KittensPage';
import KittenDetailPage from './pages/KittenDetailPage';

// Отдельный компонент, который использует useLocation (находится внутри BrowserRouter)
const AppContent = () => {
  const location = useLocation();
  // Проверяем, страница ли конкретного котёнка
  const isKittenDetailPage = location.pathname === '/kitten/fred';

  return (
    <>
      <ScrollToTop />
      <div className="app-layout">
        <Header variant={isKittenDetailPage ? 'secondary' : 'primary'} />
        <main>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/kittens" element={<KittensPage />} />
            <Route path="/kitten/fred" element={<KittenDetailPage />} />
            <Route path="*" element={<MainPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;