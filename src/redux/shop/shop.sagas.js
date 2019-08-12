import { takeEvery, call, put } from 'redux-saga/effects';

import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils';

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from './shop.action';

import { FETCH_COLLECTION_START } from './shop.types';

export function* fetchCollectionsAsync() {
  try {
    const collectionsRef = firestore.collection('collections');
    const snapshot = yield collectionsRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeEvery(FETCH_COLLECTION_START, fetchCollectionsAsync);
}
