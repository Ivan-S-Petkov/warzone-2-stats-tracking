import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

type Props = { game: any }
type Image = { image: string }

function Box({ game }: Props) {

    const link: string = '/stats/' + game.name;
    return (
        <Wrapper to={link}>
            <Content image={game.image}>
                <h4>{game.name}</h4>
                <p></p>
            </Content>
        </Wrapper>
    )
}

const Wrapper = styled(NavLink)`
    height: 21.4vh;
    width: 20%;
    border-radius: 4px;
    box-sizing: border-box;
    margin-left: 0.5vw;
    margin-right: 0.5vw;
    text-decoration: none;

    :hover{
        background-color: rgba(120, 255, 120, 1);
    }
`

const Content = styled.div<Image>`
    background-color: rgba(120,120,120, 0.9 );
    margin-top: 0.5vh;
    height: 18.5vh;
    color:white;
    background-image: linear-gradient(0deg, rgba(70,70,70,0.9444152661064426) 0%, rgba(173,173,173,0) 100%), url(${props => props.image || ''});
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content:end;
    align-items: center;
    font-size: min(35px, 2vw);
    text-shadow: 1px 1px 1px #000;
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