import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import Box from './Box'

function Games() {

    return (
        <Wrapper>
            <Line />
            <Content>
                <Mark><ArrowUp /><Label to='/hot'>WHAT'S HOT</Label> </Mark>
                <Wrapper></Wrapper>
                <Mark><Circle /><Label to='/games'>GAMES</Label> </Mark>
                <Box></Box>
            </Content>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    flex-grow: 1;
    display: flex;
    margin-bottom: 40px;
`
const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
`
const Mark = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
`

const Label = styled(NavLink)`
    margin: 20px 0px;
    font-size: 24px;
    padding: 2px 15px;
    text-decoration: none;
    color: white;
    border-radius: 4px;
    background-color: rgba(120,120,120,0.7);
    color: rgba(250,250,250,0.9);
    border: 1px solid rgba(158,158,158,0.7);

    &.active {
        background-color: rgba(240, 240, 240, 0.9);
        color: rgba(25, 25, 25, 0.8);
    }

    &:not(.active):hover{
        background-color: rgba(120, 255, 120, 1);
        color: rgba(35, 35, 35, 0.8);
    }


`
const Line = styled.div`
    margin: 54px 20px 300px 20px;
    border-right: rgba(80, 80, 80, 0.9) solid 2px;
    display: flex;
    flex-direction: column;
    justify-content: space - between;
`

const Circle = styled.div`
    position: relative;
    left: -27px;
    border-radius: 50%;
    height: 12px;
    width: 12px;
    background-color: rgba(240, 240, 240, 0.9);
`

const ArrowDown = styled.div`
    position: relative;
    left: -27px;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 12px solid rgba(158, 158, 158, 0.7);
`
const ArrowUp = styled(ArrowDown)`
    rotate: 180deg;
`


export default Games