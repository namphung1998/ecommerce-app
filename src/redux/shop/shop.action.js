import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils';

import {
  FETCH_COLLECTION_START,
  FETCH_COLLECTION_SUCCESS,
  FETCH_COLLECTION_FAILURE
} from './shop.types';

export const fetchCollectionsSuccess = collectionsMap => {
  return { type: FETCH_COLLECTION_SUCCESS, payload: collectionsMap };
};

export const fetchCollectionsStart = () => {
  return { type: FETCH_COLLECTION_START };
};

export const fetchCollectionsFailure = errorMessage => {
  return { type: FETCH_COLLECTION_FAILURE, payload: errorMessage };
};

export const fetchCollectionsStartAsync = () => dispatch => {
  const collectionsRef = firestore.collection('collections');
  dispatch(fetchCollectionsStart());

  collectionsRef
    .get()
    .then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(fetchCollectionsSuccess(collectionsMap));
    })
    .catch(err => dispatch(fetchCollectionsFailure(err.message)));
};
