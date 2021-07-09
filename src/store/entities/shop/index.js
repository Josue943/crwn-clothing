import { FETCHING_DATA, FETCH_COLLECTION, FETCH_COLLECTIONS } from './types';

const initialState = {
  collections: [],
  collection: {},
  isLoading: true,
};

const shopReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case FETCH_COLLECTIONS:
      return { ...state, collections: payload };

    case FETCH_COLLECTION:
      return { ...state, collection: payload };

    case FETCHING_DATA:
      return { ...state, isLoading: !state.isLoading };

    default:
      return state;
  }
};

export default shopReducer;
