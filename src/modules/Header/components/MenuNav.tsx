import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGrip, faHeadset, faGear, faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import styled, { css } from 'styled-components';
import { AppContext } from 'src/Providers/global';
import { NavLink } from "react-router-dom";

interface IType {
  type: string,
}

function MenuNav(props: { type: string }) {

  const { menuOn } = useContext(AppContext);

  function showPage(page: string): void {
    console.log(page);
  }

  return (
    <Wrapper onClick={() => menuOn()}>
      <MenuWrapper type={props.type}>
        <MenuElem className="nav-link" to='grids' onClick={() => showPage("Grid")} type={props.type}><FontAwesomeIcon icon={faGrip} /></MenuElem>
        <MenuElem className="nav-link" to='friends' onClick={() => showPage("Friends")} type={props.type}><FontAwesomeIcon icon={faHeadset} /></MenuElem>
        <MenuElem className="nav-link" to='notifications' onClick={() => showPage("Notifications")} type={props.type}><FontAwesomeIcon icon={faBell} /></MenuElem>
        <MenuElem className="nav-link" to='settings' onClick={() => showPage("Settings")} type={props.type}><FontAwesomeIcon icon={faGear} /></MenuElem>
        <MenuElem className="nav-link" to='profile' onClick={() => showPage("Profile")} type={props.type}><FontAwesomeIcon icon={faUser} /></MenuElem>
      </MenuWrapper>
    </Wrapper >
  )
}

const short = css`
  background-color: rgba(35, 35, 35, 0.65);
`;

const long = css`
  background-color: rgba(130,130,130,0.7);
`;

const shortME = css`
  background-color: rgba(35, 35, 35, 0.65);
  padding: 15px 13px;

  &:hover{
    background: linear-gradient(
      0deg,
      rgba(70, 70, 70, 0.6) 0%,
      rgba(173, 173, 173, 0.6) 100%
    );
    border: 1px solid gray;
  }
`;

const longME = css`
  color: white;
  margin: 0px 13px;
  padding: 15px 25px;

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
`;


const Wrapper = styled.div`
  display: block;
`

const MenuWrapper = styled.div<IType> `
  display: flex;
  border-radius: 4px;
  ${({ type }) => (type === 'long' ? long : short)}
  `
const MenuElem = styled(NavLink) <IType>`
  text-decoration: none;
  color: white;
  padding: 15px 13px;
  display: flex;
  font-size: 40px;
  cursor: pointer;
  border: 1px solid rgba(0,0,0,0);
  ${({ type }) => (type === 'long' ? longME : shortME)}

    &:hover{
      border-radius: 4px;
      
    }
  `

export default MenuNav