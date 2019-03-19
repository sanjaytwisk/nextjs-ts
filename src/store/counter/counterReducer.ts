import { CounterAction, CounterActionTypes } from './counterActions'

export interface CounterState {
  readonly count: number
}

const initialCounterState = {
  count: 0,
}

/**
 * Counter Reducer
 */
export default (
  state: CounterState = initialCounterState,
  action: CounterAction
) => {
  const { count } = state
  switch (action.type) {
    case CounterActionTypes.INCREMENT:
      return {
        ...state,
        count: count + 1,
      }
    case CounterActionTypes.DECREMENT:
      return {
        ...state,
        count: count > 0 ? count - 1 : 0,
      }
    default:
      return state
  }
}
