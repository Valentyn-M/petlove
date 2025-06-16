import { goitApi } from '@/api/goitApi';
import axios from 'axios';

// Utility to add JWT
export const setAuthHeader = (token: string): void => {
  goitApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
export const clearAuthHeader = (): void => {
  goitApi.defaults.headers.common.Authorization = '';
};

// Utility to handle unknown or standard errors
export const handleThunkError = (error: unknown, thunkAPI: { rejectWithValue: (value: string) => unknown }) => {
  if (axios.isAxiosError(error) && error.response?.data) {
    const message =
      typeof error.response.data === 'string' ? error.response.data : error.response.data.message || 'Unknown error';
    return thunkAPI.rejectWithValue(message);
  }

  if (error instanceof Error) {
    return thunkAPI.rejectWithValue(error.message);
  }

  return thunkAPI.rejectWithValue('Unknown error');
};
