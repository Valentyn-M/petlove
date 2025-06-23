import { HTMLAttributes, ReactNode } from 'react';
import s from './TitleMain.module.scss';
import clsx from 'clsx';

export interface TitleMainProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
}

const TitleMain = ({ children, className, ...rest }: TitleMainProps) => {
  return (
    <h1 className={clsx(s.title, className)} {...rest}>
      {children}
    </h1>
  );
};

export default TitleMain;
