import React, { useState } from 'react'
import styled from 'styled-components'
import { NavLink, } from 'react-router-dom'

function SideMenu() {

    const [showSideMenu, setShowSideMenu] = useState(0);

    function showSideLinks() {
        setShowSideMenu(1);
    }

    function hideSideLinks() {
        setShowSideMenu(0);
    }

    return (
        <Wrapper onMouseOver={() => showSideLinks()} onMouseLeave={() => hideSideLinks()}>
            <SideLink className="nav-link" to='' menu={showSideMenu}>{showSideMenu ? 'MESSAGE OF THE DAY' : ' '}</SideLink>
            <SideLink className="nav-link" to='hot' menu={showSideMenu}>{showSideMenu ? 'WHAT\'S HOT' : ' '}</SideLink>
            <SideLink className="nav-link" to='games' menu={showSideMenu}>{showSideMenu ? 'GAMES' : ' '}</SideLink>
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

const SideLink = styled(NavLink) < { menu: number }> `
    background-color: rgba(158,158,158,1);
    text-decoration: none;
    padding: ${({ menu }) => menu ? '30px 40px' : '30px 1px'};
    font-size: 24px;
    color: white;
    margin: 2px 0px;
    border-radius: 4px;
    white-space: break-spaces;

    &.active {
        background-color: rgba(240, 240, 240, 1);
        color: rgba(25, 25, 25, 0.8);
    }

    &:hover{
        background-color: rgba(120, 255, 120, 1);
        color: rgba(35, 35, 35, 0.65);
    }
`

export default SideMenu