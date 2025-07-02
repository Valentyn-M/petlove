import SearchForm from '@/components/SearchForm/SearchForm';
import s from './NewsSearch.module.scss';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectNewsSearchValue } from '@/store/news/selectors';
import { ChangeEvent, FormEvent, useState } from 'react';
import { resetSearchValue, setSearchValue } from '@/store/news/slice';

export interface NewsSearchProps {}

const NewsSearch = ({}: NewsSearchProps) => {
  const valueFromStore = useAppSelector(selectNewsSearchValue);
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
    >
      <input
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

export default NewsSearch;
