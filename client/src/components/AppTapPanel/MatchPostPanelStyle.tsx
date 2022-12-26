import styled from "styled-components";
import AppSelect from "../AppSelect/AppSelect";
import Theme from "./../../styles/Theme";

export const Container = styled.div`
  /* background-color: ${Theme.color.blue}; */
  background: linear-gradient(
    150deg,
    ${(props) => props.theme.color.lightpink},
    ${(props) => props.theme.color.blue},
    ${(props) => props.theme.color.pink},
    ${(props) => props.theme.color.lightblue}
  );
`;

export const FilterAppSelect = styled(AppSelect)`
  margin-left: auto;
  margin-top: 10px;
  background: linear-gradient(
    150deg,
    ${(props) => props.theme.color.lightpink},
    ${(props) => props.theme.color.lightblue}
  );
`;
