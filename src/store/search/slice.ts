import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Search {
  value: string;
}

const initialState: Search = {
  value: '',
};

const slice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    resetValue: () => initialState,
  },
});

export const { setValue, resetValue } = slice.actions;

export const searchReducer = slice.reducer;
