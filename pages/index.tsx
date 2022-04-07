import type { NextPage } from 'next'
import { ReactElement } from 'react'
import { Header } from '@components/common'
import { fetchTheme, Theme } from 'lib/api/theme'
import { GetServerSideProps } from 'next'

type Props = {
  theme: Theme
}

const Home: NextPage<Props> = ({ theme }): ReactElement => {
  return (
    <div>
      <Header theme={theme} />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const isLocalhost = req.headers.referer?.includes('localhost')
  const referer = isLocalhost
    ? process.env.NEXT_PUBLIC_TEST_URL
    : req.headers.referer
  const result = await fetchTheme(referer || '')
  return {
    props: {
      theme: result,
    },
  }
}

export default Home
