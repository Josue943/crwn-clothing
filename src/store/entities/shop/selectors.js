import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector([selectShop], state => state.collections);

export const selectCollection = createSelector([selectShop], state => state.collection);

export const selectLoading = createSelector([selectShop], state => state.loading);
