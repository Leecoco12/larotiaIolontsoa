import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Layout components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';
import NotFound from './pages/NotFound';

// Context providers
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const { i18n } = useTranslation();
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    // Update the document title based on the current language
    document.title = i18n.t('siteTitle', 'Larotia — Architecture & BTP Portfolio');
    
    // Set html lang attribute based on current language
    document.documentElement.lang = i18n.language;
  }, [i18n.language, i18n]);

  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen transition-colors duration-300 bg-gray-50 dark:bg-gray-900">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;