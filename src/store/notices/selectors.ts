import { RootState } from '@/store/store';

export const selectNoticesItems = (state: RootState) => state.notices.items;
export const selectNoticesLoading = (state: RootState) => state.notices.loading;
export const selectNoticesCurrentPage = (state: RootState) => state.notices.currentPage;
export const selectNoticesTotalPages = (state: RootState) => state.notices.totalPages;
