import { fetchNotices } from '@/store/notices/operations';
import { NoticesItem } from '@/store/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface NoticesState {
  currentPage: number;
  totalPages: number;
  items: NoticesItem[];
  loading: boolean;
  error: string | null;
}

const initialState: NoticesState = {
  currentPage: 1,
  totalPages: 0,
  items: [],
  loading: false,
  error: null,
};

const slice = createSlice({
  name: 'notices',
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchNotices.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNotices.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload.results;
        state.totalPages = action.payload.totalPages;
        state.currentPage = action.payload.page;
      })
      .addCase(fetchNotices.rejected, (state, action) => {
        state.loading = false;
        state.error = typeof action.payload === 'string' ? action.payload : 'Unknown error';
      });
  },
});

export const { setCurrentPage } = slice.actions;

export const noticesReducer = slice.reducer;
