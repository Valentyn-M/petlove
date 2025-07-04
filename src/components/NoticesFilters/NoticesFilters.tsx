import { useEffect } from 'react';
import s from './NoticesFilters.module.scss';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  selectNoticesFiltersCatecoreyItem,
  selectNoticesFiltersCatecoriesList,
  selectNoticesFiltersSexItem,
  selectNoticesFiltersSexList,
  selectNoticesFiltersSpeciesItem,
  selectNoticesFiltersSpeciesList,
} from '@/store/noticesFilters/selectors';
import { SelectChangeEvent } from '@mui/material';
import { fetchCategories, fetchSex, fetchSpecies } from '@/store/noticesFilters/oprations';
import { setCategoriesItem, setSexItem, setSpeciesItem } from '@/store/noticesFilters/slice';
import NoticesFiltersField from '@/components/NoticesFiltersField/NoticesFiltersField';
import { selectCitiesItems } from '@/store/cities/selectors';
import { fetchCities } from '@/store/cities/operations';
import NoticesFiltersSearch from '@/components/NoticesFiltersSearch/NoticesFiltersSearch';
import NoticesFiltersSelect from '@/components/NoticesFiltersSelect/NoticesFiltersSelect';
import clsx from 'clsx';

export interface NoticesFiltersProps {}

const NoticesFilters = ({}: NoticesFiltersProps) => {
  const dispatch = useAppDispatch();

  // Fetch filters data, cities
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchSex());
    dispatch(fetchSpecies());

    dispatch(fetchCities());
  }, [dispatch]);

  // Get data from Redux
  const categoriesList = useAppSelector(selectNoticesFiltersCatecoriesList);
  const sexList = useAppSelector(selectNoticesFiltersSexList);
  const speciesList = useAppSelector(selectNoticesFiltersSpeciesList);

  const categoryItem = useAppSelector(selectNoticesFiltersCatecoreyItem);
  const sexItem = useAppSelector(selectNoticesFiltersSexItem);
  const speciesItem = useAppSelector(selectNoticesFiltersSpeciesItem);

  const citiesList = useAppSelector(selectCitiesItems);

  // Set field value
  const handleChangeCategories = (e: SelectChangeEvent): void => {
    dispatch(setCategoriesItem(e.target.value));
  };
  const handleChangeSex = (e: SelectChangeEvent): void => {
    dispatch(setSexItem(e.target.value));
  };
  const handleChangeSpecies = (e: SelectChangeEvent): void => {
    dispatch(setSpeciesItem(e.target.value));
  };

  return (
    <div className={s.noticesFilters}>
      <div className={s.top}>
        <NoticesFiltersSearch />

        <div className={s.fieldsWrap}>
          <NoticesFiltersField
            fieldPlaceholder={'Category'}
            fieldName={'category'}
            fieldValue={categoryItem}
            selectOptions={categoriesList}
            handleChange={handleChangeCategories}
            className={'categoriesField'}
            classNameGeneral={'field'}
          />
          <NoticesFiltersField
            fieldPlaceholder={'By gender'}
            fieldName={'sex'}
            fieldValue={sexItem}
            selectOptions={sexList}
            handleChange={handleChangeSex}
            className={'genderField'}
            classNameGeneral={'field'}
          />
        </div>

        <NoticesFiltersField
          fieldPlaceholder={'By type'}
          fieldName={'species'}
          fieldValue={speciesItem}
          selectOptions={speciesList}
          handleChange={handleChangeSpecies}
          className={'speciesField'}
          classNameGeneral={'field'}
        />

        <NoticesFiltersSelect cities={citiesList} />
      </div>

      <div className={s.devider}></div>

      <div className={s.bottom}>Radio buttons</div>
    </div>
  );
};

export default NoticesFilters;
