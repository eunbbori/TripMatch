import styled from "styled-components";

export const SideBar = styled.div`
  display: grid;
  grid-template-rows: repeat(1fr, 5);
  width: 150px;
  height: 540px;
  background-color: white;
  justify-content: space-evenly;
  align-items: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 1px 1px 6px 1px rgba(0, 0, 0, 0.11);
  & .color {
    color: ${(props) => props.theme.color.pink};
  }
`;

export const Box = styled.button`
  cursor: pointer;
  width: 150px;
  height: 95px;
  text-align: center;
  vertical-align: middle;
  background-color: transparent;
  border: none;
  font-size: ${(props) => props.theme.font.M};
  font-family: "S-CoreDream-3Light";
  font-weight: 700;
`;
