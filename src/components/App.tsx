import Layout from '@/components/Layout/Layout';
import './App.scss';
import { Route, Routes, useLocation } from 'react-router-dom';
import { lazy } from 'react';
import { HomePageContext } from '@/context/HomePageContext';

export const svgIcon = '/svgSprite.svg';

const HomePage = lazy(() => import('@/pages/HomePage/HomePage'));
const NewsPage = lazy(() => import('@/pages/NewsPage/NewsPage'));
const FindPetPage = lazy(() => import('@/pages/FindPetPage/FindPetPage'));
const OurFriendsPage = lazy(() => import('@/pages/OurFriendsPage/OurFriendsPage'));

const RegistrationPage = lazy(() => import('@/pages/RegistrationPage/RegistrationPage'));
const LoginPage = lazy(() => import('@/pages/LoginPage/LoginPage'));

const ProfilePage = lazy(() => import('@/pages/ProfilePage/ProfilePage'));

const NotFoundPage = lazy(() => import('@/pages/NotFoundPage/NotFoundPage'));

function App() {
  // To detect if this is Home page
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    // TODO Add main loader before Layout
    <HomePageContext.Provider value={isHome}>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/find-pet" element={<FindPetPage />} />
          <Route path="/our-friends" element={<OurFriendsPage />} />

          {/* TODO only for unregistered users */}
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />

          {/* TODO only for registered users */}
          <Route path="/profile" element={<ProfilePage />} />

          {/* TODO NotFoundPage */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </HomePageContext.Provider>
  );
}

export default App;
