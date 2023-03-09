import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid rgba(130, 130, 130, 1);
  font-size: min(24px, 1.5vw);
  letter-spacing: 0.1vw;
  padding: 0.6vh 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  align-self: center;
  align-items: center;
  margin-top: 1vh;

  p {
    margin-bottom: 5px;
    font-size: max(14px, 0.8vw);
  }
`;

export const ContentForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 65%;
  align-self: center;
  align-items: center;
  margin-top: 1 vh;

  p {
    margin-bottom: 5px;
    font-size: max(14px, 0.8vw);
  }

  input,
  select {
    background-color: #d8d8d8 !important;
    display: inline-block;
    width: 100%;
    border: none;
    border-radius: 3px;
    font-size: min(15px, 2vw);
    line-height: 19px;
    color: #000;
    margin: 0;
    padding: 9px 13px;
    box-sizing: border-box;
  }
`;

export const MenuNav = styled.div`
  display: flex;
  width: 100%;
  font-size: 21px;
  font-weight: 500;
  text-transform: uppercase;
  padding: 5px;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 4px;
  justify-content: center;
  cursor: pointer;
  margin: 0px 0.2vw;
  padding: 1vh 1vw;
  color: white;
  background-color: rgba(118, 118, 118, 0.7);

  &.active {
    background-color: rgba(240, 240, 240, 0.9);
    color: rgba(25, 25, 25, 0.8);
  }

  &:hover {
    background-color: rgba(220, 220, 220, 0.8);
    color: rgba(35, 35, 35, 0.65);
  }
`;

export const Button = styled.button`
  box-sizing: border-box;
  margin-top: 2vh;
  display: flex;
  width: 100%;
  font-size: 18px;
  text-transform: uppercase;
  padding: 5px;
  color: #ffffff;
  background-color: #242424;
  border: 1px solid #81898c;
  border-radius: 3px;
  justify-content: center;
  cursor: pointer;

  :hover {
    background-color: rgba(130, 130, 130, 1);
    border: 1px solid #81898c;
    color: #ffffff;
  }
`;

export const NoResults = styled.div`
  margin-top: 20px;
  justify-self: center;
  font-size: 28px;
`;
