import clsx from 'clsx';
import s from './ButtonPagination.module.scss';
import { ComponentProps } from 'react';

export interface ButtonPaginationProps extends ComponentProps<'button'> {
  active?: boolean;
}

const ButtonPagination = ({ active, className, children, ...rest }: ButtonPaginationProps) => {
  // Скидання фокусу
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    rest.onClick?.(e);
    e.currentTarget.blur();
  };

  return (
    <button
      type="button"
      {...rest}
      onClick={handleClick}
      className={clsx(s.button, active && s.active, rest.disabled && s.disabled, className)}
    >
      {children}
    </button>
  );
};

export default ButtonPagination;
