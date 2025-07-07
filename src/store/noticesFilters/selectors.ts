import { RootState } from '@/store/store';

export const selectNoticesSearchValue = (state: RootState) => state.noticesFilters.searchValue;

export const selectNoticesFiltersCatecoriesList = (state: RootState) => state.noticesFilters.categoriesList;
export const selectNoticesFiltersSexList = (state: RootState) => state.noticesFilters.sexList;
export const selectNoticesFiltersSpeciesList = (state: RootState) => state.noticesFilters.speciesList;
export const selectNoticesFiltersCatecoreyItem = (state: RootState) => state.noticesFilters.categoryItem;
export const selectNoticesFiltersSexItem = (state: RootState) => state.noticesFilters.sexItem;
export const selectNoticesFiltersSpeciesItem = (state: RootState) => state.noticesFilters.speciesItem;

export const selectNoticesCitiesList = (state: RootState) => state.noticesFilters.citiesList;
export const selectNoticesLocationId = (state: RootState) => state.noticesFilters.locationId;

export const selectNoticesByPopularity = (state: RootState) => state.noticesFilters.byPopularity;
export const selectNoticesByPrice = (state: RootState) => state.noticesFilters.byPrice;
