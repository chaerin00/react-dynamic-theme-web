import styled from '@emotion/styled'
import { useState } from 'react'

import { MenuIcon } from '@assets/common'
import SideMenu from '@components/common/SideMenu'
import { useThemeState } from '@contexts/ThemeContext'

const Header = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)
  const { name } = useThemeState()
  return (
    <HeaderWrap>
      <MenuIcon color="var(--white)" onClick={() => setIsSideMenuOpen(true)} />
      <Logo>{name}</Logo>
      <SideMenu
        isOpen={isSideMenuOpen}
        onClose={() => setIsSideMenuOpen(false)}
      />
    </HeaderWrap>
  )
}

const HeaderWrap = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 21px;
  width: 100%;
  height: 50px;
  background-color: var(--main);
  color: var(--white);
  svg {
    position: absolute;
    left: 3%;
    stroke: var(--white);
  }
`

const Logo = styled.span`
  font-size: 14px;
`

export default Header
