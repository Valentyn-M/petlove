import { authReducer } from '@/store/auth/slice';
import { friendsReducer } from '@/store/friends/slice';
import { newsReducer } from '@/store/news/slice';
import { noticesReducer } from '@/store/notices/slice';
import { noticesFiltersReducer } from '@/store/noticesFilters/slice';
import { configureStore } from '@reduxjs/toolkit';

// 1
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// 2
const persistConfig = {
  key: 'auth',
  version: 1,
  storage,
  whitelist: ['token'],
};

// 3
const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    news: newsReducer,
    friends: friendsReducer,
    noticesFilters: noticesFiltersReducer,
    notices: noticesReducer,
  },

  // 4
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// 5
export const persistor = persistStore(store);
