import { NavLink, NavLinkProps } from 'react-router-dom';
import s from './LinkNav.module.scss';
import clsx from 'clsx';

export interface LinkNavProps extends NavLinkProps {
  outline?: boolean;
}
// extends NavLinkProps — додає підтримку всіх стандартних атрибутів лінку
// to вже є в NavLinkProps

const LinkNav = ({ to, outline, className, children, ...rest }: LinkNavProps) => {
  const buildClassName: NavLinkProps['className'] = ({ isActive }) =>
    clsx(s.link, outline && s.outline, { [s.active]: isActive }, className);

  return (
    <NavLink to={to} className={buildClassName} {...rest}>
      {children}
    </NavLink>
  );
};

export default LinkNav;
