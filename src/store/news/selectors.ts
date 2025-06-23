import { RootState } from '@/store/store';

export const selectNewsItems = (state: RootState) => state.news.items;
export const selectNewsLoading = (state: RootState) => state.news.loading;
export const selectNewsCurrentPage = (state: RootState) => state.news.currentPage;
export const selectNewsTotalPages = (state: RootState) => state.news.totalPages;
