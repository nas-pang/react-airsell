/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_MENU,
  LOAD_MENU_SUCCESS,
  LOAD_MENU_ERROR,
  LOAD_CATEGORIES,
  LOAD_CATEGORIES_SUCCESS,
  LOAD_CATEGORIES_ERROR,
} from './constants';

/**
 * Load the menu, this action starts the request saga
 *
 * @param  {string} slug The Menu slug
 *
 * @return {object} An action object with a type of LOAD_MENU
 */
export function loadMenu(slug) {
  return {
    type: LOAD_MENU,
    slug,
  };
}

/**
 * Dispatched when the menu are loaded by the request saga
 *
 * @param  {object} menu The menu with items
 *
 * @return {object} An action object with a type of LOAD_MENU_SUCCESS passing the menu
 */
export function menuLoaded(menu) {
  return {
    type: LOAD_MENU_SUCCESS,
    menu,
  };
}

/**
 * Dispatched when loading the menu fails
 *
 * @param  {object} error The error
 *
 * @return {object} An action object with a type of LOAD_MENU_ERROR passing the error
 */
export function menuLoadingError(error) {
  return {
    type: LOAD_MENU_ERROR,
    error,
  };
}

/**
 * Load the categories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_CATEGORIES
 */
export function loadCategories() {
  return {
    type: LOAD_CATEGORIES,
  };
}

/**
 * Dispatched when the categories are loaded by the request saga
 *
 * @param  {object} menu The categories with items
 *
 * @return {object} An action object with a type of LOAD_CATEGORIES_SUCCESS passing the categories
 */
export function categoriesLoaded(categories) {
  return {
    type: LOAD_CATEGORIES_SUCCESS,
    categories,
  };
}

/**
 * Dispatched when loading the categories fails
 *
 * @param  {object} error The error
 *
 * @return {object} An action object with a type of LOAD_CATEGORIES_ERROR passing the error
 */
export function categoriesLoadingError(error) {
  return {
    type: LOAD_CATEGORIES_ERROR,
    error,
  };
}
