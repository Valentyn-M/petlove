import ButtonFunction from '@/components/ButtonFunction/ButtonFunction';
import s from './UserCard.module.scss';
import { svgIcon } from '@/components/App';
import { useModal } from '@/hooks/useModal';
import Modal from '@/components/Modal/Modal';
import ModalChildEditUser from '@/components/ModalChildEditUser/ModalChildEditUser';
import UserBlock from '@/components/UserBlock/UserBlock';

export interface UserCardProps {}

const UserCard = ({}: UserCardProps) => {
  const { openModal, closeModal, isModalOpen } = useModal();

  return (
    <div className={s.userCard}>
      <div className={s.header}>
        <div className={s.userLabel}>
          <span>User</span>
          <svg className={s.iconUser}>
            <use href={`${svgIcon}#icon-user`} />
          </svg>
        </div>
        <ButtonFunction iconName="edit" className={s.btnEdit} onClick={() => openModal('edit-user')} />
      </div>

      <UserBlock />

      {/* Modals */}
      {isModalOpen('edit-user') && (
        <Modal isOpen={true} onClose={closeModal} contentLabel="Edit user">
          <ModalChildEditUser />
        </Modal>
      )}
    </div>
  );
};

export default UserCard;
