import styled from "styled-components";

const TitleStyle = styled.div`
  width: 60vw;
  margin: 50px auto 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 15px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  h3 {
    font-size: ${(props) => props.theme.font.L};
    font-weight: bold;
    cursor: default;
  }

  a {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;

export default TitleStyle;
