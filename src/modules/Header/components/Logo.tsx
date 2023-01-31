import React from 'react'
import styled from 'styled-components'
import logo from '../static/logo.png'

function Logo() {
  return (
    <LogoWrapper><Image src={logo} alt="logo" /></LogoWrapper>
  )
}

const LogoWrapper = styled.div`
padding-left: 2vw;
`;

const Image = styled.img`
  max-height: 90px;
  width: auto;
  max-width: 13vw;
`;

export default Logo