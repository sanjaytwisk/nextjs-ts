import { Action } from 'redux'

export enum CounterActionTypes {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
}

export type CounterAction =
  | Action<CounterActionTypes.INCREMENT>
  | Action<CounterActionTypes.DECREMENT>

export const increment: CounterAction = {
  type: CounterActionTypes.INCREMENT,
}

export const decrement: CounterAction = {
  type: CounterActionTypes.DECREMENT,
}
