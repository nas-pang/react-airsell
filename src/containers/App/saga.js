import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { LOAD_MENU, LOAD_CATEGORIES } from './constants';
import {
  menuLoaded,
  menuLoadingError,
  categoriesLoaded,
  categoriesLoadingError,
} from './actions';

/**
 * Menu request/response handler
 */
export function* getMenu({ slug }) {
  const requestURL = `${process.env.REACT_APP_AIRSELLS_URL}/wp-json/menus/v1/menus/${slug}`;

  try {
    // Call our request helper (see 'utils/request')
    const menu = yield call(request, requestURL);
    yield put(menuLoaded(menu));
  } catch (err) {
    yield put(menuLoadingError(err));
  }
}

/**
 * Listing Categories request/response handler
 */
export function* getCategories() {
  const requestURL = `${process.env.REACT_APP_AIRSELLS_URL}/wp-json/wp/v2/listing_category?per_page=50`;

  try {
    // Call our request helper (see 'utils/request')
    const categories = yield call(request, requestURL);
    yield put(categoriesLoaded(categories));
  } catch (err) {
    yield put(categoriesLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* appData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_MENU, getMenu);
  yield takeLatest(LOAD_CATEGORIES, getCategories);
}
