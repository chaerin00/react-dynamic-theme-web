import styled from '@emotion/styled'

import { CloseIcon } from '@assets/common'

type SideMenuProps = {
  readonly isOpen: boolean
  readonly onClose: () => void
}

const SideMenu = ({ isOpen, onClose }: SideMenuProps) => {
  return (
    <SideMenuWrapper className={isOpen ? 'open' : 'close'}>
      <CloseIcon className="close-button" onClick={onClose} />
    </SideMenuWrapper>
  )
}

const SideMenuWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
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
    top: 16px;
    right: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
  }
`

export default SideMenu
