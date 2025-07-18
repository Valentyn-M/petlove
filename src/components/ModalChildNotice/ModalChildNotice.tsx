import s from './ModalChildNotice.module.scss';

export interface ModalChildNoticeProps {}

const ModalChildNotice = ({}: ModalChildNoticeProps) => {
  return (
    <div className={s.modalChildNoticeProps}>
      <h3>ModalChildNoticeProps</h3>
    </div>
  );
};

export default ModalChildNotice;
