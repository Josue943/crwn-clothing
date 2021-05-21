import { createSelector } from 'reselect';
//con esto hacemos que se memorize el dato  asi evitamos hacer rerender cada vez que cambiamos el estado
const selectCart = state => state.cart;

export const selectCartItems = createSelector([selectCart], state => state.cartItems);

export const selectCartItemsCount = createSelector([selectCart], state => state.cartItems.reduce((sum, { quantity }) => sum + quantity, 0));

export const selectCartHidden = createSelector([selectCart], state => state.hidden);

export const selectCartTotal = createSelector([selectCart], state => state.cartItems.reduce((sum, { quantity, price }) => sum + quantity * price, 0));
