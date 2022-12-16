import styled from "styled-components";

const AuthFormBlock = styled.div`
  margin-top: 1rem;
  padding: 2rem;

  label {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    display: block;
    font-size: 1.2rem;
    font-weight: 600;
    margin-right: 1rem;
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

const SummitBtn = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  border-radius: 0.8rem;
  text-align: center;
  padding: 0.8rem;
  margin-bottom: 1.2rem;
  background-color: ${(props) => props.theme.color.pink};
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
`;

export { AuthFormBlock, StyledInput, ResultText, SummitBtn, Footer };
