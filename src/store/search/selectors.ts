import { RootState } from '@/store/store';

export const selectValue = (state: RootState) => state.search.value;
