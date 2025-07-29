import UserCardHeader from '@/components/UserCardHeader/UserCardHeader';
import s from './UserCard.module.scss';

import UserBlock from '@/components/UserBlock/UserBlock';

export interface UserCardProps {}

const UserCard = ({}: UserCardProps) => {
  return (
    <div className={s.userCard}>
      <UserCardHeader />
      <UserBlock />
    </div>
  );
};

export default UserCard;
