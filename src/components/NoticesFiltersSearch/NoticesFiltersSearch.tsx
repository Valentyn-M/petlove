import SearchForm from '@/components/SearchForm/SearchForm';
import s from './NoticesFiltersSearch.module.scss';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { ChangeEvent, FormEvent, useState } from 'react';
import { selectNoticesSearchValue } from '@/store/noticesFilters/selectors';
import { resetSearchValue, setSearchValue } from '@/store/noticesFilters/slice';

export interface NoticesFiltersSearchProps {}

const NoticesFiltersSearch = ({}: NoticesFiltersSearchProps) => {
  const valueFromStore = useAppSelector(selectNoticesSearchValue);
  const [fieldValue, setFieldValue] = useState(valueFromStore);
  const dispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFieldValue(e.target.value);
  };

  const handleReset = (): void => {
    setFieldValue('');
    dispatch(resetSearchValue());
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(setSearchValue(fieldValue));
  };

  return (
    <SearchForm
      valueFromStore={valueFromStore}
      fieldValue={fieldValue}
      setFieldValue={setFieldValue}
      onReset={handleReset}
      onSubmit={handleSubmit}
      className={s.search}
      light={true}
    >
      <input
        className={s.field}
        type="text"
        name="search"
        aria-label="Search"
        placeholder="Search"
        value={fieldValue}
        onChange={handleChange}
      />
    </SearchForm>
  );
};

export default NoticesFiltersSearch;
