import ButtonMain from '@/components/ButtonMain/ButtonMain';
import s from './UserNav.module.scss';
import { svgIcon } from '@/components/App';
import clsx from 'clsx';

export interface UserNavProps {}

const userName = 'Olena';

const UserNav = ({}: UserNavProps) => {
  return (
    <div className={s.userNav}>
      <ButtonMain>Log out</ButtonMain>
      <div className={s.user}>
        <div className={s.iconUserWrap}>
          <svg className={s.iconUser}>
            <use href={`${svgIcon}#icon-user`} />
          </svg>
        </div>
        {/* TODO додати клас light якщо це головна сторінка */}
        <span className={clsx(s.userName)}>{userName}</span>
      </div>
    </div>
  );
};

export default UserNav;
