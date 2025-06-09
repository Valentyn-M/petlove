import { Meta, Title } from 'react-head';

export interface HomePageProps {}

const HomePage = ({}: HomePageProps) => {
  return (
    <>
      <Title>Petlove</Title>
      <Meta name="description" content="Take good care of your small pets" />
      <h1>HomePage</h1>
    </>
  );
};

export default HomePage;
