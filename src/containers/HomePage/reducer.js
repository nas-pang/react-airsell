import produce from 'immer';
import {
  LOAD_REGIONS_SUCCESS,
  LOAD_REGIONS,
  LOAD_REGIONS_ERROR,
  LOAD_LISTING,
  LOAD_LISTING_SUCCESS,
  LOAD_LISTIN_ERROR,
} from './constants';

export const initialState = {
  loading: true,
  error: false,
  regions: false,
  listings: {},
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_REGIONS:
        draft.loading = true;
        draft.error = false;
        draft.regions = false;
        break;

      case LOAD_REGIONS_SUCCESS:
        draft.regions = action.regions;
        draft.loading = false;
        break;

      case LOAD_REGIONS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;

      case LOAD_LISTING:
        draft.listings[action.id] = {
          loading: true,
          error: false,
          items: [],
        };
        break;

      case LOAD_LISTING_SUCCESS:
        draft.listings[action.id].loading = false;
        draft.listings[action.id].items = action.listing;
        break;

      case LOAD_LISTIN_ERROR:
        draft.listings[action.id].loading = false;
        draft.listings[action.id].error = action.error;
        break;
    }
  });

export default homeReducer;
