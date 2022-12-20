import styled from "styled-components";

export const PaginationStyleContainer = styled.ul`
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 15px;
    list-style: none;
    padding: 0;
  }
  .pagination li {
    display: inline-block;
    width: 30px;
    height: 30px;
    border: 1px solid #e2e2e2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
  }

  .pagination li:first-child {
    border-radius: 5px 0 0 5px;
  }

  .pagination li:last-child {
    border-radius: 0 5px 5px 0;
  }

  .pagination li a {
    text-decoration: none;
    /* color: #337ab7; */
    color: black;
    font-size: 1rem;
  }

  .pagination li.active a {
    color: white;
  }

  .pagination li.active {
    background-color: ${(props) => props.theme.color.blue};
  }

  .pagination li a:hover,
  .pagination li a.active {
    color: black;
  }

  .page-selection {
    width: 48px;
    height: 30px;
    color: #337ab7;
  }
`;
