import clsx from 'clsx';
import s from './AppBar.module.scss';
import Logo from '@/components/Logo/Logo';

export interface AppBarProps {}

const AppBar = ({}: AppBarProps) => {
  return (
    <div className={s.appBar}>
      <div className={clsx(s.appBarContainer, 'container')}>
        <Logo />
      </div>
    </div>
  );
};

export default AppBar;
