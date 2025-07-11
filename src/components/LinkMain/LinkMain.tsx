import clsx from 'clsx';
import s from './LinkMain.module.scss';
import { NavLink, NavLinkProps } from 'react-router-dom';

export interface LinkMainProps extends NavLinkProps {
  light?: boolean;
  outline?: boolean;
}
// NavLinkProps — додає підтримку всіх стандартних атрибутів лінку
// children, to, end, replace, state, reloadDocument, target, rel, aria-*, і так далі - все включено в NavLinkProps

const LinkMain = ({ to, light, outline, className, children, ...rest }: LinkMainProps) => {
  return (
    <NavLink to={to} {...rest} className={clsx(s.link, light && s.light, outline && s.outline, className)}>
      {children}
    </NavLink>
  );
};

export default LinkMain;
