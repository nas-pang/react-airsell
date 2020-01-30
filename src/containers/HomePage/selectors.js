/**
 * The home state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const selectRouter = state => state.router;

const makeSelectLoading = () =>
  createSelector(selectHome, homeState => homeState.loading);

const makeSelectError = () =>
  createSelector(selectHome, homeState => homeState.error);

const makeSelectRegions = () =>
  createSelector(selectHome, homeState => homeState.regions);

const makeSelectLocation = () =>
  createSelector(selectRouter, routerState => routerState.location);

const makeSelectListings = () =>
  createSelector(selectHome, homeState => homeState.listings);

export {
  selectHome,
  makeSelectLoading,
  makeSelectError,
  makeSelectRegions,
  makeSelectLocation,
  makeSelectListings,
};
