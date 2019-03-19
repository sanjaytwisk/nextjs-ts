import { shallow } from 'enzyme'
import Counter from './Counter'

describe('Counter', () => {
  it('should render the text `Count: <count>` for the given count prop', () => {
    const add = jest.fn()
    const remove = jest.fn()
    const component = shallow(<Counter count={1} add={add} remove={remove} />)
    expect(component.text()).toContain('Count: 1')
  })
})
