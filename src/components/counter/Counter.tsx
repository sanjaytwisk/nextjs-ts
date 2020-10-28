import { Icon } from '@components/icon/Icon'
import styles from './counter.module.scss'

interface CounterProps {
  count: number
  add: () => void
  remove: () => void
}

export const Counter: React.SFC<CounterProps> = ({ count, add, remove }) => {
  const onAdd = () => add()
  const onRemove = () => remove()
  return (
    <div className={styles.counter}>
      <h2>Count: {count}</h2>
      <button onClick={onAdd}>
        <Icon name={'plus'} /> Add
      </button>
      <button onClick={onRemove}>
        <Icon name={'minus'} /> Remove
      </button>
    </div>
  )
}
