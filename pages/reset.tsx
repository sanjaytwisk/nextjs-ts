import HomepageCounter from '@containers/counter/HomepageCounter'
import Link from 'next/link'
import { storeWrapper } from '../src/store/store'
import { reset } from '../src/store/counter/counterActions'
/**
 * Homepage
 */
const ResetPage = () => {
  return (
    <main>
      <Link href={'/'}>
        <a>back</a>
      </Link>
      <HomepageCounter />
    </main>
  )
}

export const getServerSideProps = storeWrapper.getServerSideProps(
  async ({ store }) => {
    store.dispatch(reset)
  }
)

export default ResetPage
