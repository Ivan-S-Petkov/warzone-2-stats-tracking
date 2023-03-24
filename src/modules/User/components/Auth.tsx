import React, { useContext, useState } from 'react'
import { Wrapper, Header, ContentForm, Button, ForgotButton } from './common.styled';
import { singInHandle, singUpHandle, resetPassword } from "../utils/firebase";
import { AppContext } from 'src/Providers/global';
import SignInMethods from './SignInMethods';


function Auth() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [toggleAuthType, setToggleAuthType] = useState(false);

    const onChange = (type: string, event: any) => type === 'email' ? setEmail(event.target.value) : setPassword(event.target.value);

    const { setMenuError } = useContext(AppContext);


    const toggleAuthTypeHandler = () => { setToggleAuthType(!toggleAuthType) }

    const submitHandler = (e: any) => {
        e.preventDefault()
        if (email === '' || password === '') {
            setMenuError({ name: 'Error', message: 'Email and Password should not be empty.' });
        }
        else {
            const message = toggleAuthType ? singUpHandle(email, password) : singInHandle(email, password);
            message.then((res) => {
                if (res) {
                    let name = 'Error';
                    let message = res.replace('Firebase: Error ', '');
                    setMenuError({ name, message });
                }
            })
        }
    }

    const resetPasswordHandler = (e: any) => {

        if (email === '') {
            setMenuError({ name: 'Error', message: 'Email should not be empty.' });
        }
        else {
            resetPassword(email).then((res) => {
                if (res) {
                    let name = 'Error';
                    let message = res.replace('Firebase: Error ', '');
                    setMenuError({ name, message });
                }
            })
        }
    }


    return (
        <Wrapper>
            <Header>{toggleAuthType ? "SIGN UP" : "SIGN IN TO YOUR ACCOUNT"} </Header>
            <ContentForm onSubmit={submitHandler}>
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
                <Button type='submit'> {toggleAuthType ? 'SIGN UP' : 'SIGN IN'} </Button>
                {!toggleAuthType ? <ForgotButton onClick={resetPasswordHandler}>Forgot your Password?</ForgotButton> : null}
                {!toggleAuthType ? <h2>OR</h2> : null}
                {!toggleAuthType ?
                    <SignInMethods /> : null}

                {toggleAuthType ? <Button type='button' onClick={toggleAuthTypeHandler}>Already have an Account? Sign In </Button> : <Button type='button' onClick={toggleAuthTypeHandler}>Don't have an Account? Sign Up</Button>}
            </ContentForm>
        </ Wrapper >
    )
}

export default Auth