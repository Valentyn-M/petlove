// Get a notice by id

import { goitApi } from '@/api/goitApi';
import { NoticeDetailsResponse } from '@/store/types';
import { handleThunkError } from '@/store/utils';
import { createAsyncThunk } from '@reduxjs/toolkit';

/*
 * GET @ /notices/{id}
 */
export const fetchNotice = createAsyncThunk<NoticeDetailsResponse, string>(
  'noticeDetails/fetchNotice',
  async (id, thunkAPI) => {
    try {
      const response = await goitApi.get(`/notices/${id}`);
      return response.data;
    } catch (error) {
      return handleThunkError(error, thunkAPI);
    }
  }
);
