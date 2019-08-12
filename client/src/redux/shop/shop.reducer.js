import {
  FETCH_COLLECTION_START,
  FETCH_COLLECTION_SUCCESS,
  FETCH_COLLECTION_FAILURE
} from './shop.types';

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: ''
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_COLLECTION_START:
      return { ...state, isFetching: false };
    case FETCH_COLLECTION_SUCCESS:
      return { ...state, isFetching: false, collections: action.payload };
    case FETCH_COLLECTION_FAILURE:
      return { ...state, isFetching: false, errorMessage: action.payload };
    default:
      return state;
  }
};

export default shopReducer;
