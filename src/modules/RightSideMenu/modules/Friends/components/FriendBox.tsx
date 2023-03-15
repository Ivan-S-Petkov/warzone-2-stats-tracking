import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react'
import { UserContext } from 'src/Providers/user'
import styled from 'styled-components'
import { addFriend, removeFriend } from '../api/firestore';

type Props = { userFound: any, add: boolean, setFriendList: any }

function FriendBox({ userFound, add, setFriendList }: Props) {

    const { user, getUserData } = useContext(UserContext);

    const addHandler = () => {
        addFriend(user, userFound.id)
            .then((res) => {
                if (user?.id) {
                    getUserData(user.id);
                    console.log("Get User Data");
                }
                setFriendList(true);
            })
            .catch((err) => console.log(err))
    }

    const removeHandler = () => {
        removeFriend(user, userFound.id)
            .then((res) => {
                if (user?.id) {
                    getUserData(user.id);
                    console.log("Get User Data");
                }
            })
            .catch((err) => console.log(err))
    }

    return (
        <Wrapper>
            <Content>
                <Name>{userFound.name!}</Name>
                <Email>{userFound.email!}</Email>
                <Account>{userFound.accountName!}</Account>
                {add ?
                    <Add onClick={addHandler}><FontAwesomeIcon icon={faPlus} /></Add> :
                    <Remove onClick={removeHandler}><FontAwesomeIcon icon={faMinus} /></Remove>}
            </Content>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: rgba(0,0,0,0.5);
    width: 31.4%;
    margin: 0.7vh 0.4%;
    height: 10vh;
    border-radius: 4px;
    border: 2px solid rgba(150,150,150,0.5);
    display: flex;
    align-items: center;

    :hover{
        background-color: rgba(80, 210, 140, 1);
        border: 2px solid rgba(80, 210, 140, 1);
    }
`

const Content = styled.div`
    margin: 1px 1px 1px 8px;
    background-color: rgba(40,40,40,1);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10px;
    position: relative;
    font-size: min(15px, 1.9vw);
`

const Name = styled.div`
overflow-wrap: break-word;
`

const Email = styled.div`
overflow-wrap: anywhere;
`

const Account = styled.div`
overflow-wrap: anywhere;
`

const Add = styled.div`
position: absolute;
top: 0px;
right: 3px;
font-size: 18px;
font-weight: bold;

    :hover{
        color: rgba(80, 210, 140, 1);
    }
`

const Remove = styled(Add)`
`


export default FriendBox