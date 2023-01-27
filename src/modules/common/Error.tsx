import React from 'react'
import styled from 'styled-components'

function Error(props: any) {

    function resetError() {
        props.resetError();
    };

    return (
        <Wrapper>
            <Content>
                <Line />
                <ErrorWrapper>
                    <ErrorText>{props.error.toUpperCase()}</ErrorText>
                    <Message>{props.message}</Message>
                    <Cross />
                </ErrorWrapper>
            </Content>
            <Button onClick={() => { resetError() }}>Close</Button>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: absolute;
    width: 50%;
    height: 40%;
    top: 50%;
    left: 50%;
    translate: -50%;
    transform: translateY(-50%);
    background: linear-gradient(
      0deg,
      rgba(40, 40, 40, 0.98) 0%,
      rgba(110, 110, 110, 0.98) 100%
    );
    border: 1px solid gray;
    border-radius: 10px;
    color: rgba(220, 220, 220, 0.98);
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Content = styled.div`
padding-left: 13%;
height: 60%;
display: flex;
`

const Line = styled.div`
border-left: 1px solid gray;
margin-bottom:3%;
`

const ErrorWrapper = styled.div`
    display:flex;
    flex-direction: column;
`

const ErrorText = styled.div`
    margin-top: 17px;
    background-color: rgba(80, 80, 80, 0.98);
    padding: 4px 14px 4px 34px;
    border-left: 3px solid gray;
    font-size: 22px;
    position: relative;
    left: -2px;
`

const Message = styled.div`
    margin-top: 15%;
    padding-left: 34px;
    font-size: 18px;
    color: rgba(200, 200, 200, 0.98);
    flex-grow: 1;
`

const Cross = styled.div`
    width: 13px;
    height: 13px;
    position: relative;
    bottom: 7%;
    left: -7px;


    :before, :after {
    content: "";
    position: absolute;
    z-index: -1;
    background: gray;
    }

    :before {
    left: 50%;
    width: 22%;
    margin-left: -11%;
    height: 100%;
    }

    :after {
    top: 50%;
    height: 22%;
    margin-top: -11%;
    width: 100%;
    }
`

const Button = styled.div`
    margin-left: 13%;
    padding: 5px 18px;
    background: linear-gradient(
      0deg,
      rgba(70, 70, 70, 0.6) 0%,
      rgba(90, 90, 90, 0.6) 100%
    );
    border: 1px solid  rgba(100, 100, 100, 0.6);
    border-radius: 4px;
    width: 140px;

    :hover {
        background-color: rgba(120, 255, 120, 1);
        color: rgba(35, 35, 35, 0.9);
    }

`

export default Error