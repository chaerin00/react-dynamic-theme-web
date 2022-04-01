import React from 'react'
import GoogleLogin, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login'
import styled from '@emotion/styled'
import { GoogleIcon } from 'assets/login'
import isGoogleLoginResponse from 'lib/type-guard/isGoogleLoginResponse'

type GoogleLoginButtonProps = {
  postAccessToken: (body: {
    token: string
    social: 'google' | 'naver' | 'kakao'
  }) => void
}

const GoogleLoginButton = ({ postAccessToken }: GoogleLoginButtonProps) => {
  const handleSuccess = (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    if (isGoogleLoginResponse(response))
      postAccessToken({ token: response.accessToken, social: 'google' })
  }
  return (
    <GoogleLogin
      clientId="490242867421-0i9ikdrk4uql4agn2gr6q57btgvphlga.apps.googleusercontent.com"
      render={(renderProps) => (
        <Button
          className="google"
          type="button"
          color={'white'}
          onClick={renderProps.onClick}
        >
          <GoogleIcon />
          구글로 시작하기
        </Button>
      )}
      onSuccess={(response) => handleSuccess(response)}
      onFailure={(res) => {}}
    />
  )
}

const Button = styled.button`
  width: 33.4rem;
  cursor: pointer;
  background-color: var(--white);
  border-radius: 2.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
`

export default GoogleLoginButton
