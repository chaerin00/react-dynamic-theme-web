import type { AppProps } from 'next/app'
import { ReactElement, useEffect, useState } from 'react'
import axios from 'axios'
import { Global } from '@emotion/react'
import globalStyle from 'styles/globalStyle'
import router from 'next/router'
import { QueryClientProvider, QueryClient } from 'react-query'

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  axios.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      if (error.response.status === 401) {
        router.push('/login')
      }
      return error
    }
  )
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
