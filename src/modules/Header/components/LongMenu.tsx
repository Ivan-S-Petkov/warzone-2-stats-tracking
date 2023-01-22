import React, { useContext } from 'react'
import { AppContext } from 'src/Providers/global';
import styled from 'styled-components'
import MenuNav from './MenuNav'

interface iShow {
  showSideMenu: boolean,
}

function LongMenu() {

  const { showMenu } = useContext(AppContext);

  return (
    <LongMenuWrapper showSideMenu={showMenu}>
      <Section>
        <MenuNav type='long' />
      </Section>
      <Section>

      </Section>
      <Section>
        React
      </Section>
    </LongMenuWrapper>
  )
}

const LongMenuWrapper = styled.div<iShow>`
  z-index:2;
  top: 0px;
  right: 40px;
  min-width: 250px;
  width: 25%;
  height: 100%;
  border-left: 2px solid rgba(130,130,130,1);
  border-right: 2px solid rgba(130,130,130,1);
  background-color: rgba(75,75,75,1);
  visibility:  ${({ showSideMenu }) => (showSideMenu ? 'visible' : 'hidden')};
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  :first-of-type{
  background-color: rgba(90,90,90,1);
  height:130px;
  }
  
  :nth-of-type(2){
    height:100%;
  }

  :last-of-type{
  bottom: 0px;
  background-color: rgba(60,60,60,1);
  height:130px;
  }
`

export default LongMenu