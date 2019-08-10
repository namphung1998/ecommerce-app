import { UPDATE_COLLECTIONS } from './shop.types';

export const updateCollections = collectionsMap => {
  return { type: UPDATE_COLLECTIONS, payload: collectionsMap };
};
