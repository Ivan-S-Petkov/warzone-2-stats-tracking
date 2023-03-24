import React, { useContext, useState } from 'react'
import { NoResults } from 'src/modules/RightSideMenu/components/common.styled';
import { UserContext, UserDB } from 'src/Providers/user';
import styled from 'styled-components';
import { filteredUsers } from '../utils.tsx/users';
import FriendBox from './FriendBox'

type Props = { users: UserDB[], setFriendList: any }

function FindList({ users, setFriendList }: Props) {
    const { user } = useContext(UserContext);
    const [searchString, setSearchString] = useState('');
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState<UserDB[]>([]);

    function searchHandler(e: any) {
        console.log("Filter Search");

        setSearchString(e.target.value)
        if (searchString.length > 2) {
            setLoading(true);
            let filteredResults: UserDB[] = filteredUsers(user, users, searchString);
            setResults(filteredResults);
            setLoading(false);
        }
    }




    return (
        <Wrapper><p>Search by name, accountName or email.</p>
            <input
                type="text"
                value={searchString}
                onChange={(e) => searchHandler(e)}
            />
            {searchString.length > 3 && results.length === 0 && !loading ? <NoResults>No solders found!</NoResults> :
                loading ? <NoResults>Loading</NoResults> :
                    <Results>
                        {results.map(function (userFound, i) {
                            return <FriendBox key={i} userFound={userFound} add={true} setFriendList={setFriendList} />
                        })}
                    </Results>
            }
        </Wrapper >
    )
}

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input {
    background-color: #d8d8d8 !important;
    display: inline-block;
    width: 50%;
    
    border: none;
    border-radius: 3px;
    font-size: min(15px, 2vw);
    line-height: 19px;
    color: #000;
    margin-bottom: 14px;
    padding: 9px 13px;
    box-sizing: border-box;
  }
`

const Results = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 100%;
    overflow-y: auto;
`

export default FindList