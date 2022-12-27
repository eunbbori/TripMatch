import React, { useState } from "react";
import styled from "styled-components";
import type { AuthorType } from "../../type/freePost";
import defaultImage from "./../../images/user-default.jpg";
import ProfileModal from "./../ProfileModal/ProfileModal";

interface UserProfileProps {
  user: AuthorType;
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <Container>
      <ProfileImg src={user.profileImg} alt="profile image" />
      <Nickname onClick={() => setIsOpenModal(!isOpenModal)}>
        {user.nickname}
      </Nickname>
      {isOpenModal && <ProfileModal email={user.email} />}
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
  font-size: ${(props) => props.theme.font.M};
  cursor: pointer;
`;
