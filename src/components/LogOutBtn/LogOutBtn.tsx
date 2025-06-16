import ButtonMain from '@/components/ButtonMain/ButtonMain';
import s from './LogOutBtn.module.scss';
import { useAppDispatch } from '@/store/hooks';
import { logoutUser } from '@/store/auth/operations';

export interface LogOutBtnProps {
  light: boolean;
  outline: boolean;
}

const LogOutBtn = ({ light, outline }: LogOutBtnProps) => {
  const dispatch = useAppDispatch();

  return (
    <ButtonMain light={light} outline={outline} onClick={() => dispatch(logoutUser())}>
      Log out
    </ButtonMain>
  );
};

export default LogOutBtn;
