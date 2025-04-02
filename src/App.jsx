import React from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import AppRoutes from './routes/AppRoutes';

// Componente para manejar el scroll al inicio
function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
}

const App = () => {
  return (
    <Router>
      <div className="min-h-screen w-full overflow-x-hidden">
        <ScrollToTop />
        <MainLayout>
          <AppRoutes />
        </MainLayout>
      </div>
    </Router>
  );
};

export default App; 