import React, { useContext } from 'react'
import BackButton from './components/BackButton'
import Logo from './components/Logo'
import LongMenu from './components/LongMenu'
import Navigation from './components/Navigation'
import MenuNav from './components/MenuNav'
import styled from 'styled-components'
import { AppContext } from 'src/Providers/global'

interface IShowMenu {
    showMenu: boolean;
}

function Header() {

    const { showMenu, menuOff } = useContext(AppContext);

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
            <LongMenu />
            <NotLongMenu onClick={() => menuOff()} showMenu={showMenu} />
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
        min-width: 250px;
        width: 25%;
    }
`;

const NotLongMenu = styled.div<IShowMenu> `
top: 0px;
left: 0px;
position: absolute;
height: 100vh;
width: 100vw;
z-index: 1;
visibility:  ${({ showMenu }) => (showMenu ? 'visible' : 'hidden')};
background-color: rgba(0,0,0,0.5);
`

export default Header

