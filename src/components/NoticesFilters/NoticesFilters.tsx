import s from './NoticesFilters.module.scss';
import NoticesFiltersSearch from '@/components/NoticesFiltersSearch/NoticesFiltersSearch';
import NoticesFiltersFieldsGroup from '@/components/NoticesFiltersFieldsGroup/NoticesFiltersFieldsGroup';
import NoticesFiltersSelect from '@/components/NoticesFiltersSelect/NoticesFiltersSelect';
import NoticesFiltersSort from '@/components/NoticesFiltersSort/NoticesFiltersSort';

export interface NoticesFiltersProps {}

const NoticesFilters = ({}: NoticesFiltersProps) => {
  return (
    <div className={s.noticesFilters}>
      <div className={s.top}>
        <NoticesFiltersSearch />

        <NoticesFiltersFieldsGroup />

        <NoticesFiltersSelect />
      </div>

      <div className={s.devider}></div>

      <div className={s.bottom}>
        <NoticesFiltersSort />
      </div>
    </div>
  );
};

export default NoticesFilters;
