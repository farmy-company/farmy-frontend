import { getCssText } from '@/styles/setup'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <meta name="apple-mobile-web-app-title" content="Snippit" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="theme-color" content="#37466B" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Sora:wght@400;500&display=swap"
            rel="stylesheet"
          />

          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
