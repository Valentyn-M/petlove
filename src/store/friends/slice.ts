import { fetchFriends } from '@/store/friends/operations';
import { FriendsItem } from '@/store/types';
import { createSlice } from '@reduxjs/toolkit';

export interface FriendsState {
  items: FriendsItem[];
  loading: boolean;
  error: boolean;
}

const initialState: FriendsState = {
  items: [],
  loading: false,
  error: false,
};

const slice = createSlice({
  name: 'friends',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFriends.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchFriends.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.items = action.payload;
      })
      .addCase(fetchFriends.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const friendsReducer = slice.reducer;
