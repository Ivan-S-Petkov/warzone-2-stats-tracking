import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGrip, faHeadset, faGear, faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

function ShortMenu() {
  return (
    <Wrapper>
      <ShortMenuWrapper>
        <MenuElem><FontAwesomeIcon icon={faGrip} /></MenuElem>
        <MenuElem><FontAwesomeIcon icon={faHeadset} /></MenuElem>
        <MenuElem><FontAwesomeIcon icon={faBell} /></MenuElem>
        <MenuElem><FontAwesomeIcon icon={faGear} /></MenuElem>
        <MenuElem><FontAwesomeIcon icon={faUser} /></MenuElem>
      </ShortMenuWrapper>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: block;
`

const ShortMenuWrapper = styled.div`
  display: flex;
  background-color: rgba(35, 35, 35, 0.65);
  border-radius: 4px;
  `
const MenuElem = styled.div`
    padding: 15px 13px;
    display: flex;
    font-size: 40px;
    cursor: pointer;

    &:hover{
      border-radius: 4px;
      background: linear-gradient(
      0deg,
      rgba(70, 70, 70, 0.6) 0%,
      rgba(173, 173, 173, 0.6) 100%
    );
    border: 1px solid gray;
    }
  `

export default ShortMenu