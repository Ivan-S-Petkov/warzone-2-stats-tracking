import React, { useContext } from 'react'
import styled from 'styled-components'
import { UserContext } from 'src/Providers/user';
import Profile from './components/Profile';
import Auth from './components/Auth';


function User() {

    const { authenticated } = useContext(UserContext);

    return (
        <Wrapper>
            {authenticated ? <Profile /> : <Auth />}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    width: 100%;
`

export default User