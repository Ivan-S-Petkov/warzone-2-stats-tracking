import React from 'react';
import background from './images/background1.jpg';
import './App.css';
import Header from './modules/Header';
import { createGlobalStyle } from "styled-components";


function App() {

  return (
    <div>
      <GlobalStyle />
      <Header />
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



export default App;
