import React, { useEffect, useState } from 'react'
import { Game } from 'src/modules/Stats';
import { getGames } from 'src/modules/Stats/utils/games';
import styled from 'styled-components'
import Box from '../../common/Box'
import { Content, Mark, Label, Line, Circle, ArrowDown, ArrowUp } from './common.styled'

function Hot() {

    const [games, setGames] = useState<Game[]>();
    const [hovered, setHovered] = useState('');

    function filterHotGames(games: Game[]) {
        return games.filter((game: Game) => game.hot);
    }

    useEffect(() => {
        getGames()
            .then((res: any) => { setGames(filterHotGames(res)) })
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
            <Line lastPage={'middle'} />
            <Content>
                <Mark><ArrowUp /><Label to='/'>MESSAGE OF THE DAY</Label> </Mark>
                <Headline>
                    <h1>DMZ</h1>
                    <p>DMZ is an extraction royale mode for Call of Duty: Modern Warfare 2, free for all players. All players are thrown into Al Mazrah and have a limited window to scavenge supplies, complete faction missions, and defeat AI bosses before extracting. You get one life in this mode.</p>
                </Headline>
                <Mark><Circle /><Label to='/hot'>WHAT'S HOT</Label> </Mark>
                <GamesWrapper>{games ? games.map((game) => <Box key={game.name} game={game} hovered={hovered} hoverHandler={hoverHandler} />) : ''}</GamesWrapper>
                <Mark><ArrowDown /><Label to='/games'>GAMES</Label> </Mark>
            </Content>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    flex-grow: 1;
    display: flex;
`

const Headline = styled.div`
    flex-grow: 1;
    display:flex;
    flex-direction: column;
    justify-content: center;
    color: rgba(255,255,255,0.85);

    h1{
        font-size:min(200px, 6vw, 17vh);
        margin: 0px;
    }

    p{
        width: 35%;
        font-size:min(20px, 1.2vw, 2vh);
    }
`

const GamesWrapper = styled.div`
    display: flex;
`


export default Hot