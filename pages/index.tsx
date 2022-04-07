import type { NextPage } from 'next'
import { ReactElement } from 'react'
import { Header } from '@components/common'
import { fetchTheme, Theme } from 'lib/api/theme'
import { GetServerSideProps } from 'next'
import { useGetTheme } from 'hooks/query/useGetTheme'

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
  const theme = await fetchTheme(referer || '')
  return {
    props: {
      theme,
    },
  }
}

export default Home
