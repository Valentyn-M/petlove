import { fetchCities, fetchFilteredCities } from '@/store/cities/operations';
import { City } from '@/store/types';
import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';

interface CitiesState {
  items: City[];
  loading: boolean;
  error: string | null;
  searchValue: string;
}

const initialState: CitiesState = {
  items: [],
  loading: false,
  error: null,
  searchValue: '',
};

const slice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    resetSearchValue: (state) => {
      state.searchValue = '';
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCities.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchFilteredCities.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })

      // ==========================================================================================================================
      // Status Pending
      .addMatcher(isAnyOf(fetchCities.pending, fetchFilteredCities.pending), (state) => {
        state.loading = true;
        state.error = null;
      })

      // Status Rejected
      .addMatcher(isAnyOf(fetchCities.rejected, fetchFilteredCities.rejected), (state, action) => {
        state.loading = false;
        state.error = typeof action.payload === 'string' ? action.payload : 'Unknown error';
      });
  },
});

export const { setSearchValue, resetSearchValue } = slice.actions;

export const citiesReducer = slice.reducer;
