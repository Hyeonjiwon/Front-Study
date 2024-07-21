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

interface JobPost {
  busplaName: string;
  cntctNo: string;
  compAddr: string;
  empType: string;
  enterType: string;
  jobNm: string;
  offerregDt: string;
  regDt: string;
  regagnName: string;
  reqCareer: string;
  reqEduc: string;
  rno: string;
  rnum: string;
  salary: string;
  salaryType: string;
  termDate: string;
  reqMajor?: string;
  envBothHands: string;
  envEyesight: string;
  envLiftPower: string;
  envLstnTalk: string;
  envStndWalk: string;
  envHandwork: string;
  reqLicens?: string;
}

const SampleSearchPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [jobPosts, setJobPosts] = useState<JobPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/job_posts/")
      .then((response) => {
        setJobPosts(response.data.job_posts);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const handleSearch = async () => {
    try {
      // 검색어를 이용하여 MongoDB에서 데이터를 조회하는 API 엔드포인트를 호출합니다.
      const response = await axios.get(
        `http://localhost:8000/job_posts/data?search=${searchTerm}`
      ); // 검색 API의 실제 URL을 입력하세요

      // API에서 받아온 데이터를 state에 저장합니다.
      setJobPosts(response.data);
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
              <TableCell>사업장명</TableCell>
              <TableCell>사업장 주소</TableCell>
              <TableCell>고용 형태</TableCell>
              <TableCell>모집 직종</TableCell>
              <TableCell>임금 형태</TableCell>
              <TableCell>임금</TableCell>
              <TableCell>양손</TableCell>
              <TableCell>시력</TableCell>
              <TableCell>드는힘</TableCell>
              <TableCell>모집 기간</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {jobPosts.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.busplaName}</TableCell>
                <TableCell>{item.compAddr}</TableCell>
                <TableCell>{item.empType}</TableCell>
                <TableCell>{item.jobNm}</TableCell>
                <TableCell>{item.salaryType}</TableCell>
                <TableCell>{item.salary}</TableCell>
                <TableCell>{item.envBothHands}</TableCell>
                <TableCell>{item.envEyesight}</TableCell>
                <TableCell>{item.envLiftPower}</TableCell>
                <TableCell>{item.termDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default SampleSearchPage;
