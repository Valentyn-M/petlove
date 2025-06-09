import { ComponentProps, forwardRef, useEffect } from 'react';
import s from './ButtonMenuMobile.module.scss';
import clsx from 'clsx';
import { useHomePage } from '@/hooks/useHomePage';

export interface ButtonMenuMobileProps extends ComponentProps<'button'> {
  isActive: boolean;
  handleActivate: () => void;
}

const ButtonMenuMobile = forwardRef<HTMLButtonElement, ButtonMenuMobileProps>(
  ({ isActive, handleActivate, ...rest }, ref) => {
    const isHome = useHomePage();

    useEffect(() => {
      const body = document.body;

      if (isActive) {
        body.classList.add('lock');
      } else {
        body.classList.remove('lock');
      }

      return () => {
        body.classList.remove('lock');
      };
    }, [isActive]);

    return (
      <button
        ref={ref}
        className={clsx(s.btnBurger, isActive && s.active, isHome && s.home)}
        type="button"
        {...rest}
        aria-label="Show or Hide menu"
        onClick={handleActivate}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </button>
    );
  }
);

export default ButtonMenuMobile;
