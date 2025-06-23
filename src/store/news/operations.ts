import { goitApi } from '@/api/goitApi';
import { NewsState } from '@/store/news/slice';
import { FetchNewsParams, NewsResponse } from '@/store/types';
import { handleThunkError } from '@/store/utils';
import { createAsyncThunk } from '@reduxjs/toolkit';

// Get news
/*
 * GET @ /news
 */
export const fetchNews = createAsyncThunk<
  NewsResponse,
  FetchNewsParams,
  { state: { news: NewsState } } // типізація state для thunkAPI
>('fetchNews', async ({ searchValue = '' }, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    const currentPage = state.news.currentPage;
    const limit = 6;

    const queryParams = {
      keyword: searchValue,
      page: currentPage,
      limit: limit,
    };

    const response = await goitApi.get('/news', { params: queryParams });
    return response.data;
  } catch (error) {
    return handleThunkError(error, thunkAPI);
  }
});
