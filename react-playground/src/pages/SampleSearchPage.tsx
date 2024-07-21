import React, { useState, useEffect } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

const SampleSearchPage: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // MongoDB에서 데이터를 조회하는 API 엔드포인트를 호출합니다.
      const response = await axios.get("http://your-api-endpoint/data"); // 데이터 조회 API의 실제 URL을 입력하세요

      // API에서 받아온 데이터를 state에 저장합니다.
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = async () => {
    try {
      // 검색어를 이용하여 MongoDB에서 데이터를 조회하는 API 엔드포인트를 호출합니다.
      const response = await axios.get(
        `http://your-api-endpoint/data?search=${searchTerm}`
      ); // 검색 API의 실제 URL을 입력하세요

      // API에서 받아온 데이터를 state에 저장합니다.
      setData(response.data);
    } catch (error) {
      console.error("Error searching data:", error);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <TextField
        label="Search"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: 20 }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSearch}
        style={{ marginBottom: 20 }}
      >
        Search
      </Button>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Column 1</TableCell>
              <TableCell>Column 2</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item._id}>
                <TableCell>{item.column1}</TableCell>
                <TableCell>{item.column2}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="primary"
                    // onClick={() => handleEdit(item)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    // onClick={() => handleDelete(item)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default SampleSearchPage;
