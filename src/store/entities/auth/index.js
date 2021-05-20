import { LOGIN } from './types';

const initialState = {
  user: false,
  isLoading: true,
};

const authReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case LOGIN:
      return { user: payload, isLoading: false };

    default:
      return state;
  }
};

export default authReducer;
