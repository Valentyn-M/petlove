import ButtonFunction from '@/components/ButtonFunction/ButtonFunction';
import s from './UserCard.module.scss';
import { svgIcon } from '@/components/App';

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
        <ButtonFunction iconName="edit" className={s.btnEdit} />
      </div>
    </div>
  );
};

export default UserCard;
