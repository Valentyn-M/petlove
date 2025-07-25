import { goitApi } from '@/api/goitApi';
import {
  EditUserCredentials,
  GetFullUserInfoResponse,
  LoginCredentials,
  LoginResponse,
  RefreshUserResponse,
  RegisterCredentials,
  RegisterResponse,
} from '@/store/types';
import { clearAuthHeader, handleThunkError, setAuthHeader } from '@/store/utils';
import { createAsyncThunk } from '@reduxjs/toolkit';

// REGISTER
/*
 * POST @ /users/signup
 * body: { name, email, password }
 */
export const registerUser = createAsyncThunk<RegisterResponse, RegisterCredentials, { rejectValue: string }>(
  'auth/registerUser',
  async (credentials, thunkAPI) => {
    try {
      const response = await goitApi.post('/users/signup', credentials);
      // After successful registration, add the token to the HTTP header
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return handleThunkError(error, thunkAPI);
    }
  }
);

// ==========================================================================================================================

// LOGIN
/*
 * POST @ /users/signin
 * body: { email, password }
 */
export const loginUser = createAsyncThunk<LoginResponse, LoginCredentials, { rejectValue: string }>(
  'auth/loginUser',
  async (credentials, thunkAPI) => {
    try {
      const response = await goitApi.post('/users/signin', credentials);
      // After successful login, add the token to the HTTP header
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return handleThunkError(error, thunkAPI);
    }
  }
);

// ==========================================================================================================================

// LOGOUT
/*
 * POST @ /users/signout
 * headers: Authorization: Bearer token
 */
export const logoutUser = createAsyncThunk('auth/logoutUser', async (_, thunkAPI) => {
  try {
    await goitApi.post('/users/signout');
    // After a successful logout, remove the token from the HTTP header
    clearAuthHeader();
  } catch (error) {
    return handleThunkError(error, thunkAPI);
  }
});

// ==========================================================================================================================

// REFRESH (to check if the user is logged in)
/*
 * GET @ /users/current
 * headers: Authorization: Bearer token
 */
export const refreshUser = createAsyncThunk<RefreshUserResponse>('auth/refreshUser', async (_, thunkAPI) => {
  try {
    const response = await goitApi.get('/users/current');
    return response.data;
  } catch (error) {
    return handleThunkError(error, thunkAPI);
  }
});

// ==========================================================================================================================

// GET FULL USER INFO
/*
 * GET @ /users/current/full
 * headers: Authorization: Bearer token
 */
export const getFullUserInfo = createAsyncThunk<GetFullUserInfoResponse>(
  'auth/getFullUserInfo',
  async (_, thunkAPI) => {
    try {
      const response = await goitApi.get('/users/current/full');
      return response.data;
    } catch (error) {
      return handleThunkError(error, thunkAPI);
    }
  }
);

// ==========================================================================================================================

// User edit
/*
 * PATCH @ /users/current/edit
 * headers: Authorization: Bearer token
 */
export const editUser = createAsyncThunk<GetFullUserInfoResponse, EditUserCredentials>(
  'auth/editUser',
  async (credentials, thunkAPI) => {
    try {
      const response = await goitApi.patch('/users/current/edit', credentials);
      // After successful login, add the token to the HTTP header
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return handleThunkError(error, thunkAPI);
    }
  }
);
