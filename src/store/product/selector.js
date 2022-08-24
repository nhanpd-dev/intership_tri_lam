import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectProductState = (state) => state.productStore || initialState;

const makeSelectLoading = () => createSelector(selectProductState, (state) => state.isLoading);

const makeSelectProduct = () => createSelector(selectProductState, (state) => state.product);

const makeSelectError = () => createSelector(selectProductState, (state) => state.error);

const makeSelectCart = () => createSelector(selectProductState, (state) => state.cart);

const makeSelectQuantityCart = () => createSelector(selectProductState, (state) => state.quantity);

export {
  selectProductState,
  makeSelectLoading,
  makeSelectError,
  makeSelectProduct,
  makeSelectCart,
  makeSelectQuantityCart,
};
