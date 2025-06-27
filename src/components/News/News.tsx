import TitleMain from '@/components/TitleMain/TitleMain';
import s from './News.module.scss';
import clsx from 'clsx';
import NewsList from '@/components/NewsList/NewsList';
import Pagination from '@/components/Pagination/Pagination';
import SearchForm from '@/components/SearchForm/SearchForm';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectValue } from '@/store/search/selectors';
import { selectNewsCurrentPage, selectNewsLoading } from '@/store/news/selectors';
import { useEffect } from 'react';
import { fetchNews } from '@/store/news/operations';
import Loader from '@/components/Loader/Loader';
import { setCurrentPage } from '@/store/news/slice';
import { usePrevious } from '@/hooks/usePrevious';

export interface NewsProps {}

const News = ({}: NewsProps) => {
  const dispatch = useAppDispatch();
  const searchValue = useAppSelector(selectValue);
  const currentPage = useAppSelector(selectNewsCurrentPage);
  const isLoading = useAppSelector(selectNewsLoading);

  const prevSearchValue = usePrevious(searchValue);

  useEffect(() => {
    if (searchValue !== prevSearchValue) {
      dispatch(setCurrentPage(1));
    }
  }, [searchValue, prevSearchValue, dispatch]);

  useEffect(() => {
    dispatch(fetchNews({ searchValue }));
  }, [searchValue, currentPage, dispatch]);

  return (
    <section className={clsx(s.news, 'extra-container')}>
      <div className={s.header}>
        <TitleMain>News</TitleMain>
        <SearchForm />
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <>
          <NewsList />
          <Pagination />
        </>
      )}
    </section>
  );
};

export default News;
