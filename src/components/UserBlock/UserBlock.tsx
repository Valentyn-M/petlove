import { svgIcon } from '@/components/App';
import s from './UserBlock.module.scss';
import ModalChildEditUser from '@/components/ModalChildEditUser/ModalChildEditUser';
import Modal from '@/components/Modal/Modal';
import { useModal } from '@/hooks/useModal';
import { useAppSelector } from '@/store/hooks';
import { selectUserAvatar, selectUserEmail, selectUserName, selectUserPhone } from '@/store/auth/selectors';

export interface UserBlockProps {}

const UserBlock = ({}: UserBlockProps) => {
  const { openModal, closeModal, isModalOpen } = useModal();

  const userAvatar = useAppSelector(selectUserAvatar);
  const userName = useAppSelector(selectUserName);
  const userEmail = useAppSelector(selectUserEmail);
  const userPhone = useAppSelector(selectUserPhone);

  return (
    <div className={s.userBlock}>
      <button type="button" className={s.btn} onClick={() => openModal('edit-user')}>
        {!userAvatar ? (
          <>
            <span className={s.avatarWrap}>
              <svg className={s.iconUser}>
                <use href={`${svgIcon}#icon-user`} />
              </svg>
            </span>
            <span>Upload photo</span>
          </>
        ) : (
          <span className={s.avatarWrap}>
            <img className={s.userAvatar} src={userAvatar} alt="User avatar" width="110" height="110" />
          </span>
        )}
      </button>

      <h3 className={s.title}>My information</h3>

      <ul className={s.list}>
        <li className={s.item}>Name</li>
        <li className={s.item}>name@gmail.com|</li>
        <li className={s.item}>+380</li>
      </ul>

      {isModalOpen('edit-user') && (
        <Modal isOpen={true} onClose={closeModal} contentLabel="Edit user">
          <ModalChildEditUser />
        </Modal>
      )}
    </div>
  );
};

export default UserBlock;
