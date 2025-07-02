import { goitApi } from '@/api/goitApi';
import { CitiesResponse } from '@/store/types';
import { handleThunkError } from '@/store/utils';
import { createAsyncThunk } from '@reduxjs/toolkit';

// Get all cities where are pets that descripted on notes
/*
 * GET @ /cities/locations
 */
export const fetchCities = createAsyncThunk<CitiesResponse>('cities/fetchCities', async (_, thunkAPI) => {
  try {
    const response = await goitApi.get('/cities/locations');
    return response.data;
  } catch (error) {
    return handleThunkError(error, thunkAPI);
  }
});

// Get Ukrainian cities (filtered)
/*
 * GET @ /cities
 */
export const fetchFilteredCities = createAsyncThunk<CitiesResponse, string>(
  'cities/fetchFilteredCities',
  async (searchQuery, thunkAPI) => {
    try {
      const response = await goitApi.get(`/cities/?keyword=${searchQuery}`);
      return response.data;
    } catch (error) {
      return handleThunkError(error, thunkAPI);
    }
  }
);
