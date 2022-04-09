import type { AppProps, AppContext } from 'next/app'
import { ReactElement } from 'react'
import { Global } from '@emotion/react'
import globalStyle from 'styles/globalStyle'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ThemeProvider } from '@contexts/ThemeContext'
import { fetchTheme } from 'lib/api/theme'

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
