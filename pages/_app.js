import React from 'react';

import App, { Container } from 'next/app';
import Head from 'next/head';

// import Header from '../src/components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      {/* <Header/> */}
      <Component {...pageProps} />
    </Container>
  );
}

MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps }
}

export default MyApp;