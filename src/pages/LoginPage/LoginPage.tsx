import Login from '@/components/Login/Login';
import { Meta, Title } from 'react-head';

export interface LoginPageProps {}

const LoginPage = ({}: LoginPageProps) => {
  return (
    <>
      <Title>Login</Title>
      <Meta name="description" content="Welcome! Please enter your credentials to login to the platform." />
      <Login />
    </>
  );
};

export default LoginPage;
