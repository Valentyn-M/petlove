import { RootState } from '@/store/store';

export const selectNoticesFiltersCatecoriesList = (state: RootState) => state.noticesFilters.categoriesList;
export const selectNoticesFiltersSexList = (state: RootState) => state.noticesFilters.sexList;
export const selectNoticesFiltersSpeciesList = (state: RootState) => state.noticesFilters.speciesList;
export const selectNoticesFiltersCatecoreyItem = (state: RootState) => state.noticesFilters.categoryItem;
export const selectNoticesFiltersSexItem = (state: RootState) => state.noticesFilters.sexItem;
export const selectNoticesFiltersSpeciesItem = (state: RootState) => state.noticesFilters.speciesItem;
export const selectNoticesSearchValue = (state: RootState) => state.noticesFilters.searchValue;
