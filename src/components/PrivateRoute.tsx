import { selectIsLoggedIn } from '@/store/auth/selectors';
import { useAppSelector } from '@/store/hooks';
import { Navigate } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<Props> = ({ children }) => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return isLoggedIn ? children : <Navigate to="/" replace />;
};

export default PrivateRoute;
