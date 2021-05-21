import { LOGIN } from './types';

const initialState = {
  currentUser: false,
  isLoading: true,
};

const authReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case LOGIN:
      return { currentUser: payload, isLoading: false };

    default:
      return state;
  }
};

export default authReducer;
