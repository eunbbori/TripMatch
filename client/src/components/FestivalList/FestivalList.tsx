import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Container, FestivalInfo, ModalCard } from "./FestivalListStyle";
import { mockData } from "./mockData";
import axios from "axios";
import { closeModal, showModal } from "../../slice/modal";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import Title from "../Title/Title";

interface Item {
  [key: string]: string;
}

interface ItemObj {
  item: Item;
}

interface LocationProps {
  location: string;
}

const FestivalList: React.FC<LocationProps> = ({ location }) => {
  const [festivalInfo, setFestivalInfo] = useState<Item[]>([]);
  const [itemInfo, setItemInfo] = useState<Item>({});
  const [festivalModal, setFestivalModal] = useState(false);
  const date = new Date();
  const eventStartDate = `${date.getFullYear()}${date.getMonth() + 1}01`;
  const serviceKey =
    "7vK0Tt5CPNrirky41NfjhrXhOVngGJ0McJjDrgASEMepGMEtUXEP1%2Fy2wlH6mAUF4U%2FJAUtS0xsaYjtn3NLGgA%3D%3D";

  useEffect(() => {
    // const getData = async () => {
    //   const response = await axios.get(`http://apis.data.go.kr/B551011/KorService/searchFestival?numOfRows={home ? 8 : 20}&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=C&_type=json&serviceKey=${serviceKey}&eventStartDate=${eventStartDate}`)
    // }
    const newData = mockData
      .sort((a, b) => {
        return Number(a.eventstartdate) - Number(b.eventstartdate);
      })
      .map((item) => {
        return { ...item, readcount: "0" };
      });

    location === "/"
      ? setFestivalInfo(newData.slice(0, 8))
      : setFestivalInfo(newData); //찐데이터로 받을 때 수정해야할 식
  }, [location]);

  const dateFormat = (date: string) => {
    return date.slice(0, 4) + "." + date.slice(4, 6) + "." + date.slice(6, 8);
  };

  const InfoModal: React.FC<ItemObj> = ({ item }) => {
    return (
      <ModalCard>
        <div className="modalCard">
          <img
            className="closeModal"
            src="https://res.cloudinary.com/dk9scwone/image/upload/v1671625307/free-icon-cancel-8532370_kuiqk1.png"
            onClick={(e) => {
              e.stopPropagation();
              setFestivalModal(false);
            }}
          />

          <img src={item.firstimage} className="festivalImg" />
          <div className="info">
            <div className="festivalTitle">{item.title}</div>
            <div className="festivalDate">
              {dateFormat(item.eventstartdate)}~{dateFormat(item.eventenddate)}
            </div>
            <div className="address">{item.addr1}</div>
            <div className="tel">{item.tel}</div>
          </div>
        </div>
      </ModalCard>
    );
  };

  return (
    <div>
      <Title title="축제정보" location={location} />
      <Container>
        <FestivalInfo>
          {festivalInfo &&
            festivalInfo.map((item) => {
              return (
                <div
                  className="item"
                  key={item.contentid}
                  onClick={(e) => {
                    e.stopPropagation();
                    setItemInfo(item);
                    setFestivalModal(true);
                  }}
                >
                  <img src={item.firstimage} />
                  <div className="itemTitle">{item.title}</div>
                  <div className="itemDate">
                    {dateFormat(item.eventstartdate)}~
                    {dateFormat(item.eventenddate)}
                  </div>
                </div>
              );
            })}
          {festivalModal && <InfoModal item={itemInfo} />}
        </FestivalInfo>
        {location === "festival" ? (
          <div className="shortCutBtn">
            <div>혼자 가기 외로울 땐?</div>
            <Link to="/match/write">
              <button>동행 신청 바로가기</button>
            </Link>
          </div>
        ) : (
          false
        )}
      </Container>
    </div>
  );
};

export default FestivalList;
