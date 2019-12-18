import React from 'react'
import Logo from '../atoms/Logo'
import Description from '../atoms/Description'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo></Logo>
      <Description></Description>
    </HeaderWrapper>
  )
}

export default Header
