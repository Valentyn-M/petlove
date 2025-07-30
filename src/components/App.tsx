import Layout from '@/components/Layout/Layout';
import './App.scss';
import { Route, Routes, useLocation } from 'react-router-dom';
import { lazy, useEffect, useState } from 'react';
import { HomePageContext } from '@/context/HomePageContext';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectIsRefreshing, selectIsToken, selectUserEmail } from '@/store/auth/selectors';
import { refreshUser } from '@/store/auth/operations';
import { setAuthHeader } from '@/store/utils';
import PrivateRoute from '@/components/PrivateRoute';
import RestrictedRoute from '@/components/RestrictedRoute';

export const svgIcon = '/svgSprite.svg';

// Eager
import HomePage from '@/pages/HomePage/HomePage';
import LoaderMain from '@/components/LoaderMain/LoaderMain';

// Lazy
const NewsPage = lazy(() => import('@/pages/NewsPage/NewsPage'));
const NoticesPage = lazy(() => import('@/pages/NoticesPage/NoticesPage'));
const OurFriendsPage = lazy(() => import('@/pages/FriendsPage/FriendsPage'));

const RegistrationPage = lazy(() => import('@/pages/RegistrationPage/RegistrationPage'));
const LoginPage = lazy(() => import('@/pages/LoginPage/LoginPage'));

const ProfilePage = lazy(() => import('@/pages/ProfilePage/ProfilePage'));
const AddPetPage = lazy(() => import('@/pages/AddPetPage/AddPetPage'));

const NotFoundPage = lazy(() => import('@/pages/NotFoundPage/NotFoundPage'));

function App() {
  // To detect if this is Home page
  const location = useLocation();
  const isHome = location.pathname === '/';

  const dispatch = useAppDispatch();
  const token = useAppSelector(selectIsToken);
  const email = useAppSelector(selectUserEmail);
  const isRefreshing = useAppSelector(selectIsRefreshing);

  useEffect(() => {
    if (token && !email) {
      setAuthHeader(token);
      dispatch(refreshUser());
    }
  }, [token, email, dispatch]);

  // Loader
  const loaderDuration: number = 2200;
  const [isLoaderReady, setIsLoaderReady] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoaderReady(true);
    }, loaderDuration);
    return () => clearTimeout(timeout);
  }, []);

  const showApp = isLoaderReady && !isRefreshing;

  return !showApp ? (
    <LoaderMain loaderDuration={loaderDuration} />
  ) : (
    <HomePageContext.Provider value={isHome}>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/find-pet" element={<NoticesPage />} />
          <Route path="/our-friends" element={<OurFriendsPage />} />

          {/* Only for Unregistered users */}
          <Route
            path="/registration"
            element={<RestrictedRoute component={<RegistrationPage />} redirectTo="/profile" />}
          />
          <Route path="/login" element={<RestrictedRoute component={<LoginPage />} redirectTo="/profile" />} />

          {/* Only for Registered users */}
          <Route path="/profile" element={<PrivateRoute component={<ProfilePage />} redirectTo="/login" />} />

          <Route path="/add-pet" element={<PrivateRoute component={<AddPetPage />} redirectTo="/login" />} />

          {/* TODO NotFoundPage */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </HomePageContext.Provider>
  );
}

export default App;
