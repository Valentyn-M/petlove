import Layout from '@/components/Layout/Layout';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

export const svgIcon = '/svgSprite.svg';

const HomePage = lazy(() => import('@/pages/HomePage/HomePage'));
const NewsPage = lazy(() => import('@/pages/NewsPage/NewsPage'));
const FindPetPage = lazy(() => import('@/pages/FindPetPage/FindPetPage'));
const OurFriendsPage = lazy(() => import('@/pages/OurFriendsPage/OurFriendsPage'));

const NotFoundPage = lazy(() => import('@/pages/NotFoundPage/NotFoundPage'));

function App() {
  return (
    // TODO Add main loader
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/find-pet" element={<FindPetPage />} />
        <Route path="/our-friends" element={<OurFriendsPage />} />

        {/* TODO NotFoundPage */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
