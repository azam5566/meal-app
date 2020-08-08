import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import myMiddleware from './middleware';
import reducer from './reducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  blacklist: ['navigation'],
};

export const store = createStore(
  persistReducer(
    persistConfig,
    combineReducers({
      root: reducer,
    })
  ),
  {},
  composeWithDevTools(applyMiddleware(myMiddleware))
);
export const persistor = persistStore(store);
