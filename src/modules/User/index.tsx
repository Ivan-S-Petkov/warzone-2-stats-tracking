import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import styled from 'styled-components'
import { faFacebookSquare, faGoogle, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

function User() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onChange = (type: string, event: any) => type === 'email' ? setEmail(event.target.value) : setPassword(event.target.value);

    return (
        <Wrapper>
            <Header>SIGN IN TO YOUR ACCOUNT</Header>
            <Content>
                <p>Email Address</p>
                <input
                    type="text"
                    value={email}
                    onChange={(e) => onChange('email', e)}
                />
                <p>Password</p>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => onChange('password', e)}
                />
                <Button>SIGN IN</Button>

                <h2>OR</h2>
                <Alternatives>
                    <FontAwesomeIcon icon={faFacebookSquare} />
                    <FontAwesomeIcon icon={faGoogle} />
                    <FontAwesomeIcon icon={faTwitterSquare} />
                </Alternatives>
            </Content>

        </Wrapper>
    )
}

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    width: 100%;
`

const Header = styled.div`
    display: flex;
    justify-content: center;
    border-bottom: 1px solid rgba(130,130,130,1);
    font-size: min(24px, 1.5vw);
    letter-spacing: 0.1vw;
    margin: 1vh 0;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 65%;
    align-self: center;
    align-items: center;
    margin-top: 4vh;
    
    p {
        margin-bottom: 5px;
        font-size: max(14px, 0.8vw);
    }


    input {
    background-color: #d8d8d8 !important;
    display: inline-block;
    width: 100%;
    border: none;
    border-radius: 3px;
    font-size: min(15px, 2vw);
    line-height: 19px;
    color: #000;
    margin: 0;
    padding: 9px 13px;
    box-sizing: border-box;
    }
`

const Button = styled.div`
    box-sizing:border-box;
    margin-top: 2vh;
    display: flex;
    width: 100%;
    font-size: 18px;
    text-transform: uppercase;
    padding: 5px;
    color: #ffffff;
    background-color: #242424;
    border: 1px solid #81898c;
    border-radius: 3px;
    justify-content: center;
    cursor: pointer;

    :hover{
        background-color: rgba(130,130,130,1);
        border: 1px solid #81898c;
        color: #ffffff;
    }
`

const Alternatives = styled.div`
    display: flex;
    font-size: min(50px, 3vw);
    
    

    svg{
        padding: 1vh 1vw;
        margin: 0px 1px;
        border-radius: 3px;
        cursor: pointer;

        :hover{
            background-color: rgba(130,130,130,1);
            color: white;
        }
    }

`

export default User