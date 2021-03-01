import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contacts-slice';
import filterReducer from './filter/filter-reducers';
import userReducer from './user/user-slice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  REGISTER,
  PAUSE,
  PERSIST,
  PURGE,
} from 'redux-persist';

const authPersistConfig = {
  key: ['auth'],
  storage,
  whitelist: ['token'],
};
const contactsPersistConfig = {
  key: ['data'],
  storage,
  whitelist: ['contacts'],
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    contacts: persistReducer(contactsPersistConfig, contactsReducer),
    auth: persistReducer(authPersistConfig, userReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
