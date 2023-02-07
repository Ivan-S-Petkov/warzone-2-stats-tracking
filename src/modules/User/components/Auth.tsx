import React, { useContext, useState } from 'react'
import { Wrapper, Header, Content, Button, Alternatives } from './common.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faGoogle, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { logOutHandle, singInHandle, singUpHandle } from "../utils/firebase";
import { UserContext } from 'src/Providers/user';

type Props = {}

function Auth({ }: Props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onChange = (type: string, event: any) => type === 'email' ? setEmail(event.target.value) : setPassword(event.target.value);
    const { authenticated } = useContext(UserContext);


    return (
        <Wrapper>
            <Header>SIGN IN TO YOUR ACCOUNT</Header>
            <Content >
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
                {authenticated === false ? <Button onClick={(e) => singInHandle(e, email, password)}>SIGN IN</Button> : null}
                {authenticated === false ? <Button onClick={(e) => singUpHandle(e, email, password)}>SIGN UP</Button> : null}

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

export default Auth