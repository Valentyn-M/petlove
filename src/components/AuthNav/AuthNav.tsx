import ButtonMain from '@/components/ButtonMain/ButtonMain';
import s from './AuthNav.module.scss';

export interface AuthNavProps {}

const AuthNav = ({}: AuthNavProps) => {
  return (
    <div className={s.authNav}>
      <ButtonMain>Log In</ButtonMain>
      <ButtonMain light={true}>Registration</ButtonMain>
    </div>
  );
};

export default AuthNav;
