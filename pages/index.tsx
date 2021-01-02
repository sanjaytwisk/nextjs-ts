import { HomepageCounter } from '@containers/counter/HomepageCounter'
import Link from 'next/link'

/**
 * Homepage
 */
const HomePage: React.FC = () => {
  return (
    <main>
      <h1>Hello, world!</h1>
      <Link href={'/reset'}>
        <a>reset page</a>
      </Link>
      <HomepageCounter />
    </main>
  )
}

export default HomePage
