import React, { useState } from 'react'
import { Wrapper, Header, Content, Button, Alternatives, ForgotButton } from './common.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faGoogle, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { singInHandle, singUpHandle, providerSignIn, resetPassword } from "../utils/firebase";


function Auth() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [toggleAuthType, setToggleAuthType] = useState(false);

    const onChange = (type: string, event: any) => type === 'email' ? setEmail(event.target.value) : setPassword(event.target.value);

    const toggleAuthTypeHandler = () => { setToggleAuthType(!toggleAuthType) }


    return (
        <Wrapper onKeyDown={(e) => e.key === 'Enter' ? toggleAuthType ? singUpHandle(e, email, password) : singInHandle(e, email, password) : null}>
            <Header>{toggleAuthType ? "SIGN UP" : "SIGN IN TO YOUR ACCOUNT"} </Header>
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
                {toggleAuthType ? <Button onClick={(e) => singUpHandle(e, email, password)}>SIGN UP</Button> : <Button onClick={(e) => singInHandle(e, email, password)} > SIGN IN</Button>}
                {!toggleAuthType ? <ForgotButton onClick={(e) => resetPassword(e, email)}>Forgot your Password?</ForgotButton> : null}
                {!toggleAuthType ? <h2>OR</h2> : null}
                {!toggleAuthType ?
                    <Alternatives>
                        <FontAwesomeIcon onClick={(e) => providerSignIn(e, 'facebook')} icon={faFacebookSquare} />
                        <FontAwesomeIcon onClick={(e) => providerSignIn(e, 'google')} icon={faGoogle} />
                        <FontAwesomeIcon onClick={(e) => providerSignIn(e, 'twitter')} icon={faTwitterSquare} />
                    </Alternatives> : null}

                {toggleAuthType ? <Button onClick={toggleAuthTypeHandler}>Already have an Account? Sign In </Button> : <Button onClick={toggleAuthTypeHandler}>Don't have an Account? Sign Up</Button>}
            </Content>
        </ Wrapper >
    )
}

export default Auth