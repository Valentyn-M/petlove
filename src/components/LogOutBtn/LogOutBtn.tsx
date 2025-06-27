import ButtonMain from '@/components/ButtonMain/ButtonMain';
import s from './LogOutBtn.module.scss';
import Modal from '@/components/Modal/Modal';
import ModalChildLogout from '@/components/ModalChildLogout/ModalChildLogout';
import { useModal } from '@/hooks/useModal';

export interface LogOutBtnProps {
  light?: boolean;
  outline?: boolean;
}

const LogOutBtn = ({ light, outline }: LogOutBtnProps) => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <ButtonMain light={light} outline={outline} onClick={openModal}>
        Log out
      </ButtonMain>

      <Modal isOpen={isOpen} onClose={closeModal} contentLabel="Logout">
        <ModalChildLogout onClose={closeModal} />
      </Modal>
    </>
  );
};

export default LogOutBtn;
