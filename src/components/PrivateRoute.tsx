import { selectIsLoggedIn } from '@/store/auth/selectors';
import { useAppSelector } from '@/store/hooks';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  component: React.ReactNode;
  redirectTo: string;
}

/**
 * Приватний маршрут:
 * - Якщо користувач увійшов у систему, рендеримо Component
 * - Інакше рендеримо <Navigate> до redirectTo
 */

const PrivateRoute = ({ component, redirectTo = '/' }: PrivateRouteProps) => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return isLoggedIn ? component : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
