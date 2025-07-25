import UserCard from '@/components/UserCard/UserCard';
import s from './Profile.module.scss';
import MyNotices from '@/components/MyNotices/MyNotices';
import { useAppDispatch } from '@/store/hooks';
import { useEffect } from 'react';
import { getFullUserInfo } from '@/store/auth/operations';

export interface ProfileProps {}

const Profile = ({}: ProfileProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getFullUserInfo());
  }, [dispatch]);

  return (
    <section className={s.profile}>
      <UserCard />
      <MyNotices />
    </section>
  );
};

export default Profile;
