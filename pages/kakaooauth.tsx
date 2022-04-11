import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { postToken, TokenPayload } from 'lib/api/token'

const KakaoOauthPage = () => {
  const router = useRouter()

  useEffect(() => {
    const { code } = router.query
    const { origin, pathname } = window.location

    const payload = {
      code: code as string,
      redirect_uri: `${origin}${pathname}`,
      brand_id: process.env.NEXT_PUBLIC_BRAND_ID as string,
    }

    postKakaoToken(payload)
  }, [router.query])

  const postKakaoToken = async (payload: TokenPayload) => {
    const { access, refresh, is_new_user, username, phone_number } =
      await postToken(payload)
    localStorage.setItem('access-token', access)
    router.replace('/')
  }

  return <div></div>
}

export default KakaoOauthPage
