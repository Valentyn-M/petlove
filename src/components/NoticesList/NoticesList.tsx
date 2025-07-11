import clsx from 'clsx';
import s from './NoticesList.module.scss';
import { selectNoticesItems } from '@/store/notices/selectors';
import { useAppSelector } from '@/store/hooks';
import NoticesItem from '@/components/NoticesItem/NoticesItem';

export interface NoticesListProps {}

const NoticesList = ({}: NoticesListProps) => {
  const noticesItems = useAppSelector(selectNoticesItems);

  console.log(noticesItems);

  return (
    <ul className={clsx(s.noticesList, 'extra-container')}>
      {noticesItems.map((noticesItem) => (
        <li key={noticesItem._id} className={s.item}>
          <NoticesItem newsData={noticesItem} />
        </li>
      ))}
    </ul>
  );
};

export default NoticesList;
