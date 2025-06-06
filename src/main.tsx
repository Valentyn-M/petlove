import App from '@/components/App';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import { HeadProvider } from 'react-head';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <HeadProvider>
        <App />
      </HeadProvider>
    </BrowserRouter>
  </StrictMode>
);
