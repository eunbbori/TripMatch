import styled from "styled-components";

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

export const MatchStatus = styled.span<{ status: boolean }>`
  display: inline-block;
  margin-right: 10px;
  font-size: ${(props) => props.theme.font.L};
  font-weight: bold;
  color: ${(props) => (props.status ? "#0088b9" : "#999")};
`;

export const Thumbnail = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
  margin-bottom: 10px;
  background-color: #ccc;
  position: relative;
`;

export const ThumbnailImg = styled.img`
  width: 100%;
  cursor: pointer;
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MatchContainer = styled.div`
  width: 50%;
  border: 2px solid ${(props) => props.theme.color.lightblue};
  border-radius: 10px;
  margin-top: 20px;
  padding: 20px 30px;
  font-size: ${(props) => props.theme.font.M};
  line-height: 1.7;
  span {
    display: inline-block;
    margin-right: 10px;
    color: #747474;
    font-size: ${(props) => props.theme.font.S};
  }
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

export const MatchButton = styled.button<{ isApplying: boolean }>`
  width: 150px;
  height: 50px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${(props) =>
    props.isApplying ? props.theme.color.blue : props.theme.color.pink};
  font-size: ${(props) => props.theme.font.M};
  color: #fff;
  font-weight: bold;
  margin-bottom: 20px;
  font-family: "S-CoreDream-3Light";

  &:disabled {
    background-color: lightgrey;
  }
`;
