import styled from '@emotion/styled'
import { MenuIcon, Logo } from '@assets/common'
import Router from 'next/router'
import { useState } from 'react'

const Header = () => {
  const [isLogin, setIsLogin] = useState<boolean>(
    typeof window !== 'undefined'
      ? !!localStorage.getItem('x-access-token')
      : false
  )
  const clickLogin = () => {
    Router.push('/login')
  }
  const clickLogo = () => {
    Router.push('/')
  }
  return (
    <HeaderWrap>
      <MenuIcon />
      <Logo onClick={clickLogo} />
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
  padding: 0 2.1rem;
  width: 100%;
  height: 5rem;
  background-color: var(--white);
`

const LoginButton = styled.button`
  width: 5.7rem;
  border: 1px solid var(--black);
  border-radius: 4px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #1a1a1a;
`

export default Header
