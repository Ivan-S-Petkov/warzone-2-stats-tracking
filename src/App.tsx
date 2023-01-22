import React, { useContext } from 'react';
import background from './images/background1.jpg';
import './App.css';
import Header from './modules/Header';
import styled, { createGlobalStyle } from "styled-components";
import { AppContext } from './Providers/global';
import LongMenu from './modules/Header/components/LongMenu';
import Home from './modules/Home';
import { Routes, Route } from 'react-router-dom'

interface IShowMenu {
  showMenu: boolean;
}

function App() {

  const { showMenu, menuOff } = useContext(AppContext);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <LongMenu />
      <LongMenuBackground onClick={() => menuOff()} showMenu={showMenu} />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
   body {
    max-width: 2560px;
    background-image: url(${background});
    background-size: cover;
    color: lightgrey;
    //font-family: 'Sarpanch', sans-serif;
    font-family: 'Kanit', sans-serif;
   }
`;

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
