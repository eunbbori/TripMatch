import React, { useState } from "react";
import MakeMatchPostList from "../MakeMatchPostList/MakeMatchPostList";
import Paging from "../Pagination/Paging";
import { FilterType } from "../../type/filter";
import { matchMockData } from "../../pages/Home/components/mockData";
import { FilterAppSelect, Container } from "./MatchPostPanelStyle";

interface MatchPostPanelProps {
  region: string;
}

const MatchPostPanel: React.FC<MatchPostPanelProps> = ({ region }) => {
  const [filters, setFilters] = useState<FilterType>({
    region: region,
    status: "전체",
  });

  const selectEvent = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({ ...filters, status: event.target.value });
  };

  return (
    <>
      <Container>
        <FilterAppSelect
          options={["전체", "모집중"]}
          className="filter"
          onChange={selectEvent}
        />
        <MakeMatchPostList data={matchMockData} filter={filters} />
      </Container>
      <Paging />
    </>
  );
};

export default MatchPostPanel;
