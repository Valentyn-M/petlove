import { Meta, Title } from 'react-head';

export interface RegistrationPageProps {}

const RegistrationPage = ({}: RegistrationPageProps) => {
  return (
    <>
      <Title>Registration</Title>
      <Meta name="description" content="Thank you for your interest in our platform. " />
      <h1>RegistrationPage</h1>
    </>
  );
};

export default RegistrationPage;
