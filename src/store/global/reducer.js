/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 * @param  {state} login state
 * @param  {action} login action
 */
import { createReducer, updateObject } from '../../utils/redux'
import {
  TEST_SAGA
} from './constants'

export const initialState = {
  isLoading:false,
  users: []
}

function testReducer(state, { isOnline }) {
  return updateObject(state, {
    isOnline
  })
}

export default createReducer(initialState, {
  [TEST_SAGA]: testReducer
})
