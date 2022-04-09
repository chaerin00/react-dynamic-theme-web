import type { AppProps } from 'next/app'
import { ReactElement } from 'react'
import { Global } from '@emotion/react'
import globalStyle from 'styles/globalStyle'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ThemeProvider } from '@contexts/ThemeContext'

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  const queryClient = new QueryClient()
  return (
    <div>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <Global styles={globalStyle} />
          <Component {...pageProps} />
        </QueryClientProvider>
      </ThemeProvider>
    </div>
  )
}

export default MyApp
