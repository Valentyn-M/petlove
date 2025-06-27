import { RootState } from '@/store/store';

export const selectFriendsItems = (state: RootState) => state.friends.items;
export const selectFriendsLoading = (state: RootState) => state.friends.loading;
