import React, { useContext } from 'react'
import styled from 'styled-components'
import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from 'src/Providers/user';

function Navigation() {
  const { authenticated, admin } = useContext(UserContext);
  const url: string = useLocation().pathname;
  const links: Array<string> = ['hot', 'games'];
  let activeHome: boolean = false;

  if (links.some((v: string) => url.includes(v))) {
    activeHome = true;
  }



  return (
    <Wrapper>
      <Nav>
        <LinkElem className={Boolean(activeHome) ? "active nav-link" : "nav-link"} to='' >HOME</LinkElem>
        <LinkElem className="nav-link" to='stats'>STATS</LinkElem>
        <LinkElem className="nav-link" to='store'>STORE</LinkElem>
        {authenticated && admin ? <LinkElem className="nav-link" to='admin'>ADMIN</LinkElem> : ''}
      </Nav>
    </Wrapper >
  )
}
const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

const Nav = styled.div`
  background-color: rgba(158,158,158,0.7);
  border-radius: 4px;
  display: flex;
`

const LinkElem = styled(NavLink)`
  padding: 2px 15px;
  font-size: min(28px,1.6vw);
  font-weight: 500;
  text-decoration: none;
  color: white;
  letter-spacing: 2px;
  margin: 0 1px;

  &:first-of-type{
    margin-left: 0px;
  }

  &:last-of-type{
    margin-right: 0px;
  }

  &.active {
    background-color: rgba(240, 240, 240, 0.9);
    color: rgba(25, 25, 25, 0.8);
    border-radius: 4px;
  }

  &:hover{
    background-color: rgba(220, 220, 220, 0.8);
    color: rgba(35, 35, 35, 0.65);
    border-radius: 4px;
  }
`

export default Navigation