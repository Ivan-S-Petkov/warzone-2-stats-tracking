import React from 'react'
import styled from 'styled-components'

type Props = {}

function FriendBox({ }: Props) {
    return (
        <Wrapper>FriendBox</Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: rgba(0,0,0,0.5);
    width: 31%;
    margin: 0.7vh 1%;
    height: 10vh;
    border-radius: 4px;
    border: 2px solid rgba(150,150,150,0.5);
    padding-left: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;

    :hover{
        border: 2px solid rgba(120, 255, 120, 0.5);
        border-left: 6px solid rgba(120, 255, 120, 0.5);
    }
`


export default FriendBox