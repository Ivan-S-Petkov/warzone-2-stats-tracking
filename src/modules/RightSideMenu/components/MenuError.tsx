import React, { useContext } from 'react'
import { AppContext } from 'src/Providers/global'
import styled from 'styled-components'

function MenuError() {

    const { menuError, setMenuError } = useContext(AppContext);

    const closeHandler = () => {
        setMenuError(null);
    }

    return (
        <Wrapper onClick={closeHandler}>
            {menuError ?
                <Content>
                    <Header>{menuError.name}</Header>
                    <p>{menuError.message}</p>
                </Content>
                : null}
            <button onClick={closeHandler}>x</button>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    box-sizing: border-box;
    display: block;
    position: relative;
    justify-content: center;
    background-color: rgba(75,75,75,1);
    border-bottom: 1px solid rgba(130,130,130,1);
    width: 100%;
    cursor: pointer;

    button {
        position: absolute;
        top: 0px;
        right: 0px;
    }
`
const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    `

const Header = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid rgba(130, 130, 130, 1);
  font-size: min(24px, 1.5vw);
  letter-spacing: 0.1vw;
  padding: 0.6vh 0;
`;



export default MenuError