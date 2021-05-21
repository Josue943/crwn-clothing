import { TOGGLE_CART, ADD_ITEM, CLEAR_ITEM, DECREASE_ITEM } from './types';
import { addItemToCart, decreaseItemFromCart } from './utils';

const initialState = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case TOGGLE_CART:
      return { ...state, hidden: !state.hidden };

    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, payload),
      };

    case CLEAR_ITEM:
      return { ...state, cartItems: state.cartItems.filter(cartItem => cartItem.id !== payload.id) };

    case DECREASE_ITEM:
      return { ...state, cartItems: decreaseItemFromCart(state.cartItems, payload) };

    default:
      return state;
  }
};

export default cartReducer;
