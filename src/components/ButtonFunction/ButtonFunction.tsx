import { ComponentProps } from 'react';
import s from './ButtonFunction.module.scss';
import clsx from 'clsx';
import { svgIcon } from '@/components/App';

export interface ButtonFunctionProps extends ComponentProps<'button'> {
  iconName: string;
}

const ButtonFunction = ({ className, iconName, disabled, ...rest }: ButtonFunctionProps) => {
  return (
    <button type="button" disabled={disabled} {...rest} className={clsx(s.btn, disabled && s.disabled, className)}>
      <svg className={s.icon}>
        <use href={`${svgIcon}#icon-${iconName}`} />
      </svg>
    </button>
  );
};

export default ButtonFunction;
