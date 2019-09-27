import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: process.env.REACT_APP_PERSIST_KEY,
  storage,
  whitelist: ['auth', 'user'],
};

export default reducers => {
  const persistedReducer = persistReducer(persistConfig, reducers);
  return persistedReducer;
};
