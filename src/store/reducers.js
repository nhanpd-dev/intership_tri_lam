/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import authStore from './auth/reducer';

//  export const history = createBrowserHistory()

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    authStore,
    ...injectedReducers,
  });

  return rootReducer;
}
