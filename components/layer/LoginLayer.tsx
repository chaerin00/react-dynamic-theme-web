import styled from '@emotion/styled'
import { Logo, PrevIcon } from 'assets/login'
import router from 'next/router'
import GoogleLogin from 'components/login/GoogleLogin'
import { useLogin } from 'hooks/query/useLogin'
import { LoginBody } from 'lib/api/users'

const LoginLayer = () => {
  const { mutateAsync: onLogin } = useLogin()
  const postAccessToken = (body: LoginBody) => onLogin(body)
  const clickPrevButton = () => router.push('/')
  return (
    <LoginLayerWrap>
      <PrevButton onClick={clickPrevButton}>
        <PrevIcon />
      </PrevButton>
      <Title>
        <Logo />
        <h1>
          SNS 계정으로 손쉽게 가입하고 <br />
          Takers가 될 수 있어요 :)
        </h1>
      </Title>
      <ButtonWrap>
        <div>kakao</div>
        <div>naver</div>
        <GoogleLogin postAccessToken={postAccessToken} />
      </ButtonWrap>
    </LoginLayerWrap>
  )
}

export default LoginLayer

const LoginLayerWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
`
const PrevButton = styled.button`
  position: absolute;
  left: 1.1rem;
  top: 5.3rem;
`
const Title = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8.5rem;
  & > h1 {
    text-align: center;
    color: var(--white);
    font-style: normal;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 147%;
  }
`
const ButtonWrap = styled.section`
  position: absolute;
  bottom: 6.4rem;
`
