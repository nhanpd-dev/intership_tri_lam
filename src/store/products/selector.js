/* eslint-disable arrow-parens */
/* eslint-disable implicit-arrow-linebreak */

/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectProductsState = (state) => state.productsStore || initialState;

const makeSelectLoading = () => createSelector(selectProductsState, (state) => state.isLoading);

const makeSelectProducts = () => createSelector(selectProductsState, (state) => state.products);

const makeSelectError = () => createSelector(selectProductsState, (state) => state.error);

export { selectProductsState, makeSelectLoading, makeSelectError, makeSelectProducts };
