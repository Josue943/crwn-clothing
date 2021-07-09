import { applyMiddleware, createStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import reduxLogger from 'redux-logger';

import reducer from './entities';

const middlewares = [];

//para que solo sirva en development
if (process.env.NODE_ENV === 'development') middlewares.push(reduxLogger);

export const store = createStore(reducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);
