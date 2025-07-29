import { useModal } from '@/hooks/useModal';
import s from './EditUserBtn.module.scss';
import ButtonFunction from '@/components/ButtonFunction/ButtonFunction';
import Modal from '@/components/Modal/Modal';
import ModalChildEditUser from '@/components/ModalChildEditUser/ModalChildEditUser';
import clsx from 'clsx';

export interface EditUserBtnProps {}

const EditUserBtn = ({}: EditUserBtnProps) => {
  const { openModal, closeModal, isModalOpen } = useModal();

  return (
    <>
      <ButtonFunction iconName="edit" className={clsx(s.btn, s.btnEdit)} onClick={() => openModal('edit-user')} />

      {isModalOpen('edit-user') && (
        <Modal className={s.modal} isOpen={true} padding50To50 onClose={closeModal} contentLabel="Edit user">
          <ModalChildEditUser />
        </Modal>
      )}
    </>
  );
};

export default EditUserBtn;
