import { AnimatePresence, motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import { svgIcon } from '@/components/App';
import s from './Modal.module.scss';
import { useEffect } from 'react';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  contentLabel: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, contentLabel, children }) => {
  useEffect(() => {
    const body = document.body;

    if (isOpen) {
      body.classList.add('lock');
    } else {
      body.classList.remove('lock');
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      body.classList.remove('lock'); // Clean up
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={s.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.3 } }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
          onClick={onClose}
        >
          <motion.div
            className={s.modal}
            initial={{ opacity: 0, scale: 0.95, x: '-50%', y: '-50%' }}
            animate={{
              opacity: 1,
              scale: 1,
              x: '-50%',
              y: '-50%',
              transition: { duration: 0.3 },
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              x: '-50%',
              y: '-50%',
              transition: { duration: 0.1 },
            }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={contentLabel}
          >
            <button onClick={onClose} type="button" className={s.closeBtn} aria-label="Close modal">
              <svg className={s.iconClose}>
                <use href={`${svgIcon}#icon-cross`} />
              </svg>
            </button>

            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    modalRoot
  );
};

export default Modal;
