import axios from "axios";
import React, { useEffect, useState } from "react";
import { Modal } from "./ProfileModalStyle";
import { useImmer } from "use-immer";

type TProfileModal = {
  email: string;
};

const baseUrl = "http://34.64.156.80:3003";

const ProfileModal: React.FC<TProfileModal> = ({ email }) => {
  const [modal, setModal] = useState(true);
  const [userData, setUserData] = useImmer({
    email: "",
    nickname: "",
    gender: "",
    age: "",
    introduce: "",
    profileImg: "",
    matchCount: 0,
    matchPoint: 0,
  });
  const toggleModal = () => {
    setModal(!modal);
  };
  useEffect(() => {
    const callProfile = async () => {
      try {
        const res = await axios.get(`${baseUrl}/api/main/auth`, {
          params: {
            email: email,
          },
        });
        if (res.status === 200) {
          setUserData((draft) => {
            draft.email = res.data.email;
            draft.nickname = res.data.nickname;
            draft.gender = res.data.gender;
            draft.age = res.data.age;
            draft.introduce = res.data.introduce;
            draft.profileImg = res.data.profileImg;
            draft.matchCount = res.data.matchCount;
            draft.matchPoint = res.data.matchPoint;
          });
        } else {
          throw new Error(
            `에러코드 ${res.status}, 유저 프로필 요청에 실패하였습니다`,
          );
        }
      } catch (error) {
        console.error(error);
        alert("유저 프로필 요청에 실패하였습니다");
      }
    };
    callProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {modal && (
        <Modal>
          <div className="modal">
            <div className="overlay"></div>
            <div className="modal-content">
              <h2>Hello</h2>
              <p></p>
              <button className="closeModal" onClick={toggleModal}>
                닫기
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default ProfileModal;
