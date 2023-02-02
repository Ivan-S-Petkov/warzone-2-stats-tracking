import React from 'react'
import styled from 'styled-components'
import img from '../../../images/warzone-2-plane-jump.webp'

function MessageCard() {
    return (
        <Wrapper>
            <Content>
                <h1>Warzone 2.0 Season 2</h1>
                <p>Warzone 2 Season 2 is on the horizon and while the major update has been delayed, we’ve got an early look ahead at everything set to arrive as part of the next content drop. From a new Resurgence map to additional weapons and more, here’s all there is to know.</p>
            </Content>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-image: linear-gradient(195deg, rgb(255, 255, 252 , 0) 25% ,rgb(20, 20, 20, 1))  , url(${img});
    background-size: cover;
    flex-grow: 1;
    display: flex;
    position: relative;
    margin-right: 60px;
    align-items: end;
    z-index: -1;
`

const Content = styled.div`
    margin-left: 80px;
    margin-bottom: 80px;
    display: flex;
    flex-direction: column;
    width: 35%;
    font-size:min(22px, 1.5vw, 2vh);

    p{
        margin: 0px;
    }

`

export default MessageCard