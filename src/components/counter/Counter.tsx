import Icon from '@components/icon/Icon'

interface CounterProps {
  count: number
  add: () => void
  remove: () => void
}

const Counter: React.SFC<CounterProps> = ({ count, add, remove }) => {
  const onAdd = () => add()
  const onRemove = () => remove()
  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={onAdd}>
        <Icon name={'plus'} /> Add
      </button>
      <button onClick={onRemove}>
        <Icon name={'minus'} /> Remove
      </button>
    </>
  )
}

export default Counter
