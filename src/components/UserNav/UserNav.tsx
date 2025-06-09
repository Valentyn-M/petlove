import ButtonMain from '@/components/ButtonMain/ButtonMain';
import s from './UserNav.module.scss';
import { svgIcon } from '@/components/App';
import clsx from 'clsx';
import { useHomePage } from '@/hooks/useHomePage';

export interface UserNavProps {}

const UserNav = ({}: UserNavProps) => {
  const isHome = useHomePage();

  const userName = 'Olena';

  return (
    <div className={s.userNav}>
      <ButtonMain light={true} outline={isHome}>
        Log out
      </ButtonMain>
      <div className={clsx(s.user, isHome && s.light)}>
        <div className={s.iconUserWrap}>
          <svg className={s.iconUser}>
            <use href={`${svgIcon}#icon-user`} />
          </svg>
        </div>
        <span className={clsx(s.userName)}>{userName}</span>
      </div>
    </div>
  );
};

export default UserNav;
