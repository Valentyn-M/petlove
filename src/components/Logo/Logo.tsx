import { NavLink } from 'react-router-dom';
import s from './Logo.module.scss';
import { svgIcon } from '@/components/App';

export interface LogoProps {}

const Logo = ({}: LogoProps) => {
  return (
    <div className={s.logo}>
      <NavLink to="/" className={s.logoLink}>
        <span>petl</span>
        <svg className={s.iconHeart}>
          <use href={`${svgIcon}#icon-heart`} />
        </svg>
        <span>ve</span>
      </NavLink>
    </div>
  );
};

export default Logo;
