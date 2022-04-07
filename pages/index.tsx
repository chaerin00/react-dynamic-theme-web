import type { NextPage } from 'next'
import { ReactElement } from 'react'
import { Header } from '@components/common'
import { fetchTheme } from 'lib/api/theme'
import { GetServerSideProps } from 'next'

const Home: NextPage = (): ReactElement => {
  return <Header />
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const isLocalhost = req.headers.referer?.includes('localhost')
  const referer = isLocalhost
    ? process.env.NEXT_PUBLIC_TEST_URL
    : req.headers.referer
  const result = await fetchTheme(referer || '')
  console.log(result)
  return {
    props: {},
  }
}

export default Home
