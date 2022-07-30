/* eslint-disable arrow-parens */
/* eslint-disable implicit-arrow-linebreak */

/**
 * The global state selectors
 */

 import { createSelector } from 'reselect'
 import { initialState } from './reducer'
 
 const selectGlobalState = state => state.globalStore || initialState
 
 const makeSelectUsers = () =>
 createSelector(
   selectGlobalState,
   state => state.users
 )

 export {
   selectGlobalState,
   makeSelectUsers
 }
 