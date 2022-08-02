import {createStore} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {persistStore, persistReducer} from 'redux-persist';
import rootReducer from './Reducers/rootReducer';

const config = {
  key: 'root',
  storage: AsyncStorage,
};

const reducer = persistReducer(config, rootReducer);

function configureStore() {
  let store = createStore(reducer);
  let persistor = persistStore(store);

  return { persistor, store }
}

export {configureStore};
