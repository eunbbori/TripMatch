import React from "react";
import Pagination from "react-js-pagination";
import { PaginationStyleContainer } from "./PagingStyle";

type OnHandler = {
  (pageNumber: number): void;
};
interface PageProps {
  onHandler: OnHandler;
  paging?: number;
  totalCount?: number;
}

const Paging: React.FC<PageProps> = ({
  totalCount = 0,
  paging = 1,
  onHandler,
}) => {
  return (
    <PaginationStyleContainer>
      <Pagination
        activePage={paging}
        itemsCountPerPage={10}
        totalItemsCount={totalCount}
        pageRangeDisplayed={10}
        prevPageText={"‹"}
        nextPageText={"›"}
        onChange={onHandler}
      />
    </PaginationStyleContainer>
  );
};

export default Paging;
