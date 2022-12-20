import styled from "styled-components";
import Theme from "../../styles/Theme";

export const Container = styled.div`
  width: 1000px;
  padding: 50px 100px;
  margin: 0 auto;
`;

export const Etc = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  outline: none;
  width: 200px;
  height: 40px;
  background-color: ${Theme.color.lightblue};
  border: none;
  border-radius: 40px;
  cursor: pointer;
  margin-top: 10px;
  + button {
    margin-left: 100px;
  }
`;
