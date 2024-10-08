import { Pagination } from "@mui/material";
import React from "react";
import styled from "styled-components";
import {
  JobPostListColumn,
  JobPostListData,
} from "../../types/JobPostDataType";
import DynamicTable from "./DynamicTable";

interface JobPostListProps {
  columns: JobPostListColumn[];
  data: any[];
  currentPage: number;
  totalItemsCount: number;
  itemsPerPage: number;
  onPageChange: (event: React.ChangeEvent<unknown>, newPage: number) => void;
  onRowsPerPageChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
  onRowClick: (jobPost: JobPostListData) => void;
}

const JobPostList = ({
  columns,
  data,
  currentPage,
  totalItemsCount,
  itemsPerPage,
  onPageChange,
  onRowsPerPageChange,
  onRowClick,
}: JobPostListProps) => {
  const totalPages = Math.ceil(totalItemsCount / itemsPerPage);

  return (
    <Container>
      <StyledDynamicTableContainer>
        <DynamicTable columns={columns} data={data} onRowClick={onRowClick} />
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
    </Container>
  );
};

export default JobPostList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 1040px;
  max-width: 1040px;
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
