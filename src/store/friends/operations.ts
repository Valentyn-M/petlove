import { goitApi } from '@/api/goitApi';
import { FriendsResponse } from '@/store/types';
import { handleThunkError } from '@/store/utils';
import { createAsyncThunk } from '@reduxjs/toolkit';

// Get friends
/*
 * GET @ /friends
 */
export const fetchFriends = createAsyncThunk<FriendsResponse>('fetchFriends', async (_, thunkAPI) => {
  try {
    const response = await goitApi.get('/friends');
    return response.data;
  } catch (error) {
    return handleThunkError(error, thunkAPI);
  }
});
