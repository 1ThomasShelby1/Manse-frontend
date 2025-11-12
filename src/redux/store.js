import { configureStore } from '@reduxjs/toolkit';
import { AllApi } from './AllApi.js';

export const store = configureStore({
  reducer: {
    [AllApi.reducerPath]: AllApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(AllApi.middleware),
});
