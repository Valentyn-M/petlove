import ButtonMain from '@/components/ButtonMain/ButtonMain';
import s from './LogOutBtn.module.scss';
import Modal from '@/components/Modal/Modal';
import { useState } from 'react';
import ModalChildLogout from '@/components/ModalChildLogout/ModalChildLogout';

export interface LogOutBtnProps {
  light: boolean;
  outline: boolean;
}

const LogOutBtn = ({ light, outline }: LogOutBtnProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (): void => {
    setIsModalOpen(true);
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
  };

  return (
    <>
      <ButtonMain light={light} outline={outline} onClick={() => openModal()}>
        Log out
      </ButtonMain>

      <Modal isOpen={isModalOpen} onClose={closeModal} contentLabel="Logout">
        <ModalChildLogout onClose={closeModal} />
      </Modal>
    </>
  );
};

export default LogOutBtn;
