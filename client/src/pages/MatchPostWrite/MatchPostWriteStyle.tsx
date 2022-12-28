import styled from "styled-components";
import AppButton from "../../components/AppButton/AppButton";

export const Container = styled.div`
  width: 1000px;
  padding: 50px 100px;
  margin: 0 auto;
`;

export const DateRange = styled.div`
  display: flex;
  input {
    text-indent: 5px;
  }
  p {
    align-self: center;
    margin-left: 10px;
  }
  /* justify-content: space-between; */
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const MatchPostAppButton = styled(AppButton)`
  cursor: pointer;
  margin-top: 10px;
  :first-child {
    margin-right: 150px;
  }
`;

export const RadioAndCheckBoxLabel = styled.label`
  flex: none;
  align-self: center;
  margin-right: 15px;
`;

export const RadioAndCheckBoxDiv = styled.div`
  height: 40px;
  margin: 10px 0;
  display: flex;
`;
