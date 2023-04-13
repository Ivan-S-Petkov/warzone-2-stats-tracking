import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Box from '../common/Box'
import { getGames } from './utils/games';

type Props = {}
export interface Game {
    name: string;
    image: string;
    description: string;
    hot: boolean;
}

function Stats({ }: Props) {

    const [games, setGames] = useState<Game[]>();
    const [hovered, setHovered] = useState('');

    useEffect(() => {
        //Fetch Games
        getGames().then((res) => {
            setGames(res);
            setHovered(res[0].name);
        }).catch((err) => {
            console.log(err);

        })
        return () => {

        }
    }, [])

    useEffect(() => {
        //Fetch Player Games Stats

        return () => {

        }
    }, [])

    const hoverHandler = (component: string) => {
        setHovered(component);
    }


    return (
        <Wrapper>
            <Content>
                <LifeTime>
                    <Personal>
                        <h1>{hovered}</h1>
                        <ModeStats>
                            <span>
                                <div>
                                    <h3>Time Played</h3>
                                    <h2>{ }</h2>
                                </div>
                                <div>
                                    <h3>Games Played</h3>
                                    <h2>{ }</h2>
                                </div>
                            </span>
                            <span>
                                <div>
                                    <h3>K/D Ratio</h3>
                                    <h2>{ }</h2>
                                </div>
                                <div>
                                    <h3>Win/Loss Ratio</h3>
                                    <h2>{ }</h2>
                                </div>
                            </span>
                        </ModeStats>
                    </Personal>
                    <Weapon>
                        LACKMANCH
                    </Weapon>
                </LifeTime>
                <Games>
                    {games ? games.map((game) => { return <Box game={game} hovered={hovered} hoverHandler={hoverHandler} /> }) : ''}
                </Games>
            </Content>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin: 1vh 2vw 1vh 9vw;
    display: flex;
    flex-grow: 1;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: space-between; 
    margin-bottom: 5vh;
`

const LifeTime = styled.div`
    display: flex;
    justify-content: space-between;
    
`

const Personal = styled.div`
    display: flex;
    flex-direction: column;
    width: 20vw;

    h1{
        font-size: 85px;
        color: white;
        text-shadow: 1px 1px 1px #000;
        text-transform: uppercase;
    }
`

const ModeStats = styled.div`
    text-shadow: 1px 1px 1px #000;

    span {
        display: flex;
        justify-content: space-between;
    }

    h2 {
        font-size: 32px;
        color: white;
    }

    h3 {
        font-size: 24px;
    }

`

const Weapon = styled.div`

`

const Games = styled.div`
display: flex;

`

export default Stats