import UserCard from '@/components/UserCard/UserCard';
import s from './Profile.module.scss';
import MyNotices from '@/components/MyNotices/MyNotices';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useEffect } from 'react';
import { getFullUserInfo } from '@/store/auth/operations';
import { selectIsLoadingFullUser } from '@/store/auth/selectors';
import Loader from '@/components/Loader/Loader';

export interface ProfileProps {}

const Profile = ({}: ProfileProps) => {
  const dispatch = useAppDispatch();

  const isLoadingFullUser = useAppSelector(selectIsLoadingFullUser);

  useEffect(() => {
    dispatch(getFullUserInfo());
  }, [dispatch]);

  return (
    <>
      {isLoadingFullUser ? (
        <Loader className={s.loader} />
      ) : (
        <section className={s.profile}>
          <UserCard />
          <MyNotices />
        </section>
      )}
    </>
  );
};

export default Profile;
