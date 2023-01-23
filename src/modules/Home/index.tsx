import SideMenu from "./comp/SideMenu";
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import React, { useEffect } from 'react';
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import styled from "styled-components";

function Home() {

    const { pathname } = useLocation();
    const navigate = useNavigate();

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
    margin-left: 110px;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
`



export default Home;