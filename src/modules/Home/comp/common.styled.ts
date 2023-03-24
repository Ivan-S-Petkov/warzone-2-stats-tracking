import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface iLastPage {
  lastPage: string;
}

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
`;

export const Mark = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
`;

export const Label = styled(NavLink)`
  margin: 1vh 0px;
  font-size: min(24px, 1.4vw);
  padding: 2px 15px;
  text-decoration: none;
  color: white;
  border-radius: 4px;
  background-color: rgba(120, 120, 120, 0.7);
  color: rgba(250, 250, 250, 0.9);
  border: 1px solid rgba(158, 158, 158, 0.7);

  &.active {
    background-color: rgba(240, 240, 240, 0.9);
    color: rgba(25, 25, 25, 0.8);
  }

  &:not(.active):hover {
    background-color: rgba(120, 255, 120, 1);
    color: rgba(35, 35, 35, 0.8);
  }
`;

export const Line = styled.div<iLastPage>`
  ${({ lastPage }) =>
    lastPage === "last" ? "margin: 3.5vh 1vw 24vh 1vw" : "margin: 3.5vh 1vw;"};
  border-right: rgba(80, 80, 80, 0.9) solid 2px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: -2;
`;

export const Circle = styled.div`
  position: relative;
  left: calc(-6px - 1.05vw);
  border-radius: 50%;
  height: 12px;
  width: 12px;
  background-color: rgba(240, 240, 240, 0.9);
  z-index: -1;
`;

export const ArrowDown = styled.div`
  position: relative;
  left: calc(-6px - 1.05vw);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 12px solid rgba(158, 158, 158, 0.7);
`;
export const ArrowUp = styled(ArrowDown)`
  rotate: 180deg;
`;
