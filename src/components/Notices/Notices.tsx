import TitleMain from '@/components/TitleMain/TitleMain';
import s from './Notices.module.scss';
import NoticesList from '@/components/NoticesList/NoticesList';
import Pagination from '@/components/Pagination/Pagination';
import NoticesFilters from '@/components/NoticesFilters/NoticesFilters';
import clsx from 'clsx';
import NoticesFiltersResetButton from '@/components/NoticesFiltersResetButton/NoticesFiltersResetButton';

export interface NoticesProps {}

const Notices = ({}: NoticesProps) => {
  return (
    <section className={s.notices}>
      <div className={clsx(s.header, 'extra-container')}>
        <TitleMain>Find your favorite pet</TitleMain>
        <NoticesFiltersResetButton />
      </div>
      <NoticesFilters />
      <NoticesList />
      {/* <Pagination /> */}
    </section>
  );
};

export default Notices;
