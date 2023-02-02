import React, { useContext } from 'react'
import User from 'src/modules/User';
import { AppContext } from 'src/Providers/global';
import styled from 'styled-components'
import MenuNav from '../Header/components/Menu'
import Friends from './components/Friends';
import Grid from './components/Grid';
import Notifications from './components/Notifications';
import Settings from './components/Settings';

function LongMenu() {

  const { showMenu, component } = useContext(AppContext);

  return (
    <LongMenuWrapper showSideMenu={showMenu}>
      <Section>
        <MenuNav type='long' />
      </Section>
      <Section>
        {component === 'grid' ? <Grid /> : null}
        {component === 'friends' ? <Friends /> : null}
        {component === 'notifications' ? <Notifications /> : null}
        {component === 'settings' ? <Settings /> : null}
        {component === 'user' ? <User /> : null}
      </Section>
      <Section>
        React
      </Section>
    </LongMenuWrapper>
  )
}

const LongMenuWrapper = styled.div<{ showSideMenu: boolean }>`
  z-index:2;
  top: 0px;
  right: 2vw;
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
    flex-direction: column;
    flex-grow: 1;
    justify-content: flex-start;
  }

  :last-of-type{
  bottom: 0px;
  background-color: rgba(60,60,60,1);
  height:130px;
  }
`

export default LongMenu