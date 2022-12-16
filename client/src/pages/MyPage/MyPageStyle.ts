import styled from "styled-components";

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
