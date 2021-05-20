import { LOGIN } from './types';

export const login = user => ({
  type: LOGIN,
  payload: user,
});

/*  return async dispatch => {
    try {
      dispatch({ type: LOGIN });
    } catch (err) {}
  }; */
