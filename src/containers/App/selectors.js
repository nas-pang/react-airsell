/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.global || initialState;

const selectRouter = state => state.router;

const makeSelectLoading = () =>
  createSelector(selectGlobal, globalState => globalState.loading);

const makeSelectError = () =>
  createSelector(selectGlobal, globalState => globalState.error);

const makeSelectRegions = () =>
  createSelector(selectGlobal, globalState => globalState.regions);

const makeSelectMenu = slug =>
  createSelector(selectGlobal, globalState => globalState.menus[slug]);

const makeSelectCategories = () =>
  createSelector(selectGlobal, globalState => globalState.categories);

const makeSelectLocation = () =>
  createSelector(selectRouter, routerState => routerState.location);

export {
  selectGlobal,
  makeSelectLoading,
  makeSelectError,
  makeSelectRegions,
  makeSelectLocation,
  makeSelectMenu,
  makeSelectCategories,
};
