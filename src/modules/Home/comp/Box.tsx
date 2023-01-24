import React from 'react'
import styled from 'styled-components'
import img from '../../../images/DMZ.jpg'

function Box() {
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
    height: 23%;
    width: 20%;
    border-radius: 4px;
    box-sizing: border-box;

    :hover{
        background-color: rgba(120, 255, 120, 1);
    }
`

const Content = styled.div`
    height: 85%;
    margin: 7px 1px 15px 1px;
    color:white;
    display: flex;
    flex-direction: column;
    background-image: url(${img});
    background-size: cover;
    justify-content:end;
    align-items: center;
    font-size: 35px;
    border-radius: 2px;

    :hover{

    }

    h4{
        margin: 0px;
    }

    p{
        margin: 0px 0px 10px 0px;
        font-size: 25px;
    }
`

export default Box