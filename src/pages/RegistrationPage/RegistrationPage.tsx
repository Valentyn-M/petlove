import Registration from '@/components/Registration/Registration';
import { Meta, Title } from 'react-head';

export interface RegistrationPageProps {}

const RegistrationPage = ({}: RegistrationPageProps) => {
  return (
    <>
      <Title>Registration</Title>
      <Meta name="description" content="Thank you for your interest in our platform." />
      <Registration />
    </>
  );
};

export default RegistrationPage;
