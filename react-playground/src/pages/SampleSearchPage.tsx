import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
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

interface SearchCriteria {
  compAddr: string;
  jobNm: string;
  empType: string;
  envEyesight: string;
  envLiftPower: string;
  envBothHands: string;
}

const SampleSearchPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [jobPosts, setJobPosts] = useState<JobPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [searchCriteria, setSearchCriteria] = useState({
    compAddr: "",
    jobNm: "",
    empType: "",
    envEyesight: "",
    envLiftPower: "",
    envBothHands: "",
  });

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
      // "None"으로 선택된 항목을 "-"로 변경
      const adjustedSearchCriteria = Object.fromEntries(
        Object.entries(searchCriteria).map(([key, value]) => [
          key,
          value === "None" ? "-" : value,
        ])
      );

      // 검색 조건을 이용하여 MongoDB에서 데이터를 조회하는 API 엔드포인트 호출
      const response = await axios.get(
        "http://localhost:8000/job_posts/search",
        {
          params: adjustedSearchCriteria,
        }
      );

      // API에서 받아온 데이터를 state에 저장
      setJobPosts(response.data.job_posts);
    } catch (error) {
      console.error("Error searching data:", error);
    }
  };

  const handleChange = (e: SelectChangeEvent<string>) => {
    const name = e.target.name as keyof SearchCriteria;
    setSearchCriteria({
      ...searchCriteria,
      [name]: e.target.value as string,
    });
  };

  const option = [
    {
      id: "compAddr",
      label: "근무 위치",
      values: [
        "서울특별시",
        "경기도",
        "강원도",
        "충청북도",
        "충청남도",
        "전라북도",
        "전라남도",
        "경상북도",
        "경상남도",
        "제주특별자치도",
      ],
    },
    {
      id: "jobNm",
      label: "모집 직종",
      values: ["콜센터 상담원", "IT 개발자", "마케팅 매니저"],
    },
    {
      id: "empType",
      label: "고용 형태",
      values: ["상용직", "계약직", "시간제"],
    },
    {
      id: "envEyesight",
      label: "시력",
      values: [
        "일상적 활동 가능",
        "비교적 큰 인쇄물을 읽을 수 있음",
        "아주 작은 글씨를 읽을 수 있음",
      ],
    },
    {
      id: "envLiftPower",
      label: "드는힘",
      values: [
        "5Kg 이내의 물건을 다룰 수 있음",
        "5~20Kg의 물건을 다룰 수 있음",
        "20Kg 이상의 물건을 다룰 수 있음",
      ],
    },
    {
      id: "envBothHands",
      label: "양손",
      values: ["양손작업 가능", "한손보조작업 가능", "한손작업 가능"],
    },
  ];

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
      {option.map((opt) => (
        <FormControl
          key={opt.id}
          variant="outlined"
          style={{ minWidth: 200, marginBottom: 20, marginRight: 20 }}
        >
          <InputLabel>{opt.label}</InputLabel>
          <Select
            name={opt.id}
            value={searchCriteria[opt.id as keyof SearchCriteria] || ""}
            onChange={handleChange}
            label={opt.label}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {opt.values.map((value) => (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ))}
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
