import { NavLink } from 'react-router-dom';
import s from './Logo.module.scss';
import { svgIcon } from '@/components/App';
import { useHomePage } from '@/hooks/useHomePage';
import clsx from 'clsx';

export interface LogoProps {}

const Logo = ({}: LogoProps) => {
  const isHome = useHomePage();

  return (
    <NavLink to="/" className={clsx(s.logoLink, isHome && s.home)}>
      <span>petl</span>
      <svg className={s.iconHeart}>
        <use href={`${svgIcon}#icon-heart`} />
      </svg>
      <span>ve</span>
    </NavLink>
  );
};

export default Logo;
