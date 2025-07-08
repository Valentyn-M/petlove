import { goitApi } from '@/api/goitApi';
import { NoticesState } from '@/store/notices/slice';
import { FetchNoticesParams, NoticesResponse } from '@/store/types';
import { handleThunkError } from '@/store/utils';
import { createAsyncThunk } from '@reduxjs/toolkit';

// Get notices
/*
 * GET @ /notices
 */
export const fetchNotices = createAsyncThunk<NoticesResponse, FetchNoticesParams, { state: { notices: NoticesState } }>(
  'notices/fetchNotices',
  async (params, thunkAPI) => {
    try {
      const state = thunkAPI.getState();

      // Обоі'язкові параметри
      const currentPage = state.notices.currentPage;
      const limit = 6;

      // Розпаковуємо вхідні параметри (назви згідно типізації FetchNoticesParams)
      const { keyword, category, sex, species, locationId, byPopularity, byPrice } = params;

      // Створюємо об'єкт queryParams лише з обов'язковими параметрами
      const queryParams: Partial<FetchNoticesParams> = {
        page: currentPage,
        limit: limit,
      };

      // Додаємо в queryParams параметри при певних умовах
      if (keyword) queryParams.keyword = keyword;
      if (category) queryParams.category = category;
      if (sex) queryParams.sex = sex;
      if (species) queryParams.species = species;
      if (locationId) queryParams.locationId = locationId;
      if (typeof byPopularity === 'boolean') queryParams.byPopularity = byPopularity;
      if (typeof byPrice === 'boolean') queryParams.byPrice = byPrice;

      const response = await goitApi.get('/notices', { params: queryParams });
      return response.data;
    } catch (error) {
      return handleThunkError(error, thunkAPI);
    }
  }
);
