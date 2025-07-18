import clsx from 'clsx';
import s from './ButtonMain.module.scss';
import { ComponentProps } from 'react';

export interface ButtonMainProps extends ComponentProps<'button'> {
  light?: boolean;
  outline?: boolean;
  grey?: boolean;
  lowerСase?: boolean;
}
// ComponentProps<'button'> — додає підтримку всіх стандартних атрибутів кнопки
// children, onClick, type, disabled, aria-*, form, name - все включено в ComponentProps<'button'>

const ButtonMain = ({ light, outline, grey, lowerСase, className, children, ...rest }: ButtonMainProps) => {
  return (
    <button
      type="button"
      {...rest}
      className={clsx(
        s.button,
        light && s.light,
        outline && s.outline,
        grey && s.grey,
        lowerСase && s.lowerСase,
        rest.disabled && s.disabled,
        className
      )}
    >
      {children}
    </button>
  );
};

export default ButtonMain;
