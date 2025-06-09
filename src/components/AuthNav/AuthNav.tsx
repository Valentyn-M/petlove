import { useHomePage } from '@/hooks/useHomePage';
import s from './AuthNav.module.scss';
import LinkMain from '@/components/LinkMain/LinkMain';

export interface AuthNavProps {}

const AuthNav = ({}: AuthNavProps) => {
  const isHome = useHomePage();

  return (
    <nav>
      <ul className={s.authNav}>
        <li>
          <LinkMain to="/login" outline={isHome}>
            Log In
          </LinkMain>
        </li>
        <li>
          <LinkMain to="/registration" light={true} outline={isHome}>
            Registration
          </LinkMain>
        </li>
      </ul>
    </nav>
  );
};

export default AuthNav;
