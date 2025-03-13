import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import MainLayout from './components/MainLayout.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainLayout>
      <App />
    </MainLayout>
  </StrictMode>
);
