import styled from "styled-components";

export const WishTabContainer = styled.div`
  box-sizing: border-box;
  margin: 40px auto 20px auto;
  width: 62vw;
  padding: 1rem;
`;

export const WishTabTitle = styled.p`
  font-size: large;
  font-weight: 600;
`;

export const WishTabUnderBar = styled.div`
  border: 1px solid black;
  opacity: 0.1;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const WishTabText = styled.p`
  font-size: large;

  span.postNum {
    font-size: large;
    font-weight: 600;
    color: blue;
    margin-right: 3px;
  }
`;
