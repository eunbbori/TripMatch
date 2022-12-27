import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Modal } from "./ProfileModalStyle";
import { useImmer } from "use-immer";
import iconX from "../../images/icon-X.png";

type TProfileModal = {
  email: string;
};

const baseUrl = "http://34.64.156.80:3003";
// 요청 실패시 보일 기본 이미지
const defaultImgUrl =
  "https://pixabay.com/get/gb92bd7c402e3b65ab306467a4f369192e56028d5e62f6f08b06abc90c642aab1e9ee36af2fe2cbe78378a1d67166427d6d39b5d375c50251c9cf5925d0b38cab932a796618d1ab445142c281136a748d_640.png";

const ProfileModal: React.FC<TProfileModal> = ({ email }) => {
  const [modal, setModal] = useState(true);
  const imageRef = useRef<HTMLImageElement | null>(null);
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

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      {modal && (
        <Modal>
          <div className="overlay">
            <div className="content">
              <div className="contentWrapper">
                <img
                  className="profileImg"
                  src={
                    userData.profileImg === ""
                      ? defaultImgUrl
                      : userData.profileImg
                  }
                  alt="profile image"
                  ref={imageRef}
                  onError={() => {
                    if (imageRef.current) {
                      imageRef.current.src = defaultImgUrl;
                    }
                  }}
                />
                <div className="infoContainer">
                  <div className="nicknameEmailWrapper">
                    <span className="nickname">
                      {userData.nickname === ""
                        ? "로딩실패"
                        : userData.nickname}
                    </span>
                    <span className="email">
                      {userData.email === "" ? "error@err.com" : userData.email}
                    </span>
                  </div>
                  <div className="genderAge">
                    <span className="etc">
                      {userData.gender === "" ? "중성" : userData.gender}
                    </span>
                    <span className="etc">
                      {userData.age === "" ? "애매한나이" : userData.age}
                    </span>
                  </div>
                  <div className="matches">
                    <span className="etc">
                      동행횟수&#x2001;{" "}
                      {userData.matchCount === 0 ? "-1" : userData.matchCount}{" "}
                      회
                    </span>
                    <span className="etc">
                      동행점수&#x2001;{" "}
                      {userData.matchPoint === 0 ? "-10" : userData.matchPoint}{" "}
                      / 5
                    </span>
                    <div className="etcWrapper"></div>
                  </div>
                </div>
              </div>
              <textarea className="introTextArea" readOnly>
                {userData.introduce === ""
                  ? "도움! 프로필 요청 에러!"
                  : userData.age}
              </textarea>
              <img
                className="close"
                src={iconX}
                alt="close"
                onClick={toggleModal}
              />
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default ProfileModal;
