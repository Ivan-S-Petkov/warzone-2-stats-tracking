import React from 'react';
import SideMenu from "./comp/SideMenu";
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import styled from "styled-components";
import { isMobileOnly, useMobileOrientation } from 'react-device-detect';

function Home() {

    const { pathname } = useLocation();
    const navigate = useNavigate();
    const { isLandscape } = useMobileOrientation()

    if (isMobileOnly) {
        throw new Error('We are sorry but this app is not mobile Friendly! Please switch to Desktop ot Tablet version.');
    }
    else {
        if (!isLandscape) {
            throw new Error('Please switch to Landscape orientation for best UX.');
        }
    }

    function scrollHandler(direction: string, currentPath: string) {

        const paths = ['/', '/hot', '/games'];
        const index: number = paths.indexOf(currentPath);

        if (direction === 'up' && index > 0) {
            navigate(paths[index - 1]);
        }
        if (direction === 'down' && index < paths.length - 1) {
            navigate(paths[index + 1]);
        }

    }

    return (
        <Wrapper>
            <StyledReactScrollWheelHandler
                upHandler={() => scrollHandler('up', pathname)}
                downHandler={() => scrollHandler('down', pathname)}
            >
                <SideMenu />
                <Content>
                    <Outlet />
                </Content>
            </StyledReactScrollWheelHandler>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;

`

const StyledReactScrollWheelHandler = styled(ReactScrollWheelHandler)`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
`

const Content = styled.div`
    flex-grow: 1;
    margin-left: 7vw;
    margin-top: 1vh;
    display: flex;
    flex-direction: column;
`



export default Home;