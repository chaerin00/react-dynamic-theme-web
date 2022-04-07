import type { NextPage } from 'next'
import { ReactElement, useEffect } from 'react'
import { Header } from '@components/common'
import { fetchTheme, Theme } from 'lib/api/theme'
import { GetServerSideProps } from 'next'
import MainLogo from '@components/store/list/MainLogo'

type Props = {
  theme: Theme
}

const Home: NextPage<Props> = ({ theme }): ReactElement => {
  return (
    <div>
      <Header theme={theme} />
      <MainLogo mainLogo={theme.main_logo} />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const theme = await fetchTheme(req.headers.referer)
  return {
    props: {
      theme,
    },
  }
}

export default Home
