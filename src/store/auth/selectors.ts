import { RootState } from '@/store/store';

export const selectIsLoading = (state: RootState) => state.auth.loading;
export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const selectIsToken = (state: RootState) => state.auth.token;
export const selectUserName = (state: RootState) => state.auth.user.name;
export const selectUserEmail = (state: RootState) => state.auth.user.email;
export const selectIsRefreshing = (state: RootState) => state.auth.isRefreshing;
