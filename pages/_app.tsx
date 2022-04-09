import type { AppProps } from 'next/app'
import { ReactElement, useEffect, useState } from 'react'
import { Global } from '@emotion/react'
import globalStyle from 'styles/globalStyle'
import { QueryClientProvider, QueryClient } from 'react-query'

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  const queryClient = new QueryClient()
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Global styles={globalStyle} />
        <Component {...pageProps} />
      </QueryClientProvider>
    </div>
  )
}

export default MyApp
