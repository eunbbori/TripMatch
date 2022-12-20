import styled from "styled-components";

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
  }
  .gender {
    margin-top: 0.5rem;
    display: inline-block;
  }
  .useIntroDescription {
    font-size: 0.5rem;
    margin-bottom: 2rem;
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
  font-size: 1.2rem;
  font-weight: 600;
  border-radius: 0.2rem;
  /* border: none; */
  box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.7);
  border: 1px solid #cfcfcf;
  text-align: center;
  padding: 0.4rem;
  margin-bottom: 1.2rem;
  background-color: ${(props) => props.theme.color.pink};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.color.lightblue};
  }

  &.formSubmit {
    margin-top: 0.5rem;
    display: block;
  }
`;

const Footer = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
  display: block;
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
  AuthFormBlock,
  StyledInput,
  ResultText,
  Select,
  TextArea,
  Button,
  Footer,
};
