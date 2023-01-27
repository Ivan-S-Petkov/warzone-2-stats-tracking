import React from 'react'
import BackButton from './components/BackButton'
import Logo from './components/Logo'

import Navigation from './components/Navigation'
import MenuNav from './components/Menu'
import styled from 'styled-components'


function Header() {


    return (
        <Wrapper>
            <Section>
                <BackButton />
                <Logo />
            </Section>
            <Section>
                <Navigation />
            </Section>
            <Section>
                <MenuNav type='short' />
            </Section>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 15px;
    width: 100vw;

`;
const Section = styled.div`
    display: flex;
    &:nth-child(1) {
        margin-left: 1vw;
    }
    &:nth-child(3) {
        margin-right: 2vw;
    }
`;



export default Header

