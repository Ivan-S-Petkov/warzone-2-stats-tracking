import React, { useEffect, useState } from 'react'
import { getGames } from 'src/modules/Stats/utils/games';
import styled from 'styled-components'
import Box from '../../common/Box'
import { Content, Mark, Label, Line, Circle, ArrowUp } from './common.styled'

function Games() {

    const [games, setGames] = useState<Object[]>();

    useEffect(() => {
        getGames()
            .then((res) => { setGames(res) })
            .catch((err) => console.log(err)
            )

        return () => {

        }
    })

    return (
        <Wrapper>
            <Line lastPage={'last'} />
            <Content>
                <Mark><ArrowUp /><Label to='/hot'>WHAT'S HOT</Label> </Mark>
                <Wrapper></Wrapper>
                <Mark><Circle /><Label to='/games'>GAMES</Label> </Mark>
                {games ? games.map((game) => <Box game={game} />) : ''}
            </Content>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    flex-grow: 1;
    display: flex;
    margin-bottom: calc(min(24px, 1.4vw) + 6px + 2vh);
`


export default Games