import { RootState } from '@/store/store';

export const selectNoticesDetailsItem = (state: RootState) => state.noticeDetails.item;
export const selectNoticesDetailsLoading = (state: RootState) => state.noticeDetails.loading;
export const selectNoticesDetailsError = (state: RootState) => state.noticeDetails.error;
