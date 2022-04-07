import styled from '@emotion/styled'
import { MenuIcon } from '@assets/common'
import Router from 'next/router'
import { useState } from 'react'
import { Theme } from 'lib/api/theme'

type HeaderProps = {
  theme: Theme
}

const Header = ({ theme }: HeaderProps) => {
  const [isLogin, setIsLogin] = useState<boolean>(
    typeof window !== 'undefined' && !!localStorage.getItem('x-access-token')
  )

  const clickLogin = () => {
    Router.push('/login')
  }

  const clickLogo = () => {
    Router.push('/')
  }

  console.log(theme)
  return (
    <HeaderWrap>
      <MenuIcon />
      <Logo onClick={clickLogo}>쏘크라테스 떡볶이</Logo>
      {isLogin ? (
        <div>done</div>
      ) : (
        <LoginButton onClick={clickLogin}>로그인</LoginButton>
      )}
    </HeaderWrap>
  )
}

const HeaderWrap = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 21px;
  width: 100%;
  height: 50px;
  background-color: var(--white);
`

const LoginButton = styled.button`
  width: 57px;
  border: 1px solid var(--black);
  border-radius: 4px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #1a1a1a;
`

const Logo = styled.span`
  font-size: 14px;
`

export default Header
