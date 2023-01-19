import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

function SideMenu() {
    return (
        <Wrapper>
            <SideLink className="nav-link" to='/'>MESSAGE OF THE DAY</SideLink>
            <SideLink className="nav-link" to='/home/hot'>WHAT'S HOT</SideLink>
            <SideLink className="nav-link" to='/home/games'>GAMES</SideLink>
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

const SideLink = styled(NavLink)`
    background-color: rgba(158,158,158,0.7);
    text-decoration: none;
    padding: 40px 40px;
    font-size: 24px;
    color: white;
    margin: 2px 0px;
    border-radius: 4px;

    &.active {
        background-color: rgba(240, 240, 240, 0.9);
        color: rgba(25, 25, 25, 0.8);
        border-radius: 4px;
    }

    &:hover{
        background-color: rgba(220, 220, 220, 0.8);
        color: rgba(35, 35, 35, 0.65);
        border-radius: 4px;
    }
`

export default SideMenu