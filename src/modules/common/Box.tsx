import React from 'react'
import styled from 'styled-components'
import img from '../../images/DMZ.jpg'
import { Game } from '../Stats'

type Props = { game: any }

function Box({ game }: Props) {
    return (
        <Wrapper>
            <Content>
                <h4>DMZ</h4>
                <p>Warzone</p>
            </Content>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 21.4vh;
    width: 20%;
    border-radius: 4px;
    box-sizing: border-box;

    :hover{
        background-color: rgba(120, 255, 120, 1);
    }
`

const Content = styled.div`
    margin-top: 0.5vh;
    height: 18.5vh;
    color:white;
    background-image: url(${img});
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content:end;
    align-items: center;
    font-size: min(35px, 2vw);
    border-radius: 2px;

    :hover{

    }

    h4{
        margin: 0px;
    }

    p{
        margin: 0px 0px 10px 0px;
        font-size: min(25px, 1.4vw);
    }
`

export default Box