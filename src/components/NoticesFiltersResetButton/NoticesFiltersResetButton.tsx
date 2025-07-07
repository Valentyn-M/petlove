import s from './NoticesFiltersResetButton.module.scss';
import { useAppDispatch } from '@/store/hooks';
import { resetFilters } from '@/store/noticesFilters/slice';

export interface NoticesFiltersResetButtonProps {}

const NoticesFiltersResetButton = ({}: NoticesFiltersResetButtonProps) => {
  const dispatch = useAppDispatch();

  return (
    <button
      type="button"
      onClick={() => {
        dispatch(resetFilters());
      }}
      className={s.btn}
    >
      Reset filters
    </button>
  );
};

export default NoticesFiltersResetButton;
