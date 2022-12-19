import React from "react";
import styled from "styled-components";
import type { Author } from "../../pages/FreePostDetail/FreePostDetail";
import defaultImage from "./../../images/user-default.jpg";

interface UserProfileProps {
  user?: Author;
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <Container>
      <ProfileImg src={defaultImage} alt="" />
      <Nickname>{user?.nickname}</Nickname>
    </Container>
  );
};

export default UserProfile;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 6px;
  border-radius: 50%;
`;

const Nickname = styled.p`
  font-size: 14px;
`;
