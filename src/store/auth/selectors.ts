import { RootState } from '@/store/store';

export const selectIsLoading = (state: RootState) => state.auth.loading;
export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const selectIsToken = (state: RootState) => state.auth.token;

export const selectUserName = (state: RootState) => state.auth.user.name;
export const selectUserEmail = (state: RootState) => state.auth.user.email;
export const selectUserPhone = (state: RootState) => state.auth.user.phone;
export const selectUserAvatar = (state: RootState) => state.auth.user.avatar;

export const selectIsRefreshing = (state: RootState) => state.auth.isRefreshing;

export const selectAuthUserPetsNoticesViewed = (state: RootState) => state.auth.userPets.noticesViewed;
export const selectAuthUserPetsNoticesFavorites = (state: RootState) => state.auth.userPets.noticesFavorites;
export const selectAuthUserPetsPets = (state: RootState) => state.auth.userPets.pets;
