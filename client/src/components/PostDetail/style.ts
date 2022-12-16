import styled from "styled-components";
import Theme from "./../../styles/Theme";

export const PostTitle = styled.h3`
  font-size: 20px;
  margin: 20px 0;
`;

export const MatchStatus = styled.span<{ status: boolean }>`
  display: inline-block;
  margin-right: 10px;
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => (props.status ? "#0088b9" : "#999")};
`;

export const Thumbnail = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  margin-bottom: 10px;
`;

export const ThumbnailImg = styled.img`
  width: 100%;
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
  font-size: 15px;
  line-height: 1.7;
  span {
    display: inline-block;
    margin-right: 10px;
    color: #747474;
    font-size: 14px;
  }
`;

export const PostContent = styled.article`
  min-height: 300px;
  padding: 40px 0;
  font-size: 14px;
  line-height: 1.7;
`;

export const Date = styled.p`
  font-size: 13px;
  color: #747474;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
`;

export const Button = styled.button`
  width: 70px;
  height: 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${(props) => props.theme.color.lightblue};
  color: #333;

  + button {
    margin-left: 15px;
  }
`;

export const MatchButton = styled.button`
  width: 150px;
  height: 50px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${(props) => props.theme.color.pink};
  font-size: 17px;
  color: #fff;
  font-weight: bold;
  margin-bottom: 20px;
`;
