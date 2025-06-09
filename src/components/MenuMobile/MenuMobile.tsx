import clsx from 'clsx';
import s from './MenuMobile.module.scss';
import Menu from '@/components/Menu/Menu';
import AuthNav from '@/components/AuthNav/AuthNav';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useHomePage } from '@/hooks/useHomePage';

export interface MenuMobileProps {
  isActive?: boolean;
  wrapRef: React.RefObject<HTMLDivElement>;
  menuRef: React.RefObject<HTMLDivElement>;
}

const MenuMobile: React.FC<MenuMobileProps> = ({ isActive, wrapRef, menuRef }) => {
  const isMobileMedium = useMediaQuery('(max-width: 37.5rem)'); // 600px

  const isHome = useHomePage();

  const isMenuLight = isActive ? isHome : !isHome;

  return (
    <>
      <div ref={wrapRef} className={clsx(s.menuMobileWrap, isActive && s.open, isMenuLight && s.menuMobileLight)}>
        <div ref={menuRef} className={s.menuMobile}>
          <Menu isMenuMobileActive={isActive} />
          {isMobileMedium && <AuthNav isMenuMobileActive={isActive} />}
        </div>
      </div>
      {/* <div className={clsx(s.overlay, isActive && s.active)} /> */}
    </>
  );
};

export default MenuMobile;
