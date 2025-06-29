import { FormEvent, useState } from 'react';
import s from './NoticesFilters.module.scss';
import SearchForm from '@/components/SearchForm/SearchForm';
import { useAppSelector } from '@/store/hooks';
import {
  selectNoticesFiltersCatecoreyItem,
  selectNoticesFiltersCatecoriesList,
  selectNoticesFiltersSexItem,
  selectNoticesFiltersSexList,
  selectNoticesFiltersSpeciesItem,
  selectNoticesFiltersSpeciesList,
} from '@/store/noticesFilters/selectors';

export interface NoticesFiltersProps {}

const NoticesFilters = ({}: NoticesFiltersProps) => {
  const categoriesList = useAppSelector(selectNoticesFiltersCatecoriesList);
  const sexList = useAppSelector(selectNoticesFiltersSexList);
  const speciesList = useAppSelector(selectNoticesFiltersSpeciesList);
  const categoryItem = useAppSelector(selectNoticesFiltersCatecoreyItem);
  const sexItem = useAppSelector(selectNoticesFiltersSexItem);
  const speciesItem = useAppSelector(selectNoticesFiltersSpeciesItem);

  const [fieldCategoryValue, setFieldCategoryValue] = useState<string>(categoryItem);
  const [fieldSexValue, setFieldSexValue] = useState<string>(sexItem);
  const [fieldSpeciesValue, setFieldSpeciesValue] = useState<string>(speciesItem);

  // const handleSubmitCategory = (e: FormEvent<HTMLFormElement>): void => {
  //   e.preventDefault();
  //   console.log(e.target.value);
  // };

  return (
    <div className={s.noticesFilters}>
      <SearchForm />
      {/* <form className={s.form} onSubmit={handleSubmitCategory}></form> */}
    </div>
  );
};

export default NoticesFilters;
