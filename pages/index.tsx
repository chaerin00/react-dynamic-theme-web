import type { NextPage, GetServerSideProps } from 'next'
import { ReactElement } from 'react'
import { Header } from '@components/common'
import MainLogo from '@components/store/list/MainLogo'
import { Global, css } from '@emotion/react'
import { fetchStoreList, Store } from 'lib/api/store'
import { useGetStoreList } from 'hooks/query/useGetStoreList'
import { useThemeState } from '@contexts/ThemeContext'

type Props = {
  storeList: Store[]
}

const Home: NextPage<Props> = ({ storeList }): ReactElement => {
  const theme = useThemeState()
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
      <Header />
      <MainLogo />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const storeList = await fetchStoreList(process.env.NEXT_PUBLIC_BRAND_ID || '')

  return {
    props: {
      storeList,
    },
  }
}

export default Home
