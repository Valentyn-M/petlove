import './index.scss';
import App from '@/components/App';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HeadProvider } from 'react-head';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '@/store/store';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <HeadProvider>
            <App />
          </HeadProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);
