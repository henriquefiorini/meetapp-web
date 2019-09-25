import { createStore } from 'redux';
import { persistStore } from 'redux-persist';

import enhancer, { middlewares } from './createEnhancer';
import persistReducers from './persistReducers';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const persistedReducer = persistReducers(rootReducer);

const store = createStore(persistedReducer, enhancer);
const persistor = persistStore(store);

middlewares.saga.run(rootSaga);

export { store, persistor };
