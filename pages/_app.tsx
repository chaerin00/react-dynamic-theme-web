import { Global } from '@emotion/react'
import type { AppProps, AppContext } from 'next/app'
import Head from 'next/head'
import { ReactElement } from 'react'
import { QueryClientProvider, QueryClient } from 'react-query'

import { ThemeProvider } from '@contexts/ThemeContext'
import { fetchTheme } from 'lib/api/theme'
import globalStyle from 'styles/globalStyle'

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  const queryClient = new QueryClient()

  return (
    <div>
      <ThemeProvider value={pageProps.theme}>
        <QueryClientProvider client={queryClient}>
          <Global styles={globalStyle} />
          <Component {...pageProps} />
        </QueryClientProvider>
      </ThemeProvider>
    </div>
  )
}

MyApp.getInitialProps = async ({ Component, ctx }: AppContext) => {
  let pageProps = {}
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  const theme = await fetchTheme(ctx.req?.headers.referer)

  pageProps = { ...pageProps, theme }

  return { pageProps }
}

export default MyApp
