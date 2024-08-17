import React from "react";
import Paper from "@mui/material/Paper";
import DynamicTable from "./DynamicTable";
import styled from "styled-components";
import { Pagination } from "@mui/material";
import { JobPostListColumn } from "../../types/JobPostDataType";

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
      <StyledPaper>
        <StyledDynamicTableContainer>
          <DynamicTable columns={columns} data={data} />
        </StyledDynamicTableContainer>
      </StyledPaper>
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

const StyledPaper = styled(Paper)`
  margin-bottom: 1rem;
  elevation: 0;
`;

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
