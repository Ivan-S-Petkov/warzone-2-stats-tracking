import React from 'react'
import styled from 'styled-components'
import { Button, Content, Header, Wrapper } from './common.styled'
import FriendBox from './FriendBox'

function Friends() {
    return (
        <Wrapper>
            <Header>Friends</Header>
            <ContentFriends>
                <Menu>
                    <Button type='button'>List</Button>
                    <Button type='button'>Find</Button>
                </Menu>
                <FriendsList>
                    <FriendBox /><FriendBox /><FriendBox /><FriendBox /><FriendBox /><FriendBox />
                </FriendsList>
            </ContentFriends>
        </Wrapper>
    )
}

const ContentFriends = styled(Content)`
    width:88%;
    `

const Menu = styled.div`
    display: flex;
    margin-bottom: 5px;
    justify-content: space-around;
    width: 50%;
`

const FriendsList = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    flex-direction: row;
`

export default Friends