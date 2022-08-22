import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectOrdersState = (state) => state.ordersStore || initialState;

const makeSelectOrders = () => createSelector(selectOrdersState, (state) => state.orders);

export { selectOrdersState, makeSelectOrders };
