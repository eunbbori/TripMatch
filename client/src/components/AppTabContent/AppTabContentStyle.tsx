import { TabList } from "react-tabs";
import styled from "styled-components";
import Theme from "../../styles/Theme";

export const Container = styled.div`
  width: 60vw;
  margin: auto;
  /* padding-bottom: 30vh; */
`;

export const STabList = styled(TabList)`
  display: flex;
  justify-content: space-around;
  background-color: ${Theme.color.pink};
  padding: 7px;

  .react-tabs__tab-list {
    border-bottom: 1px solid #aaa;
    margin: 0 0 10px;
    padding: 0;
  }
  .react-tabs__tab {
    display: inline-block;
    border: 1px solid transparent;
    border-bottom: none;
    bottom: -1px;
    position: relative;
    list-style: none;
    padding: 6px 12px;
    cursor: pointer;
  }
  .react-tabs__tab--selected {
    background: ${Theme.color.lightpink};
    border-color: #aaa;
    color: black;
    border-radius: 5px 5px 0 0;
    font-weight: bold;
  }

  .react-tabs__tab:focus:after {
    content: "";
    position: absolute;
    height: 0px;
    left: -4px;
    right: -4px;
    bottom: -5px;
    background: ${Theme.color.blue};
  }
`;
