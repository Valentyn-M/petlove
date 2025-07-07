import clsx from 'clsx';
import s from './NoticesFiltersSort.module.scss';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { resetByPopularity, resetByPrice, setByPopularity, setByPrice } from '@/store/noticesFilters/slice';
import { selectNoticesByPopularity, selectNoticesByPrice } from '@/store/noticesFilters/selectors';
import { svgIcon } from '@/components/App';

export interface NoticesFiltersSortProps {}

const NoticesFiltersSort = ({}: NoticesFiltersSortProps) => {
  const dispatch = useAppDispatch();
  const byPopularity = useAppSelector(selectNoticesByPopularity);
  const byPrice = useAppSelector(selectNoticesByPrice);

  const handlePopularityClick = (value: boolean) => {
    // If the batton is active
    if (byPopularity === value) {
      dispatch(resetByPopularity()); // toggle off
      // If the batton isn't active
    } else {
      dispatch(setByPopularity(value)); // activate selected
    }
  };

  const handlePriceClick = (value: boolean) => {
    if (byPrice === value) {
      dispatch(resetByPrice()); // toggle off
    } else {
      dispatch(setByPrice(value)); // activate selected
    }
  };

  return (
    <div className={s.noticesFiltersSort}>
      <button className={clsx(s.btn, byPopularity === true && s.active)} onClick={() => handlePopularityClick(true)}>
        <span>Popular</span>
        {byPopularity === true && (
          <svg className={s.btnIcon}>
            <use href={`${svgIcon}#icon-cross`} />
          </svg>
        )}
      </button>
      <button className={clsx(s.btn, byPopularity === false && s.active)} onClick={() => handlePopularityClick(false)}>
        <span>Unpopular</span>
        {byPopularity === false && (
          <svg className={s.btnIcon}>
            <use href={`${svgIcon}#icon-cross`} />
          </svg>
        )}
      </button>

      <button className={clsx(s.btn, byPrice === true && s.active)} onClick={() => handlePriceClick(true)}>
        <span>Expensive</span>
        {byPrice === true && (
          <svg className={s.btnIcon}>
            <use href={`${svgIcon}#icon-cross`} />
          </svg>
        )}
      </button>
      <button className={clsx(s.btn, byPrice === false && s.active)} onClick={() => handlePriceClick(false)}>
        <span>Cheap</span>
        {byPrice === false && (
          <svg className={s.btnIcon}>
            <use href={`${svgIcon}#icon-cross`} />
          </svg>
        )}
      </button>
    </div>
  );
};

export default NoticesFiltersSort;
