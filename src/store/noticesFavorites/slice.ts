import { addNoticeToFavorites, removeNoticeFromFavorites } from '@/store/noticesFavorites/operations';
import { createSlice, isAnyOf } from '@reduxjs/toolkit';

interface NotecesFavorites {
  items: string[];
  loading: boolean;
  error: string | null;
}

const initialState: NotecesFavorites = {
  items: [],
  loading: false,
  error: null,
};

const slice = createSlice({
  name: 'noticesFavorites',
  initialState,
  reducers: {
    setFavorites: (state, action) => {
      state.items = action.payload;
      localStorage.setItem('favorites', JSON.stringify(state.items));
    },
  },
  extraReducers(builder) {
    builder
      // Add notice
      .addCase(addNoticeToFavorites.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
        state.error = null;
      })

      // Remove notice
      .addCase(removeNoticeFromFavorites.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
        state.error = null;
      })

      // ==========================================================================================================================
      // Status Pending
      .addMatcher(isAnyOf(addNoticeToFavorites.pending, removeNoticeFromFavorites.pending), (state) => {
        state.loading = true;
        state.error = null;
      })

      // Status Rejected
      .addMatcher(isAnyOf(addNoticeToFavorites.rejected, removeNoticeFromFavorites.rejected), (state, action) => {
        state.loading = false;
        state.error = typeof action.payload === 'string' ? action.payload : 'Unknown error';
      });
  },
});

export const { setFavorites } = slice.actions;

export const noticesFavoritesReducer = slice.reducer;
