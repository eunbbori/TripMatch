import { Link } from "react-router-dom";
import AppButton from "../../components/AppButton/AppButton";
import {
  Container,
  ButtonContainer,
  PostInfo,
  TitleStyle,
  UserInfo,
  CreatedDate,
  ListContainer,
  Index,
  NoticeLink,
  New,
} from "./NoticeListStyle";
import { useGetAllNoticeQuery } from "../../slice/noticeApi";
import { dateFormat } from "../../util/dateFormatting";
import Title from "../../components/Title/Title";

const NoticeList = () => {
  const { data: notices } = useGetAllNoticeQuery("");
  const role = sessionStorage.getItem("roleToken");

  return (
    <Container>
      <Title title="공지사항" location="/notice" />
      <ListContainer>
        {notices &&
          [...notices]
            .map((data, i) => {
              const url = `/notice/${data.noticeId}`;
              const date = new Date(data.createdAt).toLocaleDateString();
              const now = new Date(Date.now()).toLocaleDateString();

              return (
                <NoticeLink key={i} to={url}>
                  <PostInfo>
                    <Index>{i + 1}</Index>
                    <TitleStyle>
                      <h4>{data.title}</h4>
                      {date === now && <New>new</New>}
                    </TitleStyle>
                  </PostInfo>
                  <UserInfo>
                    <CreatedDate>{dateFormat(data.createdAt)}</CreatedDate>
                  </UserInfo>
                </NoticeLink>
              );
            })
            .reverse()}
      </ListContainer>
      <ButtonContainer>
        {role === "admin" && (
          <Link to="/notice/write">
            <AppButton
              width={"120px"}
              className={"postBtn"}
              text={"글쓰기"}
              type={"button"}
            />
          </Link>
        )}
      </ButtonContainer>
    </Container>
  );
};

export default NoticeList;
