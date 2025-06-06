import Layout from '@/components/Layout/Layout';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

export const svgIcon = '/svgSprite.svg';

const HomePage = lazy(() => import('@/pages/HomePage/HomePage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage/NotFoundPage'));

function App() {
  return (
    // TODO Add main loader
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* TODO NotFoundPage */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
