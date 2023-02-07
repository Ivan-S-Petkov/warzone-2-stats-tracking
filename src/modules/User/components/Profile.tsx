import React, { useContext } from 'react'
import { Wrapper, Header, Content, Button, Alternatives } from './common.styled';
import { logOutHandle } from '../utils/firebase';
import { UserContext } from 'src/Providers/user'

type Props = {}

function Profile({ }: Props) {

    const { authenticated, user } = useContext(UserContext);

    return (
        <Wrapper>
            <Header>Profile</Header>
            <Content >
                <p>Welcome, </p>

                <p>Password</p>
                {authenticated ? <Button onClick={logOutHandle}> LOG OUT</Button> : null}

            </Content>
        </Wrapper >
    )
}



export default Profile