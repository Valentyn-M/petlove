import s from './UserBlockHeader.module.scss';
import { svgIcon } from '@/components/App';
import EditUserBtn from '@/components/EditUserBtn/EditUserBtn';

export interface UserBlockHeaderProps {}

const UserBlockHeader = ({}: UserBlockHeaderProps) => {
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

export default UserBlockHeader;
