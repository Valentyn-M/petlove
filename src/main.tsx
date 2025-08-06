import './index.scss';
import App from '@/components/App';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HeadProvider } from 'react-head';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '@/store/store';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { themeDatePicker } from '@/theme/themeDatePicker';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <HeadProvider>
            <SnackbarProvider autoHideDuration={4000} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
              <ThemeProvider theme={themeDatePicker}>
                <CssBaseline />
                <App />
              </ThemeProvider>
            </SnackbarProvider>
          </HeadProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);
