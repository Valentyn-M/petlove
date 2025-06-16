import s from './UserNav.module.scss';
import { useHomePage } from '@/hooks/useHomePage';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { breakpoints } from '@/styles/breakpoints';
import LogOutBtn from '@/components/LogOutBtn/LogOutBtn';
import UserBar from '@/components/UserBar/UserBar';

export interface UserNavProps {}

const UserNav = ({}: UserNavProps) => {
  const isHome = useHomePage();

  const isMobile = useMediaQuery(`(max-width: ${breakpoints.mobile})`);

  return (
    <div className={s.userNav}>
      {!isMobile && <LogOutBtn light={isHome} outline={isHome} />}
      <UserBar isHome={isHome} />
    </div>
  );
};

export default UserNav;
