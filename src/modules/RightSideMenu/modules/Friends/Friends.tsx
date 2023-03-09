import React, { useState } from 'react'
import styled from 'styled-components'
import { MenuNav, Content, Header, Wrapper } from '../../components/common.styled'
import FindList from './components/FindList';
import FriendsList from './components/FriendList';

function Friends() {

    const [list, setList] = useState(true);

    const setFriendList = (exp: boolean) => {
        setList(exp);
    }

    return (
        <Wrapper>
            <Header>Friends</Header>
            <ContentFriends>
                <Menu>
                    <MenuNav className={list ? ' active' : ''} onClick={() => setList(true)}>List</MenuNav>
                    <MenuNav className={!list ? ' active' : ''} onClick={() => setList(false)}>Find</MenuNav>
                </Menu>
                {list ? <FriendsList setFriendList={setFriendList} /> : <FindList setFriendList={setFriendList} />}
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
    display: flex;
    border-radius: 4px;
    background-color: rgba(118, 118, 118, 1);
`



export default Friends