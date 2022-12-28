import React, { useState } from "react";
import MakeMatchPostList from "../MakeMatchPostList/MakeMatchPostList";
import Paging from "../Pagination/Paging";
import { FilterAppSelect, Container } from "./MatchPostPanelStyle";
import { useGetAllMatchPostQuery } from "../../slice/matchPostApi";

interface MatchPostPanelProps {
  region: string;
}

const MatchPostPanel: React.FC<MatchPostPanelProps> = ({ region }) => {
  const [status, setStatus] = useState<string>("전체");
  const [page, setPage] = useState(1);
  const email = sessionStorage.getItem("email");

  const { data } = useGetAllMatchPostQuery({
    page: page,
    ...(region !== "전체" && { region }),
    ...(status !== "전체" && { status: true }),
    ...(email && { email }),
  });

  const handlePageChange = (page: React.SetStateAction<number>) => {
    setPage(page);
  };

  const selectEvent = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(event.target.value);
  };

  return (
    <>
      <Container>
        <FilterAppSelect
          options={["전체", "모집중"]}
          className="filter"
          onChange={selectEvent}
        />
        <MakeMatchPostList data={data?.posts || []} />
      </Container>
      <Paging
        perPage={8}
        paging={page}
        onHandler={handlePageChange}
        totalCount={data?.totalCount}
      />
    </>
  );
};

export default MatchPostPanel;
