import type { AppProps } from 'next/app'
import { ReactElement } from 'react'
import { Header } from '../components/common'

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
