import { Html, Head, Main, NextScript } from 'next/document'

import { useThemeState } from '@contexts/ThemeContext'

export default function Document() {
  return (
    <Html>
      <Head>
        <script defer src="//developers.kakao.com/sdk/js/kakao.js" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
