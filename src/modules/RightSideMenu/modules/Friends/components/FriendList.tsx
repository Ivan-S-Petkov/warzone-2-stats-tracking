import React, { useContext, useState } from 'react'
import { NoResults } from 'src/modules/RightSideMenu/components/common.styled';
import { UserContext, UserDB } from 'src/Providers/user';
import styled from 'styled-components';
import { filterFriendsList, getUsers } from '../utils.tsx/users';
import FriendBox from './FriendBox';

type Props = { setFriendList: any }

function FriendsList({ setFriendList }: Props) {
    const { user, getUserData } = useContext(UserContext);

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [results, setResults] = useState<UserDB[]>([]);

    getUsers()
        .then((users: any) => {
            setUsers(users);
            let filteredResults: UserDB[] = filterFriendsList(user, users);
            setResults(filteredResults);
            setLoading(false);
        })

    return (
        <FriendList>
            {results.length > 0 ?
                <Results>
                    {results.map(function (userFound, i) {
                        return <FriendBox userFound={userFound} add={false} setFriendList={setFriendList} />
                    })}
                </Results>
                : <NoResults>No friends yet. Click <span style={{ cursor: "pointer" }} onClick={() => setFriendList(false)}>Find</span> to add!</NoResults>}
        </FriendList>
    )
}

const Results = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 100%;
    overflow-y: auto;
`

const FriendList = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    flex-direction: row;
    width: 100%;
    overflow-y: auto;
`
export default FriendsList