import { TOGGLE_CART, ADD_ITEM } from './types';

const initialState = {
  hidden: true,
  cartItems: {},
};

const cartReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case TOGGLE_CART:
      return { ...state, hidden: !state.hidden };

    case ADD_ITEM:
      return {
        ...state,
        cartItems: state.cartItems[payload.id]
          ? state.cartItems.map(i => (i.id === payload.id ? { ...i, quantity: i.quantity + 1 } : i))
          : { ...state.cartItems, [payload.id]: { ...payload, quantity: 1 } },
      };

    default:
      return state;
  }
};

export default cartReducer;
