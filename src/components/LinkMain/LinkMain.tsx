import clsx from 'clsx';
import s from './LinkMain.module.scss';
import { NavLink, NavLinkProps } from 'react-router-dom';
import React from 'react';

type CommonProps = {
  light?: boolean;
  outline?: boolean;
  lowerCase?: boolean;
  className?: string;
  children: React.ReactNode;
};

type InternalLinkProps = CommonProps & NavLinkProps & { href?: never };
type ExternalLinkProps = CommonProps & React.AnchorHTMLAttributes<HTMLAnchorElement> & { to?: never; href: string };

type LinkMainProps = InternalLinkProps | ExternalLinkProps;

const LinkMain: React.FC<LinkMainProps> = (props) => {
  const { light, outline, lowerCase, className, children, ...rest } = props;
  const classNames = clsx(s.link, light && s.light, outline && s.outline, lowerCase && s.lowerCase, className);

  if ('href' in props && props.href) {
    const { href, ...anchorRest } = rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a href={href} className={classNames} {...anchorRest}>
        {children}
      </a>
    );
  }

  const { to, ...navRest } = rest as NavLinkProps;
  return (
    <NavLink to={to || ''} className={classNames} {...navRest}>
      {children}
    </NavLink>
  );
};

export default LinkMain;
