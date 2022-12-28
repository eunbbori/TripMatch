import styled from "styled-components";

export const Container = styled.div`
  width: 1000px;
  margin: auto;
  padding: 20px 0 15vh;
`;

export const PostTitle = styled.h3`
  font-size: ${(props) => props.theme.font.L};
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .heart {
    padding: 0;
    background-color: transparent;
    border: none;
  }
  img {
    width: 25px;
    cursor: pointer;
  }
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PostContent = styled.article`
  min-height: 300px;
  padding: 40px 0;
  font-size: ${(props) => props.theme.font.M};
  line-height: 1.7;
  font-family: "S-CoreDream-3Light";
`;

export const Date = styled.p`
  font-size: ${(props) => props.theme.font.S};
  color: #747474;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;

  a {
    margin-left: 15px;
  }
  & > button {
    margin-left: 15px;
  }
`;

export const Button = styled.button`
  width: 70px;
  height: 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${(props) => props.theme.color.lightblue};
  color: #333;
  font-family: "S-CoreDream-3Light";

  &:hover {
    background-color: ${(props) => props.theme.color.blue};
  }
`;
