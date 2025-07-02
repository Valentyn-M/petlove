import { RootState } from '@/store/store';

export const selectCitiesItems = (state: RootState) => state.cities.items;
export const selectCitiesSearchValue = (state: RootState) => state.cities.searchValue;
