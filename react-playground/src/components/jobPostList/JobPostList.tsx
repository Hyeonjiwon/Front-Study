import { Pagination } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { JobPostListColumn } from "../../types/JobPostDataType";
import DynamicTable from "./DynamicTable";

interface JobPostListProps {
  columns: JobPostListColumn[];
  data: any[];
  currentPage: number;
  totalItemsCount: number;
  itemsPerPage: number;
  onPageChange: (event: React.ChangeEvent<unknown>, newPage: number) => void;
  onRowsPerPageChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
}

const JobPostList = ({
  columns,
  data,
  currentPage,
  totalItemsCount,
  itemsPerPage,
  onPageChange,
  onRowsPerPageChange,
}: JobPostListProps) => {
  const totalPages = Math.ceil(totalItemsCount / itemsPerPage);

  return (
    <>
      <StyledDynamicTableContainer>
        <DynamicTable columns={columns} data={data} />
      </StyledDynamicTableContainer>
      <PaginationContainer>
        <Pagination
          size="small"
          color="primary"
          shape="rounded"
          count={totalPages}
          page={currentPage}
          onChange={onPageChange}
          siblingCount={1} // Number of sibling pages to show
          boundaryCount={2} // Number of boundary pages to show
        />
      </PaginationContainer>
    </>
  );
};

export default JobPostList;

const StyledDynamicTableContainer = styled.div`
  width: 100%;
  min-width: 800px;
  overflow-x: auto;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 40px;
`;
