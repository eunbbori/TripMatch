import styled from "styled-components";
import Theme from "./../../styles/Theme";

// 화면 전체 배경색 채우기
const AuthTemplateBlock = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// form 입력할 핑크색 박스
const PinkBox = styled.div`
  box-sizing: border-box;
  background-color: ${(props) => props.theme.color.lightpink};
  border-radius: 0.5rem;
  margin-top: 3rem;
  margin-bottom: 4rem;
  width: 25rem;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.6);

  .title {
    margin-top: 2rem;
    text-align: center;
    font-size: 2rem;
    font-weight: 600;
  }

  &.updatePinkBox {
    height: 87rem;
  }
`;

const AuthFormBlock = styled.div`
  margin-top: 1rem;
  padding: 2rem;

  label {
    margin-top: 2rem;
    margin-bottom: 0.5rem;
    display: block;
    font-size: 1.2rem;
    font-weight: 600;
    margin-right: 1rem;

    &.gender {
      display: block;
      margin: 1rem 2rem 1rem 0;
    }
  }

  .pageTitle {
    font-size: ${Theme.font.L};
    font-weight: 600;
  }

  .detailText {
    font-size: ${Theme.font.S};
    margin-bottom: 2rem;
  }

  .updateLabel {
    display: inline-block;
  }

  .gender {
    margin-top: 0.5rem;
    display: inline-block;
  }

  .useIntroDescription {
    font-size: 0.5rem;
    margin-bottom: 2rem;
  }

  .profileImageWrapper {
    display: inline-block;
    position: relative;
    margin-right: 1.5rem;
    padding: 1rem;

    .changeImage {
      position: absolute;
      right: 0.5rem;
      bottom: 1rem;
      opacity: 0.7;
      width: 2rem;
    }
  }
`;

const StyledInput = styled.input`
  box-sizing: border-box;
  padding: 0.5rem;
  width: 100%;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  border: none;
  outline: none;
  border-bottom: 1px solid grey;

  &:focus {
    border-bottom: 2px solid black;
  }
`;

const ResultText = styled.p`
  margin-bottom: 0.8rem;
`;

const Select = styled.select`
  width: 8rem;
  margin-top: 0.5rem;
  font-size: 1.2rem;
  border-radius: 0.5rem;
  padding: 0.3rem;
  display: block;
`;

const TextArea = styled.textarea`
  box-sizing: border-box;
  font-size: 1.2rem;
  width: 100%;
  border: 1px solid #cfcfcf;
  border-radius: 0.5rem;
  padding: 0.8rem;
  resize: none;

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  width: 100%;
  color: #c91113;
  font-size: 1.2rem;
  font-weight: 600;
  border-radius: 0.2rem;
  box-shadow: 0 0.1rem 0.2rem -0.1rem rgba(0, 0, 0, 0.7);
  border: 0.1rem solid gray;
  text-align: center;
  padding: 0.3rem;
  margin-bottom: 1.2rem;
  background-color: ${(props) => props.theme.color.pink};
  background-color: white;
  cursor: pointer;

  &.update {
    display: inline-block;
    width: auto;
    margin-top: 0.5rem;
    padding: 0.1rem 0.4rem;
    box-shadow: 0 0.1rem 0.2rem -0.1rem rgba(0, 0, 0, 0.7);
  }

  &.withdrawalBtn {
    margin-top: 2rem;
    width: auto;
    text-align: end;
    float: right;
  }

  &:hover {
    background-color: ${(props) => props.theme.color.lightblue};
  }

  &.formSubmit {
    margin-top: 2.5rem;
    display: block;
  }
`;

const GenderWrapper = styled.div`
  display: flex;
  margin-top: 0.5rem;
`;

const Footer = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  text-align: right;
  color: gray;
  margin-bottom: 2rem;

  a:visited {
    font-size: 5rem;
    color: gray;
  }

  a:hover {
    opacity: 0.6;
  }
`;

export {
  AuthTemplateBlock,
  PinkBox,
  AuthFormBlock,
  StyledInput,
  ResultText,
  Select,
  TextArea,
  Button,
  Footer,
  GenderWrapper,
};
