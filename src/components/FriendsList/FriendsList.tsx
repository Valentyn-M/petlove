import { useAppSelector } from '@/store/hooks';
import s from './FriendsList.module.scss';
import { selectFriendsItems } from '@/store/friends/selectors';
import FriendsItem from '@/components/FriendsItem/FriendsItem';

export interface FriendsListProps {}

const FriendsList = ({}: FriendsListProps) => {
  const friendsItems = useAppSelector(selectFriendsItems);

  return (
    <ul className={s.list}>
      {friendsItems.map((friendsItem) => (
        <li key={friendsItem._id} className={s.item}>
          <FriendsItem friendsData={friendsItem} />
        </li>
      ))}
    </ul>
  );
};

export default FriendsList;
