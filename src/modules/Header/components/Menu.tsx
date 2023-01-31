import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGrip, faHeadset, faGear, faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import styled, { css } from 'styled-components';
import { AppContext } from 'src/Providers/global';

interface IType {
  type: string,
}

function MenuNav(props: { type: string }) {

  const { menuOn, component, showComponent } = useContext(AppContext);

  function showPage(page: string): void {
    showComponent(page);
  }

  return (
    <Wrapper onClick={() => menuOn()}>
      <MenuWrapper type={props.type}>
        <MenuElem className={component === 'grid' ? 'nav-link active' : 'nav-link'} onClick={() => showPage("grid")} type={props.type}><FontAwesomeIcon icon={faGrip} /></MenuElem>
        <MenuElem className={component === 'griends' ? 'nav-link active' : 'nav-link'} onClick={() => showPage("friends")} type={props.type}><FontAwesomeIcon icon={faHeadset} /></MenuElem>
        <MenuElem className={component === 'notifications' ? 'nav-link active' : 'nav-link'} onClick={() => showPage("notifications")} type={props.type}><FontAwesomeIcon icon={faBell} /></MenuElem>
        <MenuElem className={component === 'settings' ? 'nav-link active' : 'nav-link'} onClick={() => showPage("settings")} type={props.type}><FontAwesomeIcon icon={faGear} /></MenuElem>
        <MenuElem className={component === 'user' ? 'nav-link active' : 'nav-link'} onClick={() => showPage("user")} type={props.type}><FontAwesomeIcon icon={faUser} /></MenuElem>
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
  margin: 0px 0.2vw;
  padding: 1vh 1vw;

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

const MenuElem = styled.a <IType>`
  text-decoration: none;
  color: white;
  padding: 15px 13px;
  display: flex;
  font-size: 2vw;
  cursor: pointer;
  border: 1px solid rgba(0,0,0,0);
  ${({ type }) => (type === 'long' ? longME : shortME)}

    &:hover{
      border-radius: 4px;
      
    }
  `

export default MenuNav