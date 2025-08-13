import {
  addNoticeToFavorites,
  addPetToUserPets,
  editUser,
  getCurrentUserInfo,
  getFullUserInfo,
  loginUser,
  logoutUser,
  refreshUser,
  registerUser,
  removeNoticeFromFavorites,
  removePetFromUserPets,
} from '@/store/auth/operations';
import { GetFullUserInfoResponse, Notice, Pet, User } from '@/store/types';
import { createSlice, isAnyOf } from '@reduxjs/toolkit';

// interface User is moved to the type file "types.ts"

export interface UserPets {
  noticesViewed: Notice[];
  noticesFavorites: Notice[];
  pets: Pet[];
}

interface AuthState {
  user: User;
  token: string | null;
  isLoggedIn: boolean;
  loading: boolean;
  isRefreshing: boolean;
  loadingAvatar: boolean;
  loadingCurrentUser: boolean;
  loadingFullUser: boolean;
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
  loadingAvatar: false,
  loadingCurrentUser: false,
  loadingFullUser: false,
  isRefreshing: false,
  error: null,
  userPets: {
    noticesViewed: [],
    noticesFavorites: [],
    pets: [],
  },
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setDefaultAvatar: (state) => {
      state.user.avatar = null;
    },
  },
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
        state.error = null;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        setUserDataFromPayload(state, action.payload);
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = typeof action.payload === 'string' ? action.payload : 'Unknown error';
      })
      // ==========================================================================================================================
      // GET CURRENT USER INFO
      .addCase(getCurrentUserInfo.pending, (state) => {
        state.loadingCurrentUser = true;
        state.error = null;
      })
      .addCase(getCurrentUserInfo.fulfilled, (state, action) => {
        setUserDataFromPayload(state, action.payload);
        state.loadingCurrentUser = false;
      })
      .addCase(getCurrentUserInfo.rejected, (state, action) => {
        state.loadingCurrentUser = false;
        state.error = typeof action.payload === 'string' ? action.payload : 'Unknown error';
      })
      // ==========================================================================================================================
      // GET FULL USER INFO
      .addCase(getFullUserInfo.pending, (state) => {
        state.loadingFullUser = true;
        state.error = null;
      })
      .addCase(getFullUserInfo.fulfilled, (state, action) => {
        setUserDataFromPayload(state, action.payload);
        state.loadingFullUser = false;
        state.error = null;
      })
      .addCase(getFullUserInfo.rejected, (state, action) => {
        state.loadingFullUser = false;
        state.error = typeof action.payload === 'string' ? action.payload : 'Unknown error';
      })
      // ==========================================================================================================================
      // EDIT USER
      .addCase(editUser.fulfilled, (state, action) => {
        setUserDataFromPayload(state, action.payload);
        state.loading = false;
        state.error = null;
      })
      // CHANGE AVATAR
      // .addCase(changeAvatar.pending, (state) => {
      //   state.loadingAvatar = true;
      //   state.error = null;
      // })
      // .addCase(changeAvatar.fulfilled, (state, action) => {
      //   setUserDataFromPayload(state, action.payload);
      //   state.loadingAvatar = false;
      //   state.error = null;
      // })
      // .addCase(changeAvatar.rejected, (state, action) => {
      //   state.loadingAvatar = false;
      //   state.error = typeof action.payload === 'string' ? action.payload : 'Unknown error';
      // })
      // ==========================================================================================================================
      // ADD NOTICE to Favorites
      .addCase(addNoticeToFavorites.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })

      // REMOVE NOTICE from Favorites
      .addCase(removeNoticeFromFavorites.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      // ==========================================================================================================================
      // ADD PET to user pets
      .addCase(addPetToUserPets.fulfilled, (state, action) => {
        setUserDataFromPayload(state, action.payload);
        state.loading = false;
        state.error = null;
      })
      // REMOVE PET from user pets
      .addCase(removePetFromUserPets.fulfilled, (state, action) => {
        setUserDataFromPayload(state, action.payload);
        state.loading = false;
        state.error = null;
      })
      // ==========================================================================================================================
      // ==========================================================================================================================
      // Status Pending
      .addMatcher(
        isAnyOf(
          registerUser.pending,
          loginUser.pending,
          logoutUser.pending,
          editUser.pending,
          addNoticeToFavorites.pending,
          removeNoticeFromFavorites.pending,
          addPetToUserPets.pending,
          removePetFromUserPets.pending
        ),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )

      // Status Rejected
      .addMatcher(
        isAnyOf(
          registerUser.rejected,
          loginUser.rejected,
          logoutUser.rejected,
          editUser.rejected,
          addNoticeToFavorites.rejected,
          removeNoticeFromFavorites.rejected,
          addPetToUserPets.rejected,
          removePetFromUserPets.rejected
        ),
        (state, action) => {
          state.loading = false;
          state.error = typeof action.payload === 'string' ? action.payload : 'Unknown error';
        }
      );
  },
});

export const { setDefaultAvatar } = slice.actions;

export const authReducer = slice.reducer;

// ==========================================
// Helpers
// ==========================================

// "GetFullUserInfoResponse" has all possible fields
function setUserDataFromPayload(state: AuthState, payload: Partial<GetFullUserInfoResponse>) {
  if ('name' in payload) state.user.name = payload.name ?? null;
  if ('email' in payload) state.user.email = payload.email ?? null;

  if ('token' in payload && payload.token) {
    state.token = payload.token;
  }

  // Check if there are additional fields in payload (avatar, phone, pets, etc.)

  if ('avatar' in payload) {
    state.user.avatar = payload.avatar ?? null;
  }
  if ('phone' in payload) {
    state.user.phone = payload.phone ?? null;
  }

  if ('noticesFavorites' in payload) {
    state.userPets.noticesFavorites = payload.noticesFavorites ?? [];
  }

  if ('noticesViewed' in payload) {
    state.userPets.noticesViewed = payload.noticesViewed ?? [];
  }

  if ('pets' in payload) {
    state.userPets.pets = payload.pets ?? [];
  }

  state.isLoggedIn = true;
}
