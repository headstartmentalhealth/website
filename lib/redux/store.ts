import { configureStore } from '@reduxjs/toolkit';
import blogReducer from './slices/blogSlice';

export const store = configureStore({
  reducer: {
    blog: blogReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
