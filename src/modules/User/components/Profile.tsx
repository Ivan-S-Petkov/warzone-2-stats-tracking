import React, { useContext, } from 'react'
import { Wrapper, Header, Content, Button } from './common.styled';
import { logOutHandle } from '../utils/firebase';
import { UserContext } from 'src/Providers/user'

function Profile() {

    const { authenticated, user } = useContext(UserContext);

    return (
        <Wrapper>
            <Header>Profile</Header>
            <Content >
                <p>Welcome, {user && user.displayName ? user.displayName : 'Solder'}</p>

                <p>To start with you have to enter your gaming account. This could be done in the settings menu, where you could customize even more features. </p>
                {authenticated ? <Button onClick={logOutHandle}> LOG OUT</Button> : null}

            </Content>
        </Wrapper >
    )
}

export default Profile