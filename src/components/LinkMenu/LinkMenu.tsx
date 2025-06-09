import { NavLink, NavLinkProps } from 'react-router-dom';
import s from './LinkMenu.module.scss';
import clsx from 'clsx';

export interface LinkMenuProps extends NavLinkProps {
  outline?: boolean;
}

const LinkMenu = ({ to, outline, className, children, ...rest }: LinkMenuProps) => {
  const buildClassName: NavLinkProps['className'] = ({ isActive }) =>
    clsx(s.link, outline && s.outline, { [s.active]: isActive }, className);

  return (
    <NavLink to={to} className={buildClassName} {...rest}>
      {children}
    </NavLink>
  );
};

export default LinkMenu;
