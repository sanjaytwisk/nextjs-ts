import './styles.css'
import Counter from '@components/counter/Counter'

/**
 * Homepage
 */
const HomePage = () => {
  return (
    <main className={`main main--accent`}>
      <h1>Hello, world!</h1>
      <Counter />
    </main>
  )
}

export default HomePage
