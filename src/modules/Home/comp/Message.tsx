import React from 'react'
import styled from 'styled-components'
import MessageCard from './MessageCard'
import { Content, Mark, Label, Line, Circle, ArrowDown } from './common.styled'

function Message() {
    return (
        <Wrapper>
            <Line lastPage={'first'} />
            <Content>
                <Mark><Circle /><Label to='/'> MESSAGE OF THE DAY</Label> </Mark>
                <MessageCard />
                <Mark><ArrowDown /><Label to='hot'> WHAT'S HOT</Label> </Mark>
            </Content>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    flex-grow: 1;
    display: flex;
`

export default Message