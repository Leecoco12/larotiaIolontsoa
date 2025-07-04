import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// Initialize i18n
import './i18n';
import { init } from '@emailjs/browser';

// Initialize EmailJS with your Public Key
init('bzMg1hAcFG2aF4OCk'); // Your Public Key

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);