import { NavLink, NavLinkProps } from 'react-router-dom';
import s from './Nav.module.scss';
import clsx from 'clsx';

export interface NavProps {}

const Nav = ({}: NavProps) => {
  const buildLinkClass: NavLinkProps['className'] = ({ isActive }) => clsx(s.link, { [s.active]: isActive });
  return (
    <nav>
      <ul className={s.navList}>
        <li>
          <NavLink to="/news" className={buildLinkClass}>
            News
          </NavLink>
        </li>
        <li>
          <NavLink to="/find-pet" className={buildLinkClass}>
            Find pet
          </NavLink>
        </li>
        <li>
          <NavLink to="/our-friends" className={buildLinkClass}>
            Our friends
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
