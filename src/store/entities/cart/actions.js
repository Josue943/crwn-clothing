import { ADD_ITEM, CLEAR_ITEM, DECREASE_ITEM, TOGGLE_CART } from './types';

export const toggleCart = () => ({ type: TOGGLE_CART });

export const addItem = item => ({
  type: ADD_ITEM,
  payload: item,
});

export const clearItem = item => ({
  type: CLEAR_ITEM,
  payload: item,
});

export const decreaseItem = item => ({
  type: DECREASE_ITEM,
  payload: item,
});
