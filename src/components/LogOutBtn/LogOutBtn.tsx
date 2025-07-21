import ButtonMain from '@/components/ButtonMain/ButtonMain';
import Modal from '@/components/Modal/Modal';
import ModalChildLogout from '@/components/ModalChildLogout/ModalChildLogout';
import { useModal } from '@/hooks/useModal';

export interface LogOutBtnProps {
  light?: boolean;
  outline?: boolean;
}

const LogOutBtn = ({ light, outline }: LogOutBtnProps) => {
  const { openModal, closeModal, isModalOpen } = useModal();

  return (
    <>
      <ButtonMain light={light} outline={outline} onClick={() => openModal('logout')}>
        Log out
      </ButtonMain>

      {isModalOpen('logout') && (
        <Modal isOpen={true} onClose={closeModal} contentLabel="Logout" padding80To80={true}>
          <ModalChildLogout onClose={closeModal} />
        </Modal>
      )}
    </>
  );
};

export default LogOutBtn;
