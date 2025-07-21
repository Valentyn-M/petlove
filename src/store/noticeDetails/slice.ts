import { fetchNotice } from '@/store/noticeDetails/operations';
import { NoticeDetailsResponse } from '@/store/types';
import { createSlice } from '@reduxjs/toolkit';

interface NoticeDetailsState {
  item: NoticeDetailsResponse | null;
  loading: boolean;
  error: string | null;
}

const initialState: NoticeDetailsState = {
  item: null,
  loading: false,
  error: null,
};

const slice = createSlice({
  name: 'noticeDetails',
  initialState,
  reducers: {
    resetNoticeDetails(state) {
      state.item = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchNotice.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNotice.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.item = action.payload;
      })
      .addCase(fetchNotice.rejected, (state, action) => {
        state.loading = false;
        state.error = typeof action.payload === 'string' ? action.payload : 'Unknown error';
      });
  },
});

export const { resetNoticeDetails } = slice.actions;

export const noticeDetailsReducer = slice.reducer;
