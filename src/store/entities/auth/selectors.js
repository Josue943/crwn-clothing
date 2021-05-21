import { createSelector } from 'reselect';
//con esto hacemos que se memorize el dato  asi evitamos hacer rerender cada vez que cambiamos el estado
const selectAuth = state => state.auth;

export const selectCurrentUser = createSelector([selectAuth], state => state.currentUser);
