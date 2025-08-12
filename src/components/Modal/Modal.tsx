import { AnimatePresence, motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import { svgIcon } from '@/components/App';
import s from './Modal.module.scss';
import { useEffect } from 'react';
import { FocusTrap } from 'focus-trap-react';
import clsx from 'clsx';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  contentLabel: string;
  className?: string;
  children: React.ReactNode;
  padding80To80?: boolean;
  padding60To60?: boolean;
  padding40To50?: boolean;
  padding50To50?: boolean;
  padding55To55?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  contentLabel,
  className,
  children,
  padding80To80,
  padding60To60,
  padding40To50,
  padding50To50,
  padding55To55,
}) => {
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    // Determine if there was a vertical scrollbar on the page
    const scrollbarWidth = window.innerWidth - html.clientWidth;

    if (isOpen) {
      // Reserve the gutter only if it is needed
      if (scrollbarWidth > 0) {
        html.classList.add('gutter-stable');
      }
      body.classList.add('lock');
    } else {
      body.classList.remove('lock');
      html.classList.remove('gutter-stable');
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      body.classList.remove('lock'); // Clean up
      body.style.top = '';
      body.style.paddingRight = '';
      html.classList.remove('gutter-stable');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <FocusTrap active={isOpen}>
          <motion.div
            className={s.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.3 } }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            onClick={onClose}
          >
            <motion.div
              className={clsx(
                s.modal,
                className && className,
                padding80To80 && s.padding80To80,
                padding60To60 && s.padding60To60,
                padding40To50 && s.padding40To50,
                padding50To50 && s.padding50To50,
                padding55To55 && s.padding55To55
              )}
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
        </FocusTrap>
      )}
    </AnimatePresence>,
    modalRoot
  );
};

export default Modal;
