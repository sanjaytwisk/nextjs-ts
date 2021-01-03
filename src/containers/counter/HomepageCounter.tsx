import { Counter } from '@components/counter/Counter'
import React, { useState } from 'react'

export const HomepageCounter: React.FC = () => {
  const [count, setCount] = useState(0)
  const add = () => setCount(count + 1)
  const remove = () => setCount(count > 0 ? count - 1 : count)
  return <Counter count={count} add={add} remove={remove} />
}
