import { configureStore } from '@reduxjs/toolkit';
import { AllApi } from './AllApi.js';
import { eventsApi } from './Events.js';

export const store = configureStore({
  reducer: {
    [AllApi.reducerPath]: AllApi.reducer,
    [eventsApi.reducerPath]: eventsApi.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(AllApi.middleware)
      .concat(eventsApi.middleware),

});
