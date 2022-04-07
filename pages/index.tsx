import type { NextPage, GetServerSideProps } from 'next'
import { ReactElement } from 'react'
import { Header } from '@components/common'
import { fetchTheme, Theme } from 'lib/api/theme'
import MainLogo from '@components/store/list/MainLogo'
import { Global, css } from '@emotion/react'
import { fetchStoreList, Store } from 'lib/api/store'
import { useGetStoreList } from 'hooks/query/useGetStoreList'

type Props = {
  theme: Theme
  storeList: Store[]
}

const Home: NextPage<Props> = ({ theme, storeList }): ReactElement => {
  const { data } = useGetStoreList(storeList)

  const cssVariable = css`
    :root {
      --main: ${theme.main_color};
      --sub: ${theme.sub_color};
    }
  `

  return (
    <div>
      <Global styles={cssVariable} />
      <Header name={theme.name} />
      <MainLogo mainLogo={theme.main_logo} />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const theme = await fetchTheme(req.headers.referer)
  const storeList = await fetchStoreList(process.env.NEXT_PUBLIC_BRAND_ID || '')
  return {
    props: {
      theme,
      storeList,
    },
  }
}

export default Home
