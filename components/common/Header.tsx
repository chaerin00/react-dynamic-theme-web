import styled from '@emotion/styled'
import { MenuIcon } from '@assets/common'

type HeaderProps = {
  name: string
}

const Header = ({ name }: HeaderProps) => {
  return (
    <HeaderWrap>
      <MenuIcon color="var(--white)" />
      <Logo>{name}</Logo>
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
