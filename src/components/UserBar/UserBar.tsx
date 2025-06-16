import clsx from 'clsx';
import s from './UserBar.module.scss';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { breakpoints } from '@/styles/breakpoints';
import { svgIcon } from '@/components/App';
import { useAppSelector } from '@/store/hooks';
import { selectUserAvatar, selectUserName } from '@/store/auth/selectors';
import { Link } from 'react-router-dom';

export interface UserBarProps {
  isHome?: boolean;
}

const UserBar = ({ isHome }: UserBarProps) => {
  const isMobileMedium = useMediaQuery(`(max-width: ${breakpoints.mobileMedium})`);

  const userName = useAppSelector(selectUserName);
  const userAvatar = useAppSelector(selectUserAvatar);

  return (
    <Link to="/profile">
      <div className={clsx(s.user, isHome && s.light)}>
        <div className={s.userAvatarWrap}>
          {userAvatar ? (
            <img className={s.userAvatar} src={userAvatar} alt="User avatar" width="24" height="24" />
          ) : (
            <svg className={s.iconUser}>
              <use href={`${svgIcon}#icon-user`} />
            </svg>
          )}
        </div>
        {!isMobileMedium && <span className={clsx(s.userName)}>{userName}</span>}
      </div>
    </Link>
  );
};

export default UserBar;
