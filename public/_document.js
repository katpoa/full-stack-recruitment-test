import Document, { Html, Main, NextScript } from 'next/document';
import Head from 'next/head';
import { ServerStyleSheet } from 'styled-components';

import './public/favicon.ico';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
    ctx.renderPage = () =>
        originalRenderPage({
        enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

    const initialProps = await Document.getInitialProps(ctx);
    return {
        ...initialProps,
        styles: (
        <>
            {initialProps.styles}
            {sheet.getStyleElement()}
        </>
        ),
    };
    } finally {
    sheet.seal();
    }
  }
  
  render() {
    return (
      <Html>
        <Head>
            <meta charset="utf-8"/>
            <meta http-equiv="x-ua-compatible" content="ie=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            <meta name="theme-color" content="#000000"/>
            <link rel="manifest" href="%PUBLIC_URL%/manifest.json"/>
            <title>Skyscanner full-stack recruitment test</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument