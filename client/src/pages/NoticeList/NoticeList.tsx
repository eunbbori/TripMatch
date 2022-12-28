import { Link } from "react-router-dom";
import AppButton from "../../components/AppButton/AppButton";
import {
  Container,
  ButtonContainer,
  PostInfo,
  Title,
  UserInfo,
  CreatedDate,
  FreePostLink,
  ListContainer,
  ListTitle,
  Index,
} from "./NoticeListStyle";
import { useGetAllNoticeQuery } from "../../slice/noticeApi";
import { dateFormat } from "../../util/dateFormatting";

const NoticeList = () => {
  const { data: notices } = useGetAllNoticeQuery("");
  const role = sessionStorage.getItem("roleToken");

  return (
    <Container>
      <ListTitle>공지사항</ListTitle>
      <ListContainer>
        {notices &&
          notices.map((data, i) => {
            const url = `/notice/${data.noticeId}`;
            return (
              <FreePostLink key={i} to={url}>
                <PostInfo>
                  <Index>{i + 1}</Index>
                  <Title>{data.title}</Title>
                </PostInfo>
                <UserInfo>
                  <CreatedDate>{dateFormat(data.createdAt)}</CreatedDate>
                </UserInfo>
              </FreePostLink>
            );
          })}
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
