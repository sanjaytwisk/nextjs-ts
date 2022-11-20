import React, { FC } from 'react'
import { AppProps } from 'next/app'
import { storeWrapper } from '@store/store'
import '@common/css/layout.scss'
import { Provider } from 'react-redux'

/**
 * withRedux HOC
 * NextJS wrapper for Redux
 */

const CustomApp: FC<AppProps> = ({ Component, ...rest }) => {
  const { store, props } = storeWrapper.useWrappedStore(rest)
  return (
    <Provider store={store}>
      <Component {...props.pageProps} />
    </Provider>
  )
}

export default CustomApp
