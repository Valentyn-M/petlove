import s from './NoticesFiltersSelect.module.scss';
import { City } from '@/store/types';
import SearchForm from '@/components/SearchForm/SearchForm';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { ChangeEvent, FormEvent, useState } from 'react';
import { selectCitiesSearchValue } from '@/store/cities/selectors';
import { resetSearchValue, setSearchValue } from '@/store/cities/slice';
import Select from 'react-select';

export interface NoticesFiltersSelectProps {
  cities: City[];
}

const NoticesFiltersSelect = ({ cities }: NoticesFiltersSelectProps) => {
  const options = cities.map((city) => ({
    value: city._id,
    label: `${city.cityEn}, ${city.stateEn}`,
  }));

  const valueFromStore = useAppSelector(selectCitiesSearchValue);
  const [fieldValue, setFieldValue] = useState(valueFromStore);
  const dispatch = useAppDispatch();

  const handleSelectChange = (option: { label: string; value: string } | null) => {
    const value = option?.value ?? '';
    setFieldValue(value);
  };

  const selectedOption = options.find((option) => option.value === fieldValue) || null;

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
      smallLight={true}
    >
      <Select
        options={options}
        isSearchable
        isClearable
        placeholder="Location"
        classNamePrefix="react-select"
        className={s.field}
        value={selectedOption}
        onChange={handleSelectChange}
        styles={{
          control: (base, state) => ({
            ...base,
            backgroundColor: 'transparent',
            border: 'none',
            borderRadius: 0,
            height: '100%',
            boxShadow: state.isFocused ? 'none' : base.boxShadow,
            '&:hover': {
              cursor: 'pointer',
              border: 'none',
              boxShadow: 'none',
            },
          }),
          placeholder: (base) => ({
            ...base,
            color: 'var(--main-color)',
            margin: 0,
          }),
          indicatorsContainer: () => ({
            display: 'none',
          }),
          valueContainer: (base) => ({
            ...base,
            padding: 0,
          }),
          singleValue: (base) => ({
            ...base,
            margin: 0,
          }),
        }}
      />
    </SearchForm>
  );
};

export default NoticesFiltersSelect;
