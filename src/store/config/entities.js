import { combineReducers } from 'redux';

import auth from '../entities/auth';
import cart from '../entities/cart';

export default combineReducers({
  auth,
  cart,
});
