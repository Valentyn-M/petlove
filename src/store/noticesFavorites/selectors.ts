import { RootState } from '@/store/store';

export const selectNoticesFavoritesItems = (state: RootState) => state.noticesFavorites.items;
export const selectNoticesFavoritesLoading = (state: RootState) => state.noticesFavorites.loading;
export const selectNoticesFavoritesError = (state: RootState) => state.noticesFavorites.error;
