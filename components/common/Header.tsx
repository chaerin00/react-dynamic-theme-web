import styled from '@emotion/styled'
import { MenuIcon } from '@assets/common'
import { Theme } from 'lib/api/theme'

type HeaderProps = {
  theme: Theme
}

const Header = ({ theme }: HeaderProps) => {
  console.log(theme)
  return (
    <HeaderWrap>
      <MenuIcon color="var(--white)" />
      <Logo>쏘크라테스 떡볶이</Logo>
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
