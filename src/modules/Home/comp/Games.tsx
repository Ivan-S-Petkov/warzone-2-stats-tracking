import React from 'react'
import styled from 'styled-components'
import Box from './Box'
import { Content, Mark, Label, Line, Circle, ArrowUp } from './common.styled'

function Games() {

    return (
        <Wrapper>
            <Line lastPage={'last'} />
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
    margin-bottom: calc(min(24px, 1.4vw) + 6px + 2vh);
`


export default Games