import TitleMain from '@/components/TitleMain/TitleMain';
import s from './Notices.module.scss';
import NoticesList from '@/components/NoticesList/NoticesList';
import Pagination from '@/components/Pagination/Pagination';
import NoticesFilters from '@/components/NoticesFilters/NoticesFilters';

export interface NoticesProps {}

const Notices = ({}: NoticesProps) => {
  return (
    <section className={s.notices}>
      <TitleMain className={s.title}>Find your favorite pet</TitleMain>
      <NoticesFilters />
      <NoticesList />
      {/* <Pagination /> */}
    </section>
  );
};

export default Notices;
