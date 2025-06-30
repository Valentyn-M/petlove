import clsx from 'clsx';
import s from './NoticesList.module.scss';

export interface NoticesListProps {}

const NoticesList = ({}: NoticesListProps) => {
  return <div className={clsx(s.noticesList, 'extra-container')}>NoticesList</div>;
};

export default NoticesList;
