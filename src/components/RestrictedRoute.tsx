import { selectIsLoggedIn } from '@/store/auth/selectors';
import { useAppSelector } from '@/store/hooks';
import { Navigate } from 'react-router-dom';

export interface RestrictedRouteProps {
  component: React.ReactNode;
  redirectTo: string;
}

/**
 * Публічний маршрут:
 * - Якщо користувач увійшов у систему, рендеримо <Navigate> до redirectTo (redirectTo="/contacts" - в компоненті App).
 * - В іншому випадку рендеримо Component
 */

const RestrictedRoute = ({ component, redirectTo = '/' }: RestrictedRouteProps) => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : component;
};

export default RestrictedRoute;
