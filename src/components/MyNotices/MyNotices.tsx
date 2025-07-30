import MyNoticesHeader from '@/components/MyNoticesHeader/MyNoticesHeader';
import s from './MyNotices.module.scss';

export interface MyNoticesProps {}

const MyNotices = ({}: MyNoticesProps) => {
  return <div className={s.myNotices}>MyNotices</div>;
};

export default MyNotices;
