import clsx from 'clsx';
import s from './MenuMobile.module.scss';
import Menu from '@/components/Menu/Menu';
import AuthNav from '@/components/AuthNav/AuthNav';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useHomePage } from '@/hooks/useHomePage';
import { breakpoints } from '@/styles/breakpoints';
import { useAppSelector } from '@/store/hooks';
import { selectIsLoggedIn } from '@/store/auth/selectors';
import LogOutBtn from '@/components/LogOutBtn/LogOutBtn';

export interface MenuMobileProps {
  isActive?: boolean;
  wrapRef: React.RefObject<HTMLDivElement>;
  menuRef: React.RefObject<HTMLDivElement>;
}

const MenuMobile: React.FC<MenuMobileProps> = ({ isActive, wrapRef, menuRef }) => {
  const isMobile = useMediaQuery(`(max-width: ${breakpoints.mobile})`);
  const isHome = useHomePage();
  const isMenuLight = isActive ? isHome : !isHome;
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return (
    <>
      <div ref={wrapRef} className={clsx(s.menuMobileWrap, isActive && s.open, isMenuLight && s.menuMobileLight)}>
        <div ref={menuRef} className={s.menuMobile}>
          <Menu isMenuMobileActive={isActive} />
          {!isLoggedIn
            ? isMobile && <AuthNav isMenuMobileActive={isActive} />
            : // : isMobile && <ButtonMain light={!isHome}>Log out</ButtonMain>
              isMobile && <LogOutBtn light={!isHome} outline={!isHome} />}
        </div>
      </div>
      {/* <div className={clsx(s.overlay, isActive && s.active)} /> */}
    </>
  );
};

export default MenuMobile;
