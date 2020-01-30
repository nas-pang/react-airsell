import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';

import request from 'utils/request';
import { LOAD_REGIONS, LOAD_LISTING } from './constants';
import {
  regionsLoaded,
  regionsLoadingError,
  listingLoaded,
  listingLoadingError,
} from './actions';

/**
 * Regions request/response handler
 */
export function* getRegions() {
  const requestURL = `${process.env.REACT_APP_AIRSELLS_URL}/wp-json/wp/v2/region`;

  try {
    // Call our request helper (see 'utils/request')
    const regions = yield call(request, requestURL);
    yield put(regionsLoaded(regions));
  } catch (err) {
    yield put(regionsLoadingError(err));
  }
}

/**
 * Listing Category request/response handler
 */
export function* getListingByCategory(params) {
  const { id } = params;
  const requestURL = `${process.env.REACT_APP_AIRSELLS_URL}/wp-json/wp/v2/listing?listing_category=${id}`;

  try {
    // Call our request helper (see 'utils/request')
    const listing = yield call(request, requestURL);
    yield put(listingLoaded(listing, id));
  } catch (err) {
    yield put(listingLoadingError(err, id));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* homeData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_REGIONS, getRegions);
  yield takeEvery(LOAD_LISTING, getListingByCategory);
}
