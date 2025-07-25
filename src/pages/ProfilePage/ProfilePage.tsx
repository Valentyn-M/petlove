import Profile from '@/components/Profile/Profile';
import { Meta, Title } from 'react-head';

export interface ProfilePageProps {}

const ProfilePage = ({}: ProfilePageProps) => {
  return (
    <>
      <Title>Profile | Petlove</Title>
      <Meta
        name="description"
        content="Petlove user personal page: edit profile, manage pets, view favorite and viewed pets."
      />
      <Profile />
    </>
  );
};

export default ProfilePage;
