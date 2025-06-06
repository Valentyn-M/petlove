import clsx from 'clsx';
import s from './AppBar.module.scss';
import Logo from '@/components/Logo/Logo';
import Nav from '@/components/Menu/Nav';
import AuthNav from '@/components/AuthNav/AuthNav';
import UserNav from '@/components/UserNav/UserNav';

export interface AppBarProps {}

const AppBar = ({}: AppBarProps) => {
  return (
    <div className={s.appBar}>
      <div className={clsx(s.appBarContainer, 'container')}>
        <Logo />
        <Nav />
        <div className={s.authBlock}>
          <AuthNav />
          <UserNav />
        </div>
      </div>
    </div>
  );
};

export default AppBar;
