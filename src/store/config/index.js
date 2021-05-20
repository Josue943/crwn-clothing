import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reduxLogger from 'redux-logger';

import entities from './entities';

export default configureStore({
  reducer: entities,
  middleware: [...getDefaultMiddleware(), reduxLogger],
});
