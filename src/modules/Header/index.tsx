import React from 'react'
import BackButton from './components/BackButton'
import Logo from './components/Logo'
import LongMenu from './components/LongMenu'
import Navigation from './components/Navigation'
import ShortMenu from './components/ShortMenu'
import styled from 'styled-components';

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
                <ShortMenu />
            </Section>
            <LongMenu />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 15px;
`;
const Section = styled.div`
    display: flex;
    &:nth-child(1) {
        margin-left: 40px;
    }
    &:nth-child(3) {
        margin-right: 40px;
    }
`;

export default Header

