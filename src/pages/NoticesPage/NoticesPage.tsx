import Notices from '@/components/Notices/Notices';
import { Meta, Title } from 'react-head';

export interface FindPetPageProps {}

const FindPetPage = ({}: FindPetPageProps) => {
  return (
    <>
      <Title>Find pet | Petlove</Title>
      <Meta
        name="description"
        content="Find your perfect pet — filter by category, gender, type, and location. Explore popular, affordable, or unique animals. Everything you need to adopt your favorite pet quickly and easily."
      />
      <Notices />
    </>
  );
};

export default FindPetPage;
