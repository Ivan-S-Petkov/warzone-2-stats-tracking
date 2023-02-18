import React, { useContext, } from 'react'
import { Wrapper, Header, Content, Button } from './common.styled';
import { logOutHandle } from '../utils/firebase';
import { UserContext } from 'src/Providers/user'
import { AppContext } from 'src/Providers/global';
import styled from 'styled-components';

function Profile() {

    const { authenticated, user } = useContext(UserContext);
    const { setMenuError, showComponent } = useContext(AppContext);

    const logOutHandler = (e: any) => {
        e.preventDefault();

        logOutHandle().then((res: any) => {
            if (res) {
                let name = 'Error';
                let message = res.replace('Firebase: Error ', '');
                setMenuError({ name, message });
            }
        });
    }




    return (
        <Wrapper>
            <Header>Profile</Header>
            <Content>
                <p>Welcome, {user ? user.name || 'Solder' : 'Solder'}</p>

                <p>To start with you have to enter your gaming account. This could be done in the <Ref onClick={() => showComponent("settings")}>settings</Ref> menu, where you could customize even more features. </p>
                {authenticated ? <Button onClick={logOutHandler}> LOG OUT</Button> : null}

            </Content>
        </Wrapper >
    )
}

const Ref = styled.i`
    cursor: pointer;
    text-transform: uppercase;
`

export default Profile