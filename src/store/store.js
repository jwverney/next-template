// Import necessary modules from Redux and Redux Persist
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import throttle from 'lodash/throttle';

import appReducer from './slices/appSlice';
import financialsReducer from './slices/financialsSlice';

// Combine reducers
const rootReducer = combineReducers({
  app: appReducer,
  financials: financialsReducer,
});

// Configuration for Redux Persist
const persistConfig = {
  key: 'root',
  storage,
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store with the persisted reducer
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE', 'persist/PAUSE', 'persist/PERSIST', 'persist/PURGE', 'persist/REGISTER'],
      },
    }),
});

// Create a persistor
export const persistor = persistStore(store);

const customSaveState = (state) => {
  window.localStorage.setItem('backupState', JSON.stringify(state));
};

// Subscribe to store changes
store.subscribe(throttle(() => {
  const state = store.getState();
  customSaveState(state);
}, 1000));
