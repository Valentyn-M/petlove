import { fetchNews } from '@/store/news/operations';
import { NewsItem } from '@/store/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface NewsState {
  currentPage: number;
  totalPages: number;
  items: NewsItem[];
  loading: boolean;
  error: string | null;
}

const initialState: NewsState = {
  currentPage: 1,
  totalPages: 0,
  items: [],
  loading: false,
  error: null,
};

const slice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload.results;
        state.totalPages = action.payload.totalPages;
        state.currentPage = action.payload.page;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.loading = false;
        state.error = typeof action.payload === 'string' ? action.payload : 'Unknown error';
      });
  },
});

export const { setCurrentPage } = slice.actions;

export const newsReducer = slice.reducer;
