import {
  fetchCategories,
  fetchCities,
  fetchFilteredCities,
  fetchSex,
  fetchSpecies,
} from '@/store/noticesFilters/oprations';
import { City } from '@/store/types';
import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';

interface NoticesFiltersState {
  searchValue: string;

  categoriesList: string[];
  sexList: string[];
  speciesList: string[];

  categoryItem: string;
  sexItem: string;
  speciesItem: string;

  citiesList: City[];
  locationId: string;

  byPopularity: boolean | null;
  byPrice: boolean | null;

  loading: boolean;
  error: string | null;
}

const initialState: NoticesFiltersState = {
  searchValue: '',

  categoriesList: [],
  sexList: [],
  speciesList: [],

  categoryItem: '',
  sexItem: '',
  speciesItem: '',

  citiesList: [],
  locationId: '',

  byPopularity: null,
  byPrice: null,

  loading: false,
  error: null,
};

const slice = createSlice({
  name: 'noticesFilters',
  initialState,
  reducers: {
    // SEARCH
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    resetSearchValue: (state) => {
      state.searchValue = '';
    },

    // FILTERS
    setCategoriesItem: (state, action: PayloadAction<string>) => {
      state.categoryItem = action.payload;
    },
    setSexItem: (state, action: PayloadAction<string>) => {
      state.sexItem = action.payload;
    },
    setSpeciesItem: (state, action: PayloadAction<string>) => {
      state.speciesItem = action.payload;
    },

    // CITIES
    setLocationId: (state, action: PayloadAction<string>) => {
      state.locationId = action.payload;
    },
    resetLocationId: (state) => {
      state.locationId = '';
    },

    // RADIO BUTTONS
    setByPopularity: (state, action: PayloadAction<boolean>) => {
      state.byPopularity = action.payload;
    },
    resetByPopularity: (state) => {
      state.byPopularity = null;
    },
    setByPrice: (state, action: PayloadAction<boolean>) => {
      state.byPrice = action.payload;
    },
    resetByPrice: (state) => {
      state.byPrice = null;
    },

    // RESET FILTERS
    resetFilters: (state) => {
      state.searchValue = '';
      state.categoryItem = '';
      state.sexItem = '';
      state.speciesItem = '';
      state.locationId = '';
      state.byPrice = null;
      state.byPopularity = null;
    },
  },

  // ==========================================================================================================================

  extraReducers(builder) {
    builder
      // FILTERS
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.categoriesList = action.payload;
      })
      .addCase(fetchSex.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.sexList = action.payload;
      })
      .addCase(fetchSpecies.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.speciesList = action.payload;
      })

      // CITIES
      .addCase(fetchCities.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.citiesList = action.payload;
      })
      .addCase(fetchFilteredCities.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.citiesList = action.payload;
      })

      // ==========================================================================================================================
      // Status Pending
      .addMatcher(
        isAnyOf(
          fetchCategories.pending,
          fetchSex.pending,
          fetchSpecies.pending,
          fetchCities.pending,
          fetchFilteredCities.pending
        ),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )

      // Status Rejected
      .addMatcher(
        isAnyOf(
          fetchCategories.rejected,
          fetchSex.rejected,
          fetchSpecies.rejected,
          fetchCities.rejected,
          fetchFilteredCities.rejected
        ),
        (state, action) => {
          state.loading = false;
          state.error = typeof action.payload === 'string' ? action.payload : 'Unknown error';
        }
      );
  },
});

// ==========================================================================================================================

export const {
  setSearchValue,
  resetSearchValue,

  setCategoriesItem,
  setSexItem,
  setSpeciesItem,

  setLocationId,
  resetLocationId,

  setByPopularity,
  resetByPopularity,
  setByPrice,
  resetByPrice,

  resetFilters,
} = slice.actions;

export const noticesFiltersReducer = slice.reducer;
