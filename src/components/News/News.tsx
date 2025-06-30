import TitleMain from '@/components/TitleMain/TitleMain';
import s from './News.module.scss';
import clsx from 'clsx';
import NewsList from '@/components/NewsList/NewsList';
import Pagination from '@/components/Pagination/Pagination';
import SearchForm from '@/components/SearchForm/SearchForm';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectValue } from '@/store/search/selectors';
import { selectNewsCurrentPage, selectNewsLoading, selectNewsTotalPages } from '@/store/news/selectors';
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
  const totalPages = useAppSelector(selectNewsTotalPages);

  const prevSearchValue = usePrevious(searchValue);

  useEffect(() => {
    if (searchValue !== prevSearchValue) {
      dispatch(setCurrentPage(1));
    }
  }, [searchValue, prevSearchValue, dispatch]);

  useEffect(() => {
    dispatch(fetchNews({ searchValue }));
  }, [searchValue, currentPage, dispatch]);

  const handleChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <section className={clsx(s.news, 'extra-container')}>
      <div className={s.header}>
        <TitleMain>News</TitleMain>
        <SearchForm className={s.search} />
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <>
          <NewsList />
          <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handleChangePage} />
        </>
      )}
    </section>
  );
};

export default News;
