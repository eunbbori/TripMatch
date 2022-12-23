import styled from "styled-components";
import Modal from "../../../styles/Modal";

export const Body = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.color.lightpink};
`;

export const Container = styled.div`
  display: grid;
  grid-template-rows: 0.5fr 1fr;
  justify-content: start;
  width: 1000px;
  height: 700px;
  margin: 30px auto;
  background-color: ${(props) => props.theme.color.lightpink};
`;

export const MidContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 900px;
  height: 540px;
  margin-left: 30px;
`;

// 컨텐츠 담을 흰색 배경의 템플릿
export const Content = styled.div`
  width: 750px;
  height: 540px;
  margin-left: 20px;
  margin-right: 12px;
  background-color: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 1px 1px 6px 1px rgba(0, 0, 0, 0.11);

  table {
    width: 750px;
    height: 540px;
    vertical-align: middle;

    thead {
      position: sticky;
      top: 0;
      z-index: 3;
    }

    tr {
      display: grid;
      grid-template-columns: 1fr 120px 210px 140px;
      gap: 20px;
      text-align: center;
      padding-top: 10px;
      height: 50px;
      vertical-align: middle;
    }

    #first {
      position: relative;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      background-color: ${(props) => props.theme.color.pink};
    }

    th {
      padding: 15px;
      height: 20px;
      padding: 15px 10px 10px 23px;
      text-align: center;
      vertical-align: middle;
    }

    td {
      padding: 15px 10px 10px 23px;
      height: 30px;
      text-align: center;
      vertical-align: middle;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    #last {
      padding-top: 7px;
    }

    select {
      position: relative;
      width: 85px;
      height: 30px;
      border: none;
      padding: 5px;
    }

    option {
      position: absolute;
    }
  }

  &.updateConent {
    overflow: auto;
    display: flex;
    justify-content: center;
  }
`;

export const Layer = styled.div`
  width: 750px;
  height: 510px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
    width: 7px;
    border-radius: 10px;
  }
  &.userInfoForm {
    overflow: auto;
  }
`;

export const UpdateModal = styled(Modal)`
  justify-content: center;

  .updateModalForm {
    box-sizing: border-box;
    background-color: white;
    padding: 2rem;
    border-radius: 0.5rem;
    margin-top: 3rem;
    margin-bottom: 4rem;
    width: 25em;
    box-shadow: 0 4px 5px rgba(0, 0, 0, 0.6);

    .title {
      margin-top: 2rem;
      text-align: center;
      font-size: 2rem;
      font-weight: 600;
    }
  }
`;

export const ModalTitle = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const ModalButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  button {
    font-size: 1.2rem;
    font-weight: 600;
    display: inline-block;
    width: 5rem;
    border: none;
    border-radius: 0.2rem;
    margin-top: 0.5rem;
    padding: 0.4rem;
    box-shadow: 0 0.1rem 0.2rem -0.1rem rgba(0, 0, 0, 0.7);

    + button {
      margin-left: 4rem;
    }

    &.modify {
      background-color: ${(props) => props.theme.color.lightpink};
    }

    :hover {
      background-color: ${(props) => props.theme.color.blue};
      color: #334a52;
    }
  }
`;

export const ModalContentContainer = styled.div`
  margin: 3rem 0;

  select {
    margin: 2rem auto;
  }
`;

export const ProfileInput = styled.input`
  display: none;
`;

export const ProfileImage = styled.div`
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
`;

export const WithdrawalText = styled.p`
  font-size: large;
  font-weight: 600;
  color: red;
`;
