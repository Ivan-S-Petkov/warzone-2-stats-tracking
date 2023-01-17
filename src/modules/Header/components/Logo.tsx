import React from 'react'
import styled from 'styled-components'
import logo from '../static/logo.png'

function Logo() {
  return (
    <LogoWrapper><Image src={logo} alt="logo" /></LogoWrapper>
  )
}

const LogoWrapper = styled.div`
padding-left: 50px;
`;

const Image = styled.img`
  max-height: 90px;
`;

export default Logo