/*
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_REGIONS,
  LOAD_REGIONS_SUCCESS,
  LOAD_REGIONS_ERROR,
  LOAD_LISTING,
  LOAD_LISTING_SUCCESS,
  LOAD_LISTIN_ERROR,
} from './constants';

/**
 * Load the regions, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REGIONS
 */
export function loadRegions() {
  return {
    type: LOAD_REGIONS,
  };
}

/**
 * Dispatched when the regions are loaded by the request saga
 *
 * @param  {array} regions The repository data
 *
 * @return {object} An action object with a type of LOAD_REGIONS_SUCCESS passing the regions
 */
export function regionsLoaded(regions) {
  return {
    type: LOAD_REGIONS_SUCCESS,
    regions,
  };
}

/**
 * Dispatched when loading the regions fails
 *
 * @param  {object} error The error
 *
 * @return {object} An action object with a type of LOAD_REGIONS_ERROR passing the error
 */
export function regionsLoadingError(error) {
  return {
    type: LOAD_REGIONS_ERROR,
    error,
  };
}

/**
 * Load the listing category, this action starts the request saga
 *
 * @param  {string} id The listing Category id
 *
 * @return {object} An action object with a type of LOAD_LISTING
 */
export function loadListing(id) {
  return {
    type: LOAD_LISTING,
    id,
  };
}

/**
 * Dispatched when the listing category are loaded by the request saga
 *
 * @param  {array} listing The listing data
 *
 * @return {object} An action object with a type of LOAD_LISTING_SUCCESS passing the listing category
 */
export function listingLoaded(listing, id) {
  return {
    type: LOAD_LISTING_SUCCESS,
    listing,
    id,
  };
}

/**
 * Dispatched when loading the listing fails
 *
 * @param  {object} error The error
 *
 * @return {object} An action object with a type of LOAD_LISTING_ERROR passing the error
 */
export function listingLoadingError(error, id) {
  return {
    type: LOAD_LISTIN_ERROR,
    error,
    id,
  };
}
