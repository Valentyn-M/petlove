import { fetchCategories, fetchSex, fetchSpecies } from '@/store/noticesFilters/oprations';
import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';

export interface NoticesFiltersState {
  categoriesList: string[];
  sexList: string[];
  speciesList: string[];
  loading: boolean;
  error: string | null;
  categoryItem: string;
  sexItem: string;
  speciesItem: string;
}

const initialState: NoticesFiltersState = {
  categoriesList: [],
  sexList: [],
  speciesList: [],
  loading: false,
  error: null,
  categoryItem: '',
  sexItem: '',
  speciesItem: '',
};

const slice = createSlice({
  name: 'noticesFilters',
  initialState,
  reducers: {
    setCategoriesItem: (state, action: PayloadAction<string>) => {
      state.categoryItem = action.payload;
    },
    setSexItem: (state, action: PayloadAction<string>) => {
      state.sexItem = action.payload;
    },
    setSpeciesItem: (state, action: PayloadAction<string>) => {
      state.speciesItem = action.payload;
    },
    resetFiltersItems: (state) => {
      state.categoryItem = '';
      state.sexItem = '';
      state.speciesItem = '';
    },
  },
  extraReducers(builder) {
    builder
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

      // ==========================================================================================================================
      // Status Pending
      .addMatcher(isAnyOf(fetchCategories.pending, fetchSex.pending, fetchSpecies.pending), (state) => {
        state.loading = true;
        state.error = null;
      })

      // Status Rejected
      .addMatcher(isAnyOf(fetchCategories.rejected, fetchSex.rejected, fetchSpecies.rejected), (state, action) => {
        state.loading = false;
        state.error = typeof action.payload === 'string' ? action.payload : 'Unknown error';
      });
  },
});

export const noticesFiltersReducer = slice.reducer;
