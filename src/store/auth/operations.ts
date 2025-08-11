import { goitApi } from '@/api/goitApi';
import {
  GetFullUserInfoResponse,
  LoginCredentials,
  LoginResponse,
  RefreshUserResponse,
  RegisterCredentials,
  RegisterResponse,
  UserData,
  UserPet,
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

// REFRESH - to check if the user is logged in
/*
 * GET @ /users/current
 * headers: Authorization: Bearer token
 */
export const refreshUser = createAsyncThunk<RefreshUserResponse>('auth/refreshUser', async (_, thunkAPI) => {
  try {
    const response = await goitApi.get('/users/current');
    // After successful login, add the token to the HTTP header
    setAuthHeader(response.data.token);
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
      // After successful login, add the token to the HTTP header
      setAuthHeader(response.data.token);
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
export const editUser = createAsyncThunk<GetFullUserInfoResponse, UserData>(
  'auth/editUser',
  async (userData, thunkAPI) => {
    try {
      const response = await goitApi.patch('/users/current/edit', userData);
      // After successful login, add the token to the HTTP header
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return handleThunkError(error, thunkAPI);
    }
  }
);

// Change avatar
/*
 * PATCH @ /users/current/edit
 * headers: Authorization: Bearer token
 */
export const changeAvatar = createAsyncThunk<GetFullUserInfoResponse, UserData>(
  'auth/changeAvatar',
  async (userData, thunkAPI) => {
    try {
      const response = await goitApi.patch('/users/current/edit', userData);
      // After successful login, add the token to the HTTP header
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return handleThunkError(error, thunkAPI);
    }
  }
);

// ==========================================================================================================================
// ==========================================================================================================================

// Add a notice to user favorites
/*
 * POST @ /notices/favorites/add/{id}
 */
export const addNoticeToFavorites = createAsyncThunk<string[], string>(
  'auth/addNoticeToFavorites',
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
  'auth/removeNoticeFromFavorites',
  async (id, thunkAPI) => {
    try {
      const response = await goitApi.delete(`/notices/favorites/remove/${id}`);
      return response.data;
    } catch (error) {
      return handleThunkError(error, thunkAPI);
    }
  }
);

// ==========================================================================================================================
// ==========================================================================================================================

// GET CURRENT USER INFO
/*
 * GET @ /users/current
 * headers: Authorization: Bearer token
 */
export const getCurrentUserInfo = createAsyncThunk<RefreshUserResponse>(
  'auth/getCurrentUserInfo',
  async (_, thunkAPI) => {
    try {
      const response = await goitApi.get('/users/current');
      // After successful login, add the token to the HTTP header
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return handleThunkError(error, thunkAPI);
    }
  }
);

// ==========================================================================================================================

// User adds pet
/*
 * POST @ /users/current/pets/add
 * headers: Authorization: Bearer token
 */

export const addPetToUserPets = createAsyncThunk<GetFullUserInfoResponse, UserPet>(
  'auth/addPetToUserPets',
  async (petData, thunkAPI) => {
    try {
      const response = await goitApi.post('/users/current/pets/add', petData);
      // After successful login, add the token to the HTTP header
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return handleThunkError(error, thunkAPI);
    }
  }
);

// Remove a pet from user pets
/*
 * DELETE @ /users/current/pets/remove/{id}
 * headers: Authorization: Bearer token
 */

export const removePetFromUserPets = createAsyncThunk<GetFullUserInfoResponse, string>(
  'auth/removePetFromUserPets',
  async (id, thunkAPI) => {
    try {
      const response = await goitApi.delete(`/users/current/pets/remove/${id}`);
      // After successful login, add the token to the HTTP header
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return handleThunkError(error, thunkAPI);
    }
  }
);

// ==========================================================================================================================
