import './styles.css'
import HomepageCounter from '@containers/counter/HomepageCounter'

/**
 * Homepage
 */
const HomePage = () => {
  return (
    <main className={`main main--accent`}>
      <h1>Hello, world!</h1>
      <HomepageCounter />
    </main>
  )
}

export default HomePage
