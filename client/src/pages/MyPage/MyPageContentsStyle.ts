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
  margin: 0 auto;
  padding-top: 30px;
  background-color: ${(props) => props.theme.color.lightpink};
`;

export const MidContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 900px;
  height: 540px;
  margin-left: 30px;
`;
