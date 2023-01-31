import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useLocation, useNavigate } from 'react-router-dom';
import { showBackButton } from '../api/functions';

interface IButton {
  visible: string,
}

function BackButton() {

  const navigate = useNavigate();
  const location = useLocation();
  const visible: string = showBackButton(location.pathname);

  return (
    <Wrapper>
      <Button onClick={() => navigate(-1)} visible={visible}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </Button >
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display:flex;
  align-items: center;
  `

const Button = styled.div<IButton>`
  background: rgb(70, 70, 70, 0.6);
  border: 1px solid rgba(70, 70, 70, 1);
  border-radius: 5px;
  padding: 12px 9px;
  font-size: 2vw;
  visibility: ${props => props.visible};
  display: flex;
  justify-content: center;
  align-items: center;


  &:hover {
    background: linear-gradient(
      0deg,
      rgba(70, 70, 70, 0.7) 0%,
      rgba(173, 173, 173, 0.7) 100%
    );
    border: 1px solid gray;
    cursor: pointer;
  }
`;

export default BackButton
