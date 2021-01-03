import { Counter } from './Counter'
import { render } from '@testing-library/react'

describe('Counter', () => {
  it('should render the text `Count: <count>` for the given count prop', () => {
    const count = 1
    const add = jest.fn()
    const remove = jest.fn()
    const component = render(
      <Counter count={count} add={add} remove={remove} />
    )
    expect(component.getByTestId('counter-output')).toHaveTextContent(
      'Count: 1'
    )
  })
})
