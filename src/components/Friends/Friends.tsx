import clsx from 'clsx';
import s from './Friends.module.scss';
import TitleMain from '@/components/TitleMain/TitleMain';
import FriendsList from '@/components/FriendsList/FriendsList';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useEffect } from 'react';
import { fetchFriends } from '@/store/friends/operations';
import { selectFriendsLoading } from '@/store/friends/selectors';
import Loader from '@/components/Loader/Loader';

export interface FriendsProps {}

const Friends = ({}: FriendsProps) => {
  const dispatch = useAppDispatch();

  const isLoading = useAppSelector(selectFriendsLoading);

  useEffect(() => {
    dispatch(fetchFriends());
  }, [dispatch]);

  return (
    <section className={clsx(s.friends, 'extra-container')}>
      <TitleMain className={s.title}>Our friends</TitleMain>

      {isLoading ? <Loader /> : <FriendsList />}
    </section>
  );
};

export default Friends;
