import TitleMain from '@/components/TitleMain/TitleMain';
import s from './Notices.module.scss';
import NoticesList from '@/components/NoticesList/NoticesList';
import Pagination from '@/components/Pagination/Pagination';
import NoticesFilters from '@/components/NoticesFilters/NoticesFilters';
import clsx from 'clsx';
import NoticesFiltersResetButton from '@/components/NoticesFiltersResetButton/NoticesFiltersResetButton';
import Loader from '@/components/Loader/Loader';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectNoticesCurrentPage, selectNoticesLoading, selectNoticesTotalPages } from '@/store/notices/selectors';
import { useEffect, useMemo } from 'react';
import {
  selectNoticesByPopularity,
  selectNoticesByPrice,
  selectNoticesFiltersCatecoreyItem,
  selectNoticesFiltersSexItem,
  selectNoticesFiltersSpeciesItem,
  selectNoticesLocationId,
  selectNoticesSearchValue,
} from '@/store/noticesFilters/selectors';
import { setCurrentPage } from '@/store/notices/slice';
import { fetchNotices } from '@/store/notices/operations';

export interface NoticesProps {}

const Notices = ({}: NoticesProps) => {
  const dispatch = useAppDispatch();

  // Get data from noticesFilters clise
  const searchValue = useAppSelector(selectNoticesSearchValue);
  const categoryItem = useAppSelector(selectNoticesFiltersCatecoreyItem);
  const sexItem = useAppSelector(selectNoticesFiltersSexItem);
  const speciesItem = useAppSelector(selectNoticesFiltersSpeciesItem);
  const locationId = useAppSelector(selectNoticesLocationId);
  const byPopularity = useAppSelector(selectNoticesByPopularity);
  const byPrice = useAppSelector(selectNoticesByPrice);

  // Get data from notices clise
  const isLoading = useAppSelector(selectNoticesLoading);
  const currentPage = useAppSelector(selectNoticesCurrentPage);
  const totalPages = useAppSelector(selectNoticesTotalPages);

  // Якщо користувач змінив будь-який фільтр — то ми скидаємо сторінку на першу
  useEffect(() => {
    dispatch(setCurrentPage(1));
  }, [searchValue, categoryItem, sexItem, speciesItem, locationId, byPopularity, byPrice, dispatch]);

  useEffect(() => {
    dispatch(
      fetchNotices({
        keyword: searchValue,
        category: categoryItem,
        sex: sexItem,
        species: speciesItem,
        locationId,
        byPopularity: byPopularity ?? undefined,
        byPrice: byPrice ?? undefined,
      })
    );
  }, [searchValue, categoryItem, sexItem, speciesItem, locationId, byPopularity, byPrice, currentPage, dispatch]);

  const handleChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <section className={s.notices}>
      <div className={clsx(s.header, 'extra-container')}>
        <TitleMain>Find your favorite pet</TitleMain>
        <NoticesFiltersResetButton />
      </div>

      <NoticesFilters />

      {isLoading ? (
        <Loader />
      ) : (
        <>
          <NoticesList />
          <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handleChangePage} />
        </>
      )}
    </section>
  );
};

export default Notices;
