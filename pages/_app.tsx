import React from 'react'
import App, { Container, AppContext } from 'next/app'
import withRedux from 'next-redux-wrapper'
import { initStore, AppState } from '@store/store'
import { Provider } from 'react-redux'
import { Store } from 'redux'
import '@common/css/variables.scss'
import '@common/css/colors.scss'

/**
 * withRedux HOC
 * NextJS wrapper for Redux
 */
export default withRedux(initStore)(
  class CustomApp extends App<{ store: Store<AppState> }> {
    public static async getInitialProps({ Component, ctx }: AppContext) {
      const pageProps = Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}
      return { pageProps }
    }

    public render() {
      const { Component, pageProps, store } = this.props
      return (
        <Container>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </Container>
      )
    }
  }
)
