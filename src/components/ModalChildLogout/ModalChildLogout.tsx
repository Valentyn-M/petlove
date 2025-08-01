import IconPet from '@/components/IconPet/IconPet';
import s from './ModalChildLogout.module.scss';
import ButtonMain from '@/components/ButtonMain/ButtonMain';
import { useAppDispatch } from '@/store/hooks';
import { logoutUser } from '@/store/auth/operations';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

export interface ModalChildLogoutProps {
  onClose: () => void;
}

const ModalChildLogout = ({ onClose }: ModalChildLogoutProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = () => {
    dispatch(logoutUser())
      .unwrap()
      .then(() => {
        onClose();
        navigate('/');
      })
      .catch((error) => {
        enqueueSnackbar(`Error: ${error}`, { variant: 'error' });
      });
  };

  return (
    <div className={s.modalChildLogout}>
      <IconPet className={s.iconPet} />
      <h3 className={s.title}>Already leaving?</h3>
      <div className={s.buttons}>
        <ButtonMain className={s.btn} lowerCase={true} onClick={handleClick}>
          Yes
        </ButtonMain>
        <ButtonMain className={s.btn} lowerCase={true} grey={true} onClick={() => onClose()}>
          Cancel
        </ButtonMain>
      </div>
    </div>
  );
};

export default ModalChildLogout;
