import React, { useEffect, useState } from 'react'
import { Game } from 'src/modules/Stats';
import { getGames } from 'src/modules/Stats/utils/games';
import styled from 'styled-components'
import Box from '../../common/Box'
import { Content, Mark, Label, Line, Circle, ArrowUp } from './common.styled'

function Games() {

    const [games, setGames] = useState<Game[]>();
    const [hovered, setHovered] = useState('');

    useEffect(() => {
        getGames()
            .then((res) => { setGames(res) })
            .catch((err) => console.log(err)
            )

        return () => {

        }
    }, [])

    const hoverHandler = (component: string) => {
        setHovered(component);
    }

    return (
        <Wrapper>
            <Line lastPage={'last'} />
            <Content>
                <Mark><ArrowUp /><Label to='/hot'>WHAT'S HOT</Label> </Mark>
                <Wrapper></Wrapper>
                <Mark><Circle /><Label to='/games'>GAMES</Label> </Mark>
                <GamesWrapper>{games ? games.map((game) => <Box key={game.name} game={game} hovered={hovered} hoverHandler={hoverHandler} />) : ''}</GamesWrapper>
            </Content>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    flex-grow: 1;
    display: flex;
    margin-bottom: calc(min(24px, 1.4vw) + 6px + 2vh);
`

const GamesWrapper = styled.div`
    display: flex;
`


export default Games