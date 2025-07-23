import { goitApi } from '@/api/goitApi';
import { handleThunkError } from '@/store/utils';
import { createAsyncThunk } from '@reduxjs/toolkit';

// Add a notice to user favorites
/*
 * POST @ /notices/favorites/add/{id}
 */
export const addNoticeToFavorites = createAsyncThunk<string[], string>(
  'noticesFavorites/addNotice',
  async (id, thunkAPI) => {
    try {
      const response = await goitApi.post(`/notices/favorites/add/${id}`);
      return response.data;
    } catch (error) {
      return handleThunkError(error, thunkAPI);
    }
  }
);

// Remove a notice from user favorites
/*
 * DELETE @ /notices/favorites/remove/{id}
 */
export const removeNoticeFromFavorites = createAsyncThunk<string[], string>(
  'noticesFavorites/removeNotice',
  async (id, thunkAPI) => {
    try {
      const response = await goitApi.delete(`/notices/favorites/remove/${id}`);
      return response.data;
    } catch (error) {
      return handleThunkError(error, thunkAPI);
    }
  }
);
