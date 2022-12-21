import styled from "styled-components";

export const Top = styled.div`
  display: grid;
  grid-template-columns: 1fr 160px 180px;
  align-items: center;
  gap: 10px;
  width: 920px;
  height: 80px;
  margin: 20px 30px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 1px 1px 6px 1px rgba(0, 0, 0, 0.11);

  h1 {
    margin-left: 30px;
    font-size: 25px;
    font-weight: 600;
  }
`;

export const TripCount = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;

  span:first-child {
    padding-top: 7px;
  }

  span:last-child {
    font-size: 30px;
    font-weight: 600;
  }
`;
export const Score = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;

  span:first-child {
    padding-top: 7px;
    margin-right: 3px;
  }

  span:last-child {
    font-size: 30px;
    font-weight: 600;
  }

  #scoreNum {
    color: #d75281;
  }
`;
