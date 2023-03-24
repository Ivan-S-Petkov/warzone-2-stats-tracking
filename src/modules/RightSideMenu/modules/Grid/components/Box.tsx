import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { logOutHandle } from 'src/modules/User/utils/firebase'
import { AppContext } from 'src/Providers/global'
import styled from 'styled-components'

type Props = { name: string, image: IconProp }

function Box({ name, image }: Props) {

    const { showComponent, menuOff } = useContext(AppContext);
    const navigate = useNavigate();

    function showPage(name: string): void {

        switch (name) {
            case 'HQ':
                menuOff();
                navigate('/');
                break;
            case 'STORE':
                menuOff();
                navigate('store');
                break;
            case 'FRIENDS':
                showComponent('friends');
                break;
            case 'STATS':
                menuOff();
                navigate('stats');
                break;
            case 'SETTINGS':
                showComponent('settings');
                break;
            case 'ADMIN':
                menuOff();
                navigate('admin');
                break;
            case 'SIGN OUT':
                logOutHandle().then((res: any) => {
                    if (res) {
                        menuOff();
                        navigate('/');
                    }
                });

                break;
            default:
                break;
        }

    }

    return (
        <Content onClick={() => showPage(name)}>
            <Name>{name}</Name>
            <Icon><FontAwesomeIcon icon={image} /></Icon>
        </Content>
    )
}

const Content = styled.div`
    background-color: rgba(50,50,50,1);
    border: 2px solid rgba(120,120,120,1);
    border-radius: 6px;
    width: 6.8vw;
    height: 6.8vw;
    margin: 1%;
    display: flex;
    flex-direction: column-reverse;
    align-items:center;
    justify-content: flex-start;

    :hover{
        color: rgba(70,70,70,1);
        background-color: rgba(80, 210, 140, 1);
        border: 2px solid rgba(50, 120, 85, 1);
    }
`

const Name = styled.div`
    padding-bottom: 1vw;
`

const Icon = styled.div`
    font-size: 2.5vw;
`

export default Box