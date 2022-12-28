import styled from "styled-components";

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
  font-size: ${(props) => props.theme.font.M};
  font-weight: 600;

  thead {
    position: sticky;
    top: 0;
    z-index: 3;
  }

  tbody {
    display: flex;
    flex-direction: column;
    height: auto;
    border-bottom: 2px solid #f2f2f2;
  }

  table {
    width: 750px;
    height: 540px;
    vertical-align: middle;

    tr {
      display: grid;
      grid-template-columns: 1fr 140px 120px 180px;
      gap: 20px;
      text-align: center;
      padding-top: 10px;
      height: 50px;
      vertical-align: middle;
    }

    #first {
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      background-color: ${(props) => props.theme.color.pink};
    }

    th {
      padding: 15px;
      height: 20px;
      padding: 15px 20px 10px 23px;
      font-size: ${(props) => props.theme.font.M};
      font-weight: 700;
      text-align: center;
      vertical-align: middle;
    }

    td {
      cursor: pointer;
      padding: 15px 20px 10px 23px;
      height: 45px;
      font-size: ${(props) => props.theme.font.S};
      text-align: center;
      vertical-align: middle;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    #title {
      text-align: left;
      padding-left: 40px;
    }

    #last {
      padding-top: 5px;
      display: flex;
      margin-left: 20px;

      button {
        cursor: pointer;
        width: 80px;
        height: 33px;
        border-radius: 5px;
        border: none;
      }

      #review {
        font-family: "S-CoreDream-3Light";
        font-weight: 700;
        background-color: ${(props) => props.theme.color.lightblue};
        margin-left: 2px;
      }

      #endText {
        margin-left: 5px;
      }

      #cancel {
        font-family: "S-CoreDream-3Light";
        font-weight: 700;
        background-color: ${(props) => props.theme.color.lightpink};
        margin-left: 8px;
      }

      #left {
        width: 120px;
        height: 30px;
        margin-right: 20px;
        margin-top: 10px;
      }
    }

    #agreeContact {
      display: grid;
      grid-template-columns: 1fr;
      height: 60px;
      padding: 5px;

      #contact {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;
        margin: 10px auto 0 auto;
        width: 650px;
        height: 30px;
        background-color: #fff2f5;
        border-radius: 5px;

        span {
          text-align: center;

          #contactInfo {
            margin-left: 10px;
            color: #1c5570;
            font-weight: 600;
          }
        }
      }
    }
  }
`;

export const ReviewDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    margin-top: 5px;
    font-size: ${(props) => props.theme.font.XS};
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
`;
