import s from './UserCard.module.scss';
import { svgIcon } from '@/components/App';
import UserBlock from '@/components/UserBlock/UserBlock';
import EditUserBtn from '@/components/EditUserBtn/EditUserBtn';

export interface UserCardProps {}

const UserCard = ({}: UserCardProps) => {
  return (
    <div className={s.userCard}>
      <div className={s.header}>
        <div className={s.userLabel}>
          <span>User</span>
          <svg className={s.iconUser}>
            <use href={`${svgIcon}#icon-user`} />
          </svg>
        </div>
        <EditUserBtn />
      </div>

      <UserBlock />
    </div>
  );
};

export default UserCard;
