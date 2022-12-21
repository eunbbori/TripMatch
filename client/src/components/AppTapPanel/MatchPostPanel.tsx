import React from "react";
import "react-tabs/style/react-tabs.css";
import MakeMatchPostList from "../MakeMatchPostList/MakeMatchPostList";
import Paging from "../Pagination/Paging";

interface MatchPostPanelProps {
  region: string;
}

const MatchPostPanel: React.FC<MatchPostPanelProps> = ({ region }) => {
  return (
    <>
      <MakeMatchPostList region={region} />
      <Paging />
    </>
  );
};

export default MatchPostPanel;
