import React from "react";
import { TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import FreePostList from "../FreePost/FreePostList";
import Paging from "../Pagination/Paging";

interface FreePostPanelProps {
  region: string;
}

const FreePostPanel: React.FC<FreePostPanelProps> = ({ region }) => {
  return (
    <>
      <FreePostList region={region} />
      <Paging />
    </>
  );
};

export default FreePostPanel;
