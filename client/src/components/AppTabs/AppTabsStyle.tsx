import { TabList } from "react-tabs";
import styled from "styled-components";

export const Container = styled.div`
  width: 1000px;
  margin: auto;
  padding-bottom: 60vh;
  /* border: 1px solid black; */
`;
// export const Ul = styled.ul`
//   display: flex;
//   text-decoration: none;
//   /* margin-top: 0.5rem; */
//   justify-content: space-around;
//   padding-bottom: 10px;
//   border-bottom: 1px solid black;

//   & li {
//     width: 70px;
//     height: 30px;
//     vertical-align: center;
//     text-align: center;
//     /* margin: 0 3rem; */
//   }
// `;
export const STabList = styled(TabList)`
  display: flex;
  justify-content: space-around;
`;
