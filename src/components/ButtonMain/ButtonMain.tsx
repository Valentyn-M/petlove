import clsx from 'clsx';
import s from './ButtonMain.module.scss';
import { ComponentProps } from 'react';

export interface ButtonMainProps extends ComponentProps<'button'> {
  light?: boolean;
  outline?: boolean;
  grey?: boolean;
  lowerCase?: boolean;
  inactive?: boolean;
}
// ComponentProps<'button'> — додає підтримку всіх стандартних атрибутів кнопки
// children, onClick, type, disabled, aria-*, form, name - все включено в ComponentProps<'button'>

const ButtonMain = ({
  light,
  outline,
  grey,
  lowerCase,
  inactive,
  className,
  children,
  disabled,
  ...rest
}: ButtonMainProps) => {
  return (
    <button
      type="button"
      disabled={disabled}
      {...rest}
      className={clsx(
        s.button,
        light && s.light,
        outline && s.outline,
        grey && s.grey,
        lowerCase && s.lowerCase,
        inactive && s.inactive,
        disabled && s.disabled,
        className
      )}
    >
      {children}
    </button>
  );
};

export default ButtonMain;
