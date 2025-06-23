import TitleMain from '@/components/TitleMain/TitleMain';
import s from './News.module.scss';
import clsx from 'clsx';
import NewsList from '@/components/NewsList/NewsList';
import Pagination from '@/components/Pagination/Pagination';
import SearchForm from '@/components/SearchForm/SearchForm';

export interface NewsProps {}

const News = ({}: NewsProps) => {
  return (
    <div className={clsx(s.news, 'container')}>
      <div className={s.header}>
        <TitleMain>News</TitleMain>
        <SearchForm />
      </div>
      <NewsList />
      <Pagination />
    </div>
  );
};

export default News;
