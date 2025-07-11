import { getFullUserInfo, loginUser, logoutUser, refreshUser, registerUser } from '@/store/auth/operations';
import { GetFullUserInfoResponse, Notice, Pets, User } from '@/store/types';
import { createSlice, isAnyOf } from '@reduxjs/toolkit';

// interface User is moved to the type file "types.ts"

export interface UserPets {
  noticesViewed: Notice[] | null;
  noticesFavorites: Notice[] | null;
  pets: Pets[] | null;
}

interface AuthState {
  user: User;
  token: string | null;
  isLoggedIn: boolean;
  loading: boolean;
  isRefreshing: boolean;
  error: string | null;
  userPets: UserPets;
}

const initialState: AuthState = {
  user: {
    name: null,
    email: null,
    avatar: null,
    phone: null,
  },
  token: null,
  isLoggedIn: false,
  loading: false,
  isRefreshing: false,
  error: null,
  userPets: {
    noticesViewed: null,
    noticesFavorites: null,
    pets: null,
  },
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // REGISTER
      .addCase(registerUser.fulfilled, (state, action) => {
        setUserDataFromPayload(state, action.payload);
        state.loading = false;
        state.error = null;
      })
      // ==========================================================================================================================
      // LOGIN
      .addCase(loginUser.fulfilled, (state, action) => {
        setUserDataFromPayload(state, action.payload);
        state.loading = false;
        state.error = null;
      })
      // ==========================================================================================================================
      // LOGOUT
      .addCase(logoutUser.fulfilled, () => initialState)
      // ==========================================================================================================================
      // REFRESH
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        setUserDataFromPayload(state, action.payload);
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      })
      // ==========================================================================================================================
      // GET FULL USER INFO
      .addCase(getFullUserInfo.fulfilled, (state, action) => {
        setUserDataFromPayload(state, action.payload);
        state.isRefreshing = false;
      })
      // ==========================================================================================================================
      // ==========================================================================================================================
      // Status Pending
      .addMatcher(
        isAnyOf(registerUser.pending, loginUser.pending, logoutUser.pending, getFullUserInfo.pending),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )

      // Status Rejected
      .addMatcher(
        isAnyOf(registerUser.rejected, loginUser.rejected, logoutUser.rejected, getFullUserInfo.rejected),
        (state, action) => {
          state.loading = false;
          state.error = typeof action.payload === 'string' ? action.payload : 'Unknown error';
        }
      );
  },
});

export const authReducer = slice.reducer;

// ==========================================
// Helpers
// ==========================================

// "GetFullUserInfoResponse" has all possible fields
function setUserDataFromPayload(state: AuthState, payload: Partial<GetFullUserInfoResponse>) {
  state.user.name = payload.name ?? null;
  state.user.email = payload.email ?? null;
  state.token = payload.token ?? null;

  // Check if there are additional fields in payload (avatar, phone, pets, etc.)

  if ('avatar' in payload) {
    state.user.avatar = payload.avatar ?? null;
  }
  if ('phone' in payload) {
    state.user.phone = payload.phone ?? null;
  }

  if ('noticesFavorites' in payload) {
    state.userPets.noticesFavorites = payload.noticesFavorites ?? null;
  }

  if ('noticesViewed' in payload) {
    state.userPets.noticesViewed = payload.noticesViewed ?? null;
  }

  if ('pets' in payload) {
    state.userPets.pets = payload.pets ?? null;
  }

  state.isLoggedIn = true;
}
