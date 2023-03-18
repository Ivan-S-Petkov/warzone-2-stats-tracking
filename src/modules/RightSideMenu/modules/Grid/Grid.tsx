import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faGear, faHome, faInfo, faKey, faSignOut, faStore, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import React, { useContext } from 'react'
import { UserContext } from 'src/Providers/user';
import styled from 'styled-components';
import { Content, Header, Wrapper } from '../../components/common.styled'
import Box from './components/Box';

function Grid() {

    const { authenticated, admin } = useContext(UserContext);

    const items: { name: string, image: IconProp, show: boolean }[] = [
        { name: 'HQ', image: faHome, show: true },
        { name: 'STORE', image: faStore, show: false || authenticated },
        { name: 'FRIENDS', image: faUserFriends, show: false || authenticated },
        { name: 'STATS', image: faInfo, show: false || authenticated },
        { name: 'SETTINGS', image: faGear, show: false || authenticated },
        { name: 'ADMIN', image: faKey, show: false || (authenticated && admin) },
        { name: 'SIGN OUT', image: faSignOut, show: false || authenticated },
    ]

    return (
        <Wrapper>
            <Header>Menu</Header>
            <ContentGrid>
                {items.map((item: any) => {
                    return item.show ? <Box name={item.name} image={item.image} ></Box> : '';
                })}
            </ContentGrid>
        </Wrapper>
    )
}

const ContentGrid = styled(Content)`
    margin-top: 2vh;
    flex-direction: row;
    flex-wrap: wrap;
    width: 77%;
`





export default Grid