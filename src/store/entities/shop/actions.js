import data from './data';
import { FETCHING_DATA, FETCH_COLLECTION, FETCH_COLLECTIONS } from './types';

export const fetchCollections = () => ({
  type: FETCH_COLLECTIONS,
  payload: data.map(item => ({ ...item, items: item.items.slice(0, 4) })),
});

export const fetchCollection = name => ({
  type: FETCH_COLLECTION,
  payload: data.find(item => item.routeName === name),
});

export const fetchData = () => ({ type: FETCHING_DATA });
