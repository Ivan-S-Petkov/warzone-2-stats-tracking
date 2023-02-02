import React, { useContext } from 'react';
import './utils/firebase';
import background from './images/background1.jpg';
import './App.css';
import Header from './modules/Header';
import styled, { createGlobalStyle } from "styled-components";
import { AppContext } from './Providers/global';
import LongMenu from './modules/RightSideMenu';
import Home from './modules/Home';
import { Routes, Route } from 'react-router-dom'
import Hot from './modules/Home/comp/Hot';
import Games from './modules/Home/comp/Games';
import Message from './modules/Home/comp/Message';
import ErrorBoundary from './modules/common/ErrorBoundary';

interface IShowMenu {
  showMenu: boolean;
}

function App() {

  const { showMenu, menuOff } = useContext(AppContext);

  return (
    <Wrapper>
      <GlobalStyle />
      <Header />
      <LongMenu />
      <LongMenuBackground onClick={() => menuOff()} showMenu={showMenu} />
      <ErrorBoundary>
        <Routes>
          <Route path="" element={<Home />} >
            <Route index element={<Message />} />
            <Route path="message" element={<Message />} />
            <Route path="hot" element={<Hot />} />
            <Route path="games" element={<Games />} />
          </Route>
        </Routes>
      </ErrorBoundary>
    </Wrapper>
  );
}

const GlobalStyle = createGlobalStyle`
   body {
    max-width: 2560px;
    width: 100vw;
    height: 100vh;
    background-image: url(${background});
    background-size: cover;
    color: lightgrey;
    //font-family: 'Sarpanch', sans-serif;
    font-family: 'Kanit', sans-serif;
    margin:0;
    padding:0;
   }
`;

const Wrapper = styled.div`
   min-height: 100vh;
   display: flex;
   flex-direction: column;
`

const LongMenuBackground = styled.div<IShowMenu> `
top: 0px;
left: 0px;
position: absolute;
height: 100vh;
width: 100vw;
z-index: 1;
visibility:  ${({ showMenu }) => (showMenu ? 'visible' : 'hidden')};
background-color: rgba(0,0,0,0.5);
`

export default App;
