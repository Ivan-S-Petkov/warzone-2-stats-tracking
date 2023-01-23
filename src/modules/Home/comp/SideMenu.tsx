import React, { useState } from 'react'
import styled from 'styled-components'
import { NavLink, } from 'react-router-dom'

interface ISideMenu {
    sideMenu: boolean;
}

function SideMenu() {

    const [sideMenu, setSideMenu] = useState(false);

    function showSideLinks() {
        setSideMenu(true);
    }

    function hideSideLinks() {
        setSideMenu(false);
    }

    return (
        <Wrapper onMouseOver={() => showSideLinks()} onMouseLeave={() => hideSideLinks()}>
            <SideLink className="nav-link" to='' sideMenu={sideMenu}>{sideMenu ? 'MESSAGE OF THE DAY' : ' '}</SideLink>
            <SideLink className="nav-link" to='hot' sideMenu={sideMenu}>{sideMenu ? 'WHAT\'S HOT' : ' '}</SideLink>
            <SideLink className="nav-link" to='games' sideMenu={sideMenu}>{sideMenu ? 'GAMES' : ' '}</SideLink>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: absolute;
    left: 0px;
    top: 0px;
    display:flex;
    flex-direction: column;
    top: 50%;
    transform: translate(0, -50%);
`

const SideLink = styled(NavLink) <ISideMenu>`
    background-color: rgba(158,158,158,1);
    text-decoration: none;
    padding: ${({ sideMenu }) => sideMenu ? '30px 40px' : '30px 1px'};
    font-size: 24px;
    color: white;
    margin: 2px 0px;
    border-radius: 4px;
    white-space: break-spaces;

    &.active {
        background-color: rgba(240, 240, 240, 1);
        color: rgba(25, 25, 25, 0.8);
        border-radius: 4px;
    }

    &:hover{
        background-color: rgba(120, 255, 120, 1);
        color: rgba(35, 35, 35, 0.65);
        border-radius: 4px;
    }
`

export default SideMenu