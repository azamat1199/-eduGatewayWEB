import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './reducers/userReducer';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
<<<<<<< HEAD
import reduxThunk from 'redux-thunk';
import setFile from './reducers/setFile';
=======
import reduxThunk from 'redux-thunk'
import dataSaveReducer from './reducers/fileSaveReducer';

>>>>>>> 3b24bf54270a1c25cbdee0ae12e2f2a6ae0bc890
// Configure persisted store with localstorage property name
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['payload'],
};

const rootReducer = combineReducers({
  payload: userReducer,
<<<<<<< HEAD
  payload: setFile,
=======
  dataSave:dataSaveReducer,
>>>>>>> 3b24bf54270a1c25cbdee0ae12e2f2a6ae0bc890
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
