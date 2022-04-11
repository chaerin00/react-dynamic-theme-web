import styled from '@emotion/styled'

import { CloseIcon } from '@assets/common'

type SideMenuProps = {
  readonly isOpen: boolean
  readonly onClose: () => void
}

const SideMenu = ({ isOpen, onClose }: SideMenuProps) => {
  return (
    <SideMenuWrapper className={isOpen ? 'open' : 'close'}>
      <button className="close-button" onClick={onClose}>
        <CloseIcon />
      </button>
      <header>
        <button className="login-button">간편 로그인 / 회원가입</button>
      </header>
    </SideMenuWrapper>
  )
}

const SideMenuWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  padding: 1rem;
  z-index: 5;
  background: black;
  transition: 0.2s left ease-out;
  &.open {
    left: 0;
  }
  &.close {
    left: -100%;
  }

  & > .close-button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5rem;
    height: 1.5rem;
  }

  & > header {
    margin-top: 4rem;
    & > .login-button {
      border: 1px solid #ffff00;
      color: #ffff00;
      font-size: 0.625rem;
      line-height: 1.2rem;
      padding: 0 0.75rem;
    }
  }
`

export default SideMenu
