import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import auth from '../entities/auth';
import cart from '../entities/cart';
import directory from '../entities/directory';
import shop from '../entities/shop';

//definimos que datos queremos guardar
//storage es local storage
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  auth,
  cart,
  directory,
  shop,
});

export default persistReducer(persistConfig, rootReducer);
