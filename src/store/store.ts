import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import counter, { CounterState } from './counter/counterReducer'

export interface AppState {
  counter: CounterState
}

/**
 * initStore
 * Initialise and export redux store
 */
export const initStore = (initialState: {} = {}) => {
  return createStore(
    combineReducers({ counter }),
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}
