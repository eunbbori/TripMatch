import React, { useState } from "react";
import Pagination from "react-js-pagination";
import { PaginationStyleContainer } from "./PagingStyle";

const Paging = () => {
  const [page, setPage] = useState(1);

  const handlePageChange = (page: React.SetStateAction<number>) => {
    setPage(page);
  };

  return (
    <PaginationStyleContainer>
      <Pagination
        activePage={page}
        itemsCountPerPage={10}
        totalItemsCount={450}
        pageRangeDisplayed={10}
        prevPageText={"‹"}
        nextPageText={"›"}
        onChange={handlePageChange}
      />
    </PaginationStyleContainer>
  );
};

export default Paging;
