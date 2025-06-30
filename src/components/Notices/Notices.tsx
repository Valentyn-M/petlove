import TitleMain from '@/components/TitleMain/TitleMain';
import s from './Notices.module.scss';
import NoticesList from '@/components/NoticesList/NoticesList';
import Pagination from '@/components/Pagination/Pagination';
import NoticesFilters from '@/components/NoticesFilters/NoticesFilters';
import clsx from 'clsx';

export interface NoticesProps {}

const Notices = ({}: NoticesProps) => {
  return (
    <section className={s.notices}>
      <TitleMain className={clsx(s.title, 'extra-container')}>Find your favorite pet</TitleMain>
      <NoticesFilters />
      <NoticesList />
      {/* <Pagination /> */}
    </section>
  );
};

export default Notices;
