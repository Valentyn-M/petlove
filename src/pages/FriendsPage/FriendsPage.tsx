import Friends from '@/components/Friends/Friends';
import { Meta, Title } from 'react-head';

export interface FriendsPageProps {}

const FriendsPage = ({}: FriendsPageProps) => {
  return (
    <>
      <Title>Our Friends | Petlove</Title>
      <Meta
        name="description"
        content="Meet our trusted partners — animal shelters, welfare organizations, and companies that help pets. Contact details, opening hours, and interactive links — everything you need to reach out and support them."
      />
      <Friends />
    </>
  );
};

export default FriendsPage;
