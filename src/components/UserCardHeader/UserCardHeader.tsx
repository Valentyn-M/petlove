import s from './UserCardHeader.module.scss';
import { svgIcon } from '@/components/App';
import EditUserBtn from '@/components/EditUserBtn/EditUserBtn';

export interface UserCardHeaderProps {}

const UserCardHeader = ({}: UserCardHeaderProps) => {
  return (
    <div className={s.userCardHeader}>
      <div className={s.userLabel}>
        <span>User</span>
        <svg className={s.iconUser}>
          <use href={`${svgIcon}#icon-user`} />
        </svg>
      </div>
      <EditUserBtn />
    </div>
  );
};

export default UserCardHeader;
