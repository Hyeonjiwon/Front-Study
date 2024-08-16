import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import styled from "styled-components";

interface Column {
  id: string;
  label: string;
  minWidth?: number;
  colAlign: "inherit" | "left" | "center" | "right" | "justify";
  rowAlign: "inherit" | "left" | "center" | "right" | "justify";
}

interface DynamicTableProps {
  columns: Column[];
  data: any[];
}

const DynamicTable = ({ columns, data }: DynamicTableProps) => {
  return (
    <StyledTableContainer component={Paper} elevation={0}>
      <StyledTable>
        <StyledTableHead>
          <StyledTableRow>
            {columns.map((column) => (
              <StyledTableColCell
                key={column.id}
                align={column.colAlign || "center"}
                style={{ minWidth: column.minWidth }}
              >
                {column.label}
              </StyledTableColCell>
            ))}
          </StyledTableRow>
        </StyledTableHead>
        <TableBody>
          {data.map((row, rowIndex) => (
            <StyledTableRow key={rowIndex}>
              {columns.map((column) => (
                <StyledTableRowCell
                  key={column.id}
                  align={column.rowAlign || "left"}
                >
                  {row[column.id]}
                </StyledTableRowCell>
              ))}
            </StyledTableRow>
          ))}
        </TableBody>
      </StyledTable>
    </StyledTableContainer>
  );
};

export default DynamicTable;

const StyledTableContainer = styled(TableContainer)`
  border-radius: 16px;
  border: 1px solid #c5c5c5;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;
`;

const StyledTable = styled(Table)`
  width: 100%;
  height: 100%;
`;

const StyledTableHead = styled(TableHead)`
  align-self: stretch;
  height: 63px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-bottom: 2px solid #c1c1c1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const StyledTableRow = styled(TableRow)`
  height: 27px;
`;

const StyledTableColCell = styled(TableCell)`
  font-size: 18px;
  color: #1f1f1f;
`;

const StyledTableRowCell = styled(TableCell)`
  font-size: 16px;
  color: #000000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 16px;
`;
