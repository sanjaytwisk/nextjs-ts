import React, { FC } from 'react'
import { AppProps } from 'next/app'
import '@common/css/layout.scss'

/**
 * withRedux HOC
 * NextJS wrapper for Redux
 */

const CustomApp: FC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
)

export default CustomApp
