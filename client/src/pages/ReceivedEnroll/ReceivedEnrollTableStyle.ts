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

  table {
    width: 750px;
    height: 540px;
    vertical-align: middle;

    tr {
      display: grid;
      grid-template-columns: 1fr 150px 280px;
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
      padding: 15px 5px 10px 23px;
      font-size: ${(props) => props.theme.font.M};
      font-weight: 700;
      text-align: center;
      vertical-align: middle;
    }

    td {
      cursor: pointer;
      padding: 15px 5px 10px 23px;
      height: 30px;
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
      padding-top: 7px;
      margin-left: 15px;

      button {
        cursor: pointer;
        width: 80px;
        height: 35px;
        margin-right: 10px;
        border: none;
        border-radius: 5px;
        /* box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.11); */
      }

      button:first-child {
        font-family: "S-CoreDream-3Light";
        font-weight: 700;
        font-size: ${(props) => props.theme.font.S};
        background-color: ${(props) => props.theme.color.lightblue};
      }

      button:last-child {
        font-family: "S-CoreDream-3Light";
        font-weight: 700;
        font-size: ${(props) => props.theme.font.S};
        background-color: ${(props) => props.theme.color.lightpink};
      }
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
