import { Action } from 'redux'

export enum CounterActionTypes {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
  RESET = 'RESET',
}

export type CounterAction =
  | Action<CounterActionTypes.INCREMENT>
  | Action<CounterActionTypes.DECREMENT>
  | Action<CounterActionTypes.RESET>

export const increment: CounterAction = {
  type: CounterActionTypes.INCREMENT,
}

export const decrement: CounterAction = {
  type: CounterActionTypes.DECREMENT,
}

export const reset: CounterAction = {
  type: CounterActionTypes.RESET,
}
