import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import s from './SearchForm.module.scss';
import clsx from 'clsx';
import { svgIcon } from '@/components/App';
import { selectValue } from '@/store/search/selectors';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { resetValue, setValue } from '@/store/search/slice';

export interface SearchFormProps {}

const SearchForm = ({}: SearchFormProps) => {
  const searchValue = useAppSelector(selectValue);
  const [fieldValue, setFieldValue] = useState<string>(searchValue);
  const dispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFieldValue(e.target.value);
  };

  const handleClick = (): void => {
    setFieldValue('');
    dispatch(resetValue());
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(setValue(fieldValue));
  };

  useEffect(() => {
    setFieldValue(searchValue);
  }, [searchValue]);

  return (
    <form className={s.searchForm} onSubmit={handleSubmit}>
      <input
        className={s.field}
        type="text"
        name="search"
        aria-label="Search"
        placeholder="Search"
        value={fieldValue}
        onChange={handleChange}
      />
      <button type="button" onClick={handleClick} className={clsx(s.btn, s.reset, fieldValue && s.visible)}>
        <svg className={clsx(s.fieldIcon, s.iconCross)}>
          <use href={`${svgIcon}#icon-cross`} />
        </svg>
      </button>
      <button type="submit" className={clsx(s.btn)}>
        <svg className={clsx(s.fieldIcon, s.iconSearch)}>
          <use href={`${svgIcon}#icon-search`} />
        </svg>
      </button>
    </form>
  );
};

export default SearchForm;
