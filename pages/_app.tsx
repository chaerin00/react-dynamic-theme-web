import { Global } from '@emotion/react'
import type { AppProps, AppContext } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'
import { ReactElement } from 'react'
import { QueryClientProvider, QueryClient } from 'react-query'

import { ThemeProvider } from '@contexts/ThemeContext'
import { fetchTheme, Theme } from 'lib/api/theme'
import globalStyle from 'styles/globalStyle'

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  const queryClient = new QueryClient()
  const { theme } = pageProps as { theme: Theme }

  return (
    <div>
      <Script
        type="text/javascript"
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${theme.kakao_app_id}&libraries=services`}
      />
      <Script
        id="gtm"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${theme.gtm}');
          `,
        }}
      />
      <Head>
        <title>{theme.name}</title>
        <meta name="description" content={theme.description}></meta>
        <meta name="keywords" content={theme.keywords} />
        <meta name="og:title" content={theme.og_title} />
        <meta name="og:description" content={theme.og_description} />
        <meta name="og:image" content={theme.og_image} />
        <link rel="icon" type="image/x-icon" href={theme.sub_logo} />
      </Head>
      <ThemeProvider value={theme}>
        <QueryClientProvider client={queryClient}>
          <Global styles={globalStyle} />
          <Component {...pageProps} />
        </QueryClientProvider>
      </ThemeProvider>
    </div>
  )
}

MyApp.getInitialProps = async ({ Component, ctx }: AppContext) => {
  let pageProps = {}
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  const theme = await fetchTheme(ctx.req?.headers.referer)

  pageProps = { ...pageProps, theme }

  return { pageProps }
}

export default MyApp
