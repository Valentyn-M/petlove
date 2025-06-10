import clsx from 'clsx';
import s from './AppBar.module.scss';
import Logo from '@/components/Logo/Logo';
import AuthNav from '@/components/AuthNav/AuthNav';
import UserNav from '@/components/UserNav/UserNav';
import { useHomePage } from '@/hooks/useHomePage';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import Menu from '@/components/Menu/Menu';
import { useEffect, useRef, useState } from 'react';
import MenuMobile from '@/components/MenuMobile/MenuMobile';
import ButtonMenuMobile from '@/components/ButtonMenuMobile/ButtonMenuMobile';

export interface AppBarProps {}

const AppBar = ({}: AppBarProps) => {
  const isHome = useHomePage();

  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  const handleActivateMobileMenu = (): void => {
    setIsMobileMenuActive((prev) => !prev);
  };

  const isTablet = useMediaQuery('(max-width: 62rem)'); // 992px
  const isMobileMedium = useMediaQuery('(max-width: 37.5rem)'); // 600px

  const btnRef = useRef<HTMLButtonElement>(null);
  const menuWrapRef = useRef<HTMLDivElement>(null!);
  const menuRef = useRef<HTMLDivElement>(null!);

  // Закриття мобільного меню по кліку за його межами
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      const clickedButton = btnRef.current?.contains(target);
      const clickedWrap = menuWrapRef.current?.contains(target);
      const clickedMenu = menuRef.current?.contains(target);

      const isLink = target.closest('a'); // шукаємо <a>

      if (
        isMobileMenuActive &&
        !clickedButton &&
        ((!clickedWrap && !clickedMenu) || // клік поза меню і поза обгорткою
          (clickedMenu && isLink)) // або клік по <a> всередині меню
      ) {
        setIsMobileMenuActive(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuActive]);

  return (
    <div className={clsx(s.appBar, isHome && s.home)}>
      <Logo />
      {!isTablet && <Menu />}

      {/* TODO Рендеримо тільки один */}
      {!isMobileMedium && <AuthNav />}
      {/* <UserNav /> */}

      {isTablet && (
        <ButtonMenuMobile ref={btnRef} isActive={isMobileMenuActive} handleActivate={handleActivateMobileMenu} />
      )}
      {isTablet && <MenuMobile isActive={isMobileMenuActive} wrapRef={menuWrapRef} menuRef={menuRef} />}
    </div>
  );
};

export default AppBar;
