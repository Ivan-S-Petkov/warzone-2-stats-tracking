import React from 'react'
import styled from 'styled-components'
import img from '../../../images/warzone-2-plane-jump.webp'

function MessageCard() {
    return (
        <Wrapper><img src={img} alt='img' /></Wrapper>
    )
}

const Wrapper = styled.div`
    flex-grow: 1;
    img{
        height:100%;
        width:auto;
    }
`

export default MessageCard