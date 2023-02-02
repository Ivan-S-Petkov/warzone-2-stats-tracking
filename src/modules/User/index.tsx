import React, { useDebugValue, useState } from 'react'
import styled from 'styled-components'

function User() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onChange = (type: string, event: any) => type === 'email' ? setEmail(event.target.value) : setPassword(event.target.value);

    return (
        <Wrapper>
            <Header>SIGN IN TO YOUR ACCOUNT</Header>

            Email Address:
            <input
                type="text"
                value={email}
                onChange={(e) => onChange('email', e)}
            />
            Password:
            <input
                type="password"
                value={password}
                onChange={(e) => onChange('password', e)}
            />

            <Button>SIGN IN</Button>
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
border-bottom: 1px solid rgba(130,130,130,1);;
font-size: min(24px, 1.5vw);
letter-spacing: 0.2vw;
`

const Button = styled.div`
`

export default User