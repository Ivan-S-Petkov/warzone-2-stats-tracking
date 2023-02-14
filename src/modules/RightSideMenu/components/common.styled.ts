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
  margin-top: 4vh;

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
  margin-top: 4vh;

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
