import s from './UserLogoutBlock.module.scss';
import ButtonMain from '@/components/ButtonMain/ButtonMain';
import Modal from '@/components/Modal/Modal';
import ModalChildLogout from '@/components/ModalChildLogout/ModalChildLogout';
import { useModal } from '@/hooks/useModal';

export interface UserLogoutBlockProps {}

const UserLogoutBlock = ({}: UserLogoutBlockProps) => {
  const { openModal, closeModal, isModalOpen } = useModal();

  return (
    <>
      <ButtonMain light onClick={() => openModal('logout')}>
        Log out
      </ButtonMain>

      {isModalOpen('logout') && (
        <Modal className={s.modal} isOpen={true} onClose={closeModal} contentLabel="Logout" padding80To80={true}>
          <ModalChildLogout onClose={closeModal} />
        </Modal>
      )}
    </>
  );
};

export default UserLogoutBlock;
