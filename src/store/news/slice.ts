import { createSlice } from '@reduxjs/toolkit';

export interface NewsItem {
  _id: string;
  imgUrl: string;
  title: string;
  text: string;
  date: string;
  url: string;
  id: string;
}

export interface News {
  currentPage: number;
  totalPages: number;
  items: NewsItem[];
  loading: boolean;
  error: boolean;
}

const initialState: News = {
  currentPage: 1,
  totalPages: 0,
  items: [],
  loading: false,
  error: false,
};

const slice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder;
  },
});

export const newsReducer = slice.reducer;
