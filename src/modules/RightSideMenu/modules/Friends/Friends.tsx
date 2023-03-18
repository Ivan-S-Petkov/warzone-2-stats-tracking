import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Content, Header, Wrapper } from '../../components/common.styled'
import FindList from './components/FindList';
import FriendsList from './components/FriendList';
import { getUsers } from './utils.tsx/users';

function Friends() {
    const [users, setUsers] = useState([]);
    const [list, setList] = useState(true);
    const [loading, setLoading] = useState(true);

    const setFriendList = (exp: boolean) => {
        setList(exp);
    }

    useEffect(() => {
        getUsers()
            .then((users: any) => {
                setUsers(users);
                setLoading(false);
            });
    }, []);

    return (
        <Wrapper>
            <Header>Friends</Header>
            <ContentFriends>
                <Menu>
                    <MenuNav className={list ? ' active' : ''} onClick={() => setList(true)}>List</MenuNav>
                    <MenuNav className={!list ? ' active' : ''} onClick={() => setList(false)}>Find</MenuNav>
                </Menu>
                {loading ? "Loading" :
                    list ? <FriendsList setFriendList={setFriendList} users={users} /> : <FindList setFriendList={setFriendList} users={users} />}
            </ContentFriends>
        </Wrapper>
    )
}

const ContentFriends = styled(Content)`
    width:88%;
    `

const Menu = styled.div`
    margin-top: 15px;
    display: flex;
    margin-bottom: 15px;
    justify-content: space-around;
    width: 50%;
    display: flex;
    border-radius: 4px;
    background-color: rgba(118, 118, 118, 1);
`

const MenuNav = styled.div`
  display: flex;
  width: 100%;
  font-weight: 500;
  text-transform: uppercase;
  padding: 5px;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 4px;
  justify-content: center;
  cursor: pointer;
  margin: 0px 0.2vw;
  padding: 0.2vh 1vw;
  color: white;
  background-color: rgba(118, 118, 118, 0.7);

  &.active {
    background-color: rgba(240, 240, 240, 0.9);
    color: rgba(25, 25, 25, 0.8);
  }

  &:hover {
    background-color: rgba(220, 220, 220, 0.8);
    color: rgba(35, 35, 35, 0.65);
  }
`;



export default Friends