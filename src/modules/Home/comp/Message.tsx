import React from 'react'
import styled from 'styled-components'
import MessageCard from './MessageCard'

function Message() {
    return (
        <Wrapper>
            <Line />
            <div>
                <div><Circle /> <p> MESSAGE OF THE DAY</p> </div>
                <MessageCard />
                <div><ArrowDown /> <p> WHAT IS HOT</p> </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    flex-grow: 1;
    display: flex;

    div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        div{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: left; 
            p{
                font-size: 24px;
                padding: 2px 15px;
                text-decoration: none;
                color: white;
                background-color: rgba(240, 240, 240, 0.9);
                color: rgba(25, 25, 25, 0.8);
                border-radius: 4px;
            }
        }
    }

`

const Line = styled.div`
    margin: 42px 20px 54px 20px;
    border-right: rgba(80, 80, 80, 0.9) solid 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

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
    border-top: 12px solid rgba(158,158,158,0.7);;
`

export default Message