import { goitApi } from '@/api/goitApi';
import { handleThunkError } from '@/store/utils';
import { createAsyncThunk } from '@reduxjs/toolkit';

// Get notice categories
/*
 * GET @ /notices/categories
 */
export const fetchCategories = createAsyncThunk<string[]>('noticesFilters/fetchCategories', async (_, thunkAPI) => {
  try {
    const response = await goitApi.get('/notices/categories');
    return response.data;
  } catch (error) {
    return handleThunkError(error, thunkAPI);
  }
});

// Get notice sex
/*
 * GET @ /notices/sex
 */
export const fetchSex = createAsyncThunk<string[]>('noticesFilters/fetchSex', async (_, thunkAPI) => {
  try {
    const response = await goitApi.get('/notices/sex');
    return response.data;
  } catch (error) {
    return handleThunkError(error, thunkAPI);
  }
});

// Get notice  species
/*
 * GET @ /notices/ species
 */
export const fetchSpecies = createAsyncThunk<string[]>('noticesFilters/fetchSpecies', async (_, thunkAPI) => {
  try {
    const response = await goitApi.get('/notices/species');
    return response.data;
  } catch (error) {
    return handleThunkError(error, thunkAPI);
  }
});
