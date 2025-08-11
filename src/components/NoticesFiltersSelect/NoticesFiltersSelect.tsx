import s from './NoticesFiltersSelect.module.scss';
import SearchForm from '@/components/SearchForm/SearchForm';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { FormEvent, useRef, useState } from 'react';
import Select, { SelectInstance, SingleValue } from 'react-select';
import FormatOptionLabel from '@/components/FormatOptionLabel/FormatOptionLabel';
import clsx from 'clsx';
import { selectNoticesCitiesList, selectNoticesLocationId } from '@/store/noticesFilters/selectors';
import { resetLocationId, setLocationId } from '@/store/noticesFilters/slice';
import { fetchCities, fetchFilteredCities } from '@/store/noticesFilters/oprations';

export interface NoticesFiltersSelectProps {}

const NoticesFiltersSelect = ({}: NoticesFiltersSelectProps) => {
  const citiesList = useAppSelector(selectNoticesCitiesList);

  const options = citiesList.map((city) => ({
    value: city._id,
    label: `${city.stateEn}, ${city.cityEn}`,
  }));

  const locationId = useAppSelector(selectNoticesLocationId);
  const [fieldValue, setFieldValue] = useState(locationId);
  const dispatch = useAppDispatch();

  // Select from list
  const selectRef = useRef<SelectInstance<SelectOptionType>>(null);
  const handleSelectChange = (option: SingleValue<SelectOptionType>) => {
    const value = option?.value ?? '';
    setFieldValue(value);
    dispatch(setLocationId(value));
    setMenuOpen(false);
    const input = selectRef.current?.inputRef;
    if (input) input.blur();
  };

  const selectedOption = options.find((option) => option.value === fieldValue) || null;

  // Click on "cross" icon
  const handleReset = (): void => {
    setFieldValue('');
    dispatch(resetLocationId());
    dispatch(fetchCities());
  };

  // Click on "search" icon
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(setLocationId(fieldValue));
    dispatch(fetchCities());
  };

  const handleInputChange = (newValue: string, actionMeta: { action: string }): void => {
    if (actionMeta.action === 'input-change') {
      // Controlled form
      setFieldValue(newValue);
      if (newValue.length >= 3) {
        // Get new cities list form backend
        dispatch(fetchFilteredCities(newValue));
      } else {
        dispatch(fetchCities());
      }
    }
  };

  interface SelectOptionType {
    label: string;
    value: string;
  }

  const getFormatOptionLabel = (searchValue: string) =>
    function formatOptionLabel(data: SelectOptionType) {
      return <FormatOptionLabel label={data.label} searchValue={searchValue} />;
    };

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <SearchForm
      valueFromStore={locationId}
      fieldValue={fieldValue}
      setFieldValue={setFieldValue}
      onReset={handleReset}
      onSubmit={handleSubmit}
      className={clsx(s.search, menuOpen && s.focused)}
      light={true}
    >
      <Select<SelectOptionType>
        ref={selectRef}
        options={options}
        isSearchable
        isClearable
        placeholder="Location"
        classNamePrefix="react-select"
        className={s.field}
        value={selectedOption}
        onChange={handleSelectChange}
        // menuIsOpen={true} // for development
        menuIsOpen={menuOpen}
        // Highlighter
        inputValue={selectedOption ? undefined : fieldValue}
        onInputChange={handleInputChange}
        onFocus={() => setMenuOpen(true)}
        onBlur={() => setMenuOpen(false)}
        formatOptionLabel={getFormatOptionLabel(fieldValue)}
        styles={{
          // Main container
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

          // placeholder
          placeholder: (base) => ({
            ...base,
            color: 'var(--main-color)',
            margin: 0,
          }),

          // Icon-arrow
          indicatorsContainer: () => ({
            display: 'none',
          }),

          // Container for selected text
          valueContainer: (base) => ({
            ...base,
            padding: 0,
          }),

          // Selected text
          singleValue: (base) => ({
            ...base,
            margin: 0,
          }),

          // list wrapper
          menu: (base) => ({
            ...base,
            marginTop: '0.25rem', // 4px
            borderRadius: '0.9375rem', // 15px
            boxShadow: 'none',
            backgroundColor: 'var(--white-color)',
            padding: '0.875rem', // 14px
            paddingRight: '0',
            overflowY: 'auto',
            left: '0',
            marginBottom: 0,
          }),

          // list
          menuList: (base) => ({
            ...base,
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: 0,
            maxHeight: '13.5rem', // 216px

            // scrollbar
            '&::-webkit-scrollbar': {
              width: '1.375rem', // 22px = 7 + 8 + 7
            },
            '&::-webkit-scrollbar-track': {
              backgroundColor: 'transparent',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: 'rgba(38, 38, 38, 0.08)',
              borderRadius: '1.375rem', // 22px
              border: '0.4375rem solid transparent', // 7px
              backgroundClip: 'content-box',
            },
          }),

          // list item
          option: (base, state) => ({
            ...base,
            padding: '0.25rem 0', // 4px 0
            color: state.isSelected ? 'var(--brand-color)' : 'rgba(38, 38, 38, 0.6)',
            textTransform: 'capitalize',
            backgroundColor: 'transparent',
            minHeight: 'unset',
            transition: 'color 0.15s',

            // Highlighter
            mark: {
              transition: 'color 0.15s',
            },

            '&:hover': {
              backgroundColor: 'transparent',
              color: 'var(--brand-color) !important',
              cursor: 'pointer',
              // Highlighter
              mark: {
                color: 'var(--brand-color)',
              },
            },
            '&:focus': {
              backgroundColor: 'transparent',
              color: 'var(--brand-color)',
              // Highlighter
              mark: {
                color: 'var(--brand-color)',
              },
            },
            '&:first-child': {
              paddingTop: 0,
            },
            '&:last-child': {
              paddingBottom: 0,
            },
          }),
        }}
      />
    </SearchForm>
  );
};

export default NoticesFiltersSelect;
