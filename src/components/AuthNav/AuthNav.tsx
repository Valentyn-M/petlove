import { useHomePage } from '@/hooks/useHomePage';
import s from './AuthNav.module.scss';
import LinkMain from '@/components/LinkMain/LinkMain';

export interface AuthNavProps {
  isMenuMobileActive?: boolean;
}

const AuthNav = ({ isMenuMobileActive }: AuthNavProps) => {
  const isHome = useHomePage();

  const isOutlineType = isMenuMobileActive ? !isHome : isHome;

  return (
    <nav className={s.authNav}>
      <ul className={s.list}>
        <li className={s.item}>
          <LinkMain to="/login" outline={isOutlineType} className={s.link}>
            Log In
          </LinkMain>
        </li>
        <li>
          <LinkMain to="/registration" light={true} className={s.link}>
            Registration
          </LinkMain>
        </li>
      </ul>
    </nav>
  );
};

export default AuthNav;
