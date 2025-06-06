import clsx from 'clsx';
import s from './ButtonMain.module.scss';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonMainProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  light?: boolean;
  outline?: boolean;
  className?: string;
  children: ReactNode;
}
// disabled і type вже є в ButtonHTMLAttributes

const ButtonMain = ({ light, outline, className, children, ...rest }: ButtonMainProps) => {
  return (
    <button
      {...rest}
      className={clsx(s.button, light && s.light, outline && s.outline, rest.disabled && s.disabled, className)}
    >
      {children}
    </button>
  );
};

export default ButtonMain;
