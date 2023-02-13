import React, { useContext, } from 'react'
import { Wrapper, Header, Content, Button } from './common.styled';
import { logOutHandle } from '../utils/firebase';
import { UserContext } from 'src/Providers/user'
import { AppContext } from 'src/Providers/global';

function Profile() {

    const { authenticated, user } = useContext(UserContext);
    const { setMenuError } = useContext(AppContext);

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

    console.log(user);


    return (
        <Wrapper>
            <Header>Profile</Header>
            <Content>
                <p>Welcome, {user.displayName ? user.displayName : 'Solder'}</p>

                <p>To start with you have to enter your gaming account. This could be done in the settings menu, where you could customize even more features. </p>
                {authenticated ? <Button onClick={logOutHandler}> LOG OUT</Button> : null}

            </Content>
        </Wrapper >
    )
}

export default Profile