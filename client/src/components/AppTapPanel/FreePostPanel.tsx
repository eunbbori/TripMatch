import React, { useState } from "react";
import FreePostList from "../FreePost/FreePostList";
import Paging from "../Pagination/Paging";
import { useGetAllFreePostQuery } from "../../slice/freePostApi";

interface FreePostPanelProps {
  region: string;
}

const FreePostPanel: React.FC<FreePostPanelProps> = ({ region }) => {
  const [page, setPage] = useState(1);

  const { data } = useGetAllFreePostQuery({
    page: page,
    ...(region !== "전체" && { region }),
  });

  const handlePageChange = (page: React.SetStateAction<number>) => {
    setPage(page);
  };

  return (
    <>
      <FreePostList region={region} communities={data?.communities || []} />
      {/* <Paging /> */}
    </>
  );
};

export default FreePostPanel;
