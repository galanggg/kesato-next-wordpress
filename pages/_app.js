import Router from 'next/router'
import getConfig from 'next/config'
import Head from 'next/head'
import React from 'react'
import NProgress from 'nprogress'
import '../styles/style.scss'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../lib/ApolloClient'

NProgress.configure({ showSpinner: false })

Router.onRouteChangeStart = () => {
  // console.log('onRouteChnageStart triggered');
  NProgress.start()
}

Router.onRouteChangeComplete = () => {
  // console.log('onRouteChnageComplete triggered');
  NProgress.done()
}

Router.onRouteChangeError = () => {
  // console.log('onRouteChnageError triggered');
  NProgress.done()
}

export default function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState)
  return (
    <ApolloProvider client={apolloClient}>
      <div>
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>KESATO</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </div>
    </ApolloProvider>
  )
}
