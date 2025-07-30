import s from './UserCard.module.scss';
import UserBlock from '@/components/UserBlock/UserBlock';
import UserPetsBlock from '@/components/UserPetsBlock/UserPetsBlock';
import UserLogoutBlock from '@/components/UserLogoutBlock/UserLogoutBlock';

export interface UserCardProps {}

const UserCard = ({}: UserCardProps) => {
  return (
    <div className={s.userCard}>
      <UserBlock />
      <UserPetsBlock />
      <UserLogoutBlock />
    </div>
  );
};

export default UserCard;
