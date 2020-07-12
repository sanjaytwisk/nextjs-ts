import {
  createStore,
  applyMiddleware,
  combineReducers,
  AnyAction,
  Reducer,
} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { createWrapper, MakeStore, HYDRATE } from 'next-redux-wrapper'

import counter, { CounterState } from './counter/counterReducer'

export interface AppState {
  counter: CounterState
}

const combinedReducers = combineReducers({ counter })

const reducer: Reducer<AppState, AnyAction> = (state, action) => {
  if (action.type === HYDRATE) {
    /* client state will be overwritten
     * by server or static state hydation.
     * Implement state preservation as needed.
     * see: https://github.com/kirill-konshin/next-redux-wrapper#server-and-client-state-separation
     */
    const nextState = {
      ...state,
      ...action.payload,
    }
    return nextState
  }
  return combinedReducers(state, action)
}

/**
 * initStore
 * Initialise and export redux store
 */
const initStore: MakeStore<AppState> = () => {
  return createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}

export const storeWrapper = createWrapper(initStore)
