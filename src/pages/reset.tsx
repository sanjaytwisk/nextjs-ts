import { HomepageCounter } from '@containers/counter/HomepageCounter'
import Link from 'next/link'
import { storeWrapper } from '../store/store'
import { reset } from '@store/counter/counterActions'

/**
 * Homepage
 */
const ResetPage: React.FC = () => {
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
  (store) => async () => {
    store.dispatch(reset)
    return { props: {} }
  }
)

export default ResetPage
