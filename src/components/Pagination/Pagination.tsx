import ButtonPagination from '@/components/ButtonPagination/ButtonPagination';
import s from './Pagination.module.scss';
import { svgIcon } from '@/components/App';
import clsx from 'clsx';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectNewsCurrentPage, selectNewsTotalPages } from '@/store/news/selectors';
import { getPaginationRange } from '@/utils/getPaginationRange';
import { setCurrentPage } from '@/store/news/slice';
import { useMediaQuery } from '@/hooks/useMediaQuery';

export interface PaginationProps {}

const Pagination = ({}: PaginationProps) => {
  const dispatch = useAppDispatch();

  const totalPages = useAppSelector(selectNewsTotalPages);
  const currentPage = useAppSelector(selectNewsCurrentPage);

  const firstPage = 1;
  const previousPage = currentPage - 1;
  const nextPage = currentPage + 1;
  const lastPage = totalPages;

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const isMobileSmall = useMediaQuery(`(max-width: 30rem)`); // 480px
  let maxVisiblePages = 3;
  if (isMobileSmall) {
    maxVisiblePages = 2;
  }

  const handleClick = (page: number): void => {
    dispatch(setCurrentPage(page));
  };

  return (
    totalPages > 1 && (
      <div className={s.pagination}>
        <ul className={clsx(s.list, s.arrows)}>
          <li className={s.item}>
            <ButtonPagination disabled={isFirstPage} onClick={() => handleClick(firstPage)}>
              <svg className={clsx(s.icon, s.iconBackArrow)}>
                <use href={`${svgIcon}#icon-arrows`} />
              </svg>
            </ButtonPagination>
          </li>
          <li className={s.item}>
            <ButtonPagination disabled={isFirstPage} onClick={() => handleClick(previousPage)}>
              <svg className={clsx(s.icon, s.iconBackArrow)}>
                <use href={`${svgIcon}#icon-arrow`} />
              </svg>
            </ButtonPagination>
          </li>
        </ul>

        <ul className={s.list}>
          {getPaginationRange(totalPages, currentPage, maxVisiblePages).map((page, i) => (
            <li key={typeof page === 'number' ? page : `dots-${i}`} className={s.item}>
              {page === '...' ? (
                <div className={s.more}>…</div>
              ) : (
                <ButtonPagination
                  active={page === currentPage}
                  onClick={() => {
                    if (typeof page === 'number') handleClick(page);
                  }}
                >
                  {page}
                </ButtonPagination>
              )}
            </li>
          ))}
        </ul>

        <ul className={clsx(s.list, s.arrows)}>
          <li className={s.item}>
            <ButtonPagination disabled={isLastPage} onClick={() => handleClick(nextPage)}>
              <svg className={clsx(s.icon, s.iconArrow)}>
                <use href={`${svgIcon}#icon-arrow`} />
              </svg>
            </ButtonPagination>
          </li>
          <li className={s.item}>
            <ButtonPagination disabled={isLastPage} onClick={() => handleClick(lastPage)}>
              <svg className={clsx(s.icon, s.iconArrow)}>
                <use href={`${svgIcon}#icon-arrows`} />
              </svg>
            </ButtonPagination>
          </li>
        </ul>
      </div>
    )
  );
};

export default Pagination;
