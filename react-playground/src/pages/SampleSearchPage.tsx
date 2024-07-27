import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import axios from "axios";
import React, { useEffect, useState } from "react";
import DynamicTable from "../components/DynamicTable";

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
    // MongoDB에서 데이터를 조회하는 API 엔드포인트 호출
    axios
      .get("http://127.0.0.1:8000/job_posts/")
      .then((response) => {
        setJobPosts(response.data.job_posts); // API에서 받아온 데이터를 state에 저장
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

  const columns = [
    { id: "busplaName", label: "사업장명" },
    { id: "compAddr", label: "사업장 주소" },
    { id: "empType", label: "고용 형태" },
    { id: "jobNm", label: "모집 직종" },
    { id: "salaryType", label: "임금 형태" },
    { id: "salary", label: "임금" },
    { id: "envBothHands", label: "양손" },
    { id: "envEyesight", label: "시력" },
    { id: "envLiftPower", label: "드는힘" },
    { id: "termDate", label: "모집 기간" },
  ];

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
      <DynamicTable columns={columns} data={jobPosts} />
    </div>
  );
};

export default SampleSearchPage;
