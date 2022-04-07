import type { NextPage, GetServerSideProps } from 'next'
import { ReactElement } from 'react'
import { Header } from '@components/common'
import { fetchTheme, Theme } from 'lib/api/theme'
import MainLogo from '@components/store/list/MainLogo'
import { Global, css } from '@emotion/react'

type Props = {
  theme: Theme
}

const Home: NextPage<Props> = ({ theme }): ReactElement => {
  const cssVariable = css`
    :root {
      --main: ${theme.main_color};
      --sub: ${theme.sub_color};
    }
  `

  return (
    <div>
      <Global styles={cssVariable} />
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
