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

    const [games, setGames] = useState<Object[]>();

    useEffect(() => {
        //Fetch Games
        getGames().then((res) => {
            setGames(res);
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


    return (
        <Wrapper>
            <Content>
                <LifeTime>
                    <Personal>
                        Bla Bla
                    </Personal>
                    <Weapon>
                        LACKMANCH
                    </Weapon>
                </LifeTime>
                <Games>
                    {games ? games.map((game) => { return <Box game={game} /> }) : ''}
                </Games>
            </Content>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin: 1vh 1vw 1vh 9vw;
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
    flex-grow: 1;
    display: flex;
    
`

const Personal = styled.div`
    flex-grow: 1;

`

const Weapon = styled.div`

`

const Games = styled.div`
display: flex;

`

export default Stats