import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './reducers/userReducer';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import setFile from './reducers/setFile';
// Configure persisted store with localstorage property name
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['payload'],
};

const rootReducer = combineReducers({
  payload: userReducer,
  payload: setFile,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(logger, reduxThunk))
);
const dispatch = store.dispatch;
export { dispatch };
const persistor = persistStore(store);

export { store as default, persistor };
