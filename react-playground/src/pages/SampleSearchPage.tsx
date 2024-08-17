import React, { useEffect, useState } from "react";
import axios from "axios";
import JobPostList from "../components/jobPostList/JobPostList";
import SearchOptions from "../components/common/SearchOptions";
import Button from "@mui/material/Button";
import Header from "../components/common/Header";
import { SelectChangeEvent } from "@mui/material";
import { JobPostListColumn } from "../types/JobPostDataType";

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

const SampleSearchPage = () => {
  const [searchCriteria, setSearchCriteria] = useState<SearchCriteria>({
    compAddr: "",
    jobNm: "",
    empType: "",
    envEyesight: "",
    envLiftPower: "",
    envBothHands: "",
  });
  const [jobPosts, setJobPosts] = useState<JobPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [totalItemsCount, setTotalItemsCount] = useState<number>(0);

  useEffect(() => {
    const fetchJobPosts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "http://localhost:8000/job_posts/search",
          {
            params: {
              ...searchCriteria,
              start: (currentPage - 1) * itemsPerPage,
              limit: itemsPerPage,
            },
          }
        );

        response.data.job_posts.forEach((jobPost: JobPost) => {
          jobPost.compAddr =
            jobPost.compAddr.split(" ")[0] +
            " " +
            jobPost.compAddr.split(" ")[1];

          jobPost.envBothHands = jobPost.envBothHands.substring(
            0,
            jobPost.envBothHands.indexOf("작")
          );

          jobPost.envLiftPower = jobPost.envLiftPower.substring(
            0,
            jobPost.envLiftPower.indexOf("g") + 1
          );
        });

        setJobPosts(response.data.job_posts);
        setTotalItemsCount(response.data.total_count);
        setLoading(false);
      } catch (err) {
        if (axios.isAxiosError(err) && err.message) {
          setError(err.message);
        } else {
          setError("An unexpected error occurred.");
        }
        setLoading(false);
      }
    };

    fetchJobPosts();
  }, [searchCriteria, currentPage, itemsPerPage]);

  const handleSearch = () => {
    setCurrentPage(1); // 검색 시 첫 페이지로 돌아감
  };

  const handleChange = (event: SelectChangeEvent<string>) => {
    const { name, value } = event.target;
    setSearchCriteria((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    setCurrentPage(newPage); // MUI의 페이지는 0부터 시작하므로 +1
  };

  const handleRowsPerPageChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setItemsPerPage(parseInt(event.target.value as string, 10));
    setCurrentPage(1); // 페이지당 아이템 수 변경 시 첫 페이지로 돌아감
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const columns: JobPostListColumn[] = [
    {
      id: "busplaName",
      label: "사업장명",
      minWidth: "80px",
      colAlign: "center",
      rowAlign: "left",
    },
    {
      id: "compAddr",
      label: "사업장 주소",
      minWidth: "130px",
      colAlign: "center",
      rowAlign: "left",
    },
    {
      id: "empType",
      label: "고용 형태",
      minWidth: "100px",
      colAlign: "center",
      rowAlign: "center",
    },
    {
      id: "jobNm",
      label: "모집 직종",
      minWidth: "120px",
      colAlign: "center",
      rowAlign: "left",
    },
    {
      id: "salaryType",
      label: "임금 형태",
      minWidth: "100px",
      colAlign: "center",
      rowAlign: "center",
    },
    {
      id: "salary",
      label: "임금",
      minWidth: "90px",
      colAlign: "center",
      rowAlign: "left",
    },
    {
      id: "envBothHands",
      label: "양손",
      minWidth: "60px",
      colAlign: "center",
      rowAlign: "left",
    },
    {
      id: "envEyesight",
      label: "시력",
      minWidth: "60px",
      colAlign: "center",
      rowAlign: "left",
    },
    {
      id: "envLiftPower",
      label: "드는힘",
      minWidth: "60px",
      colAlign: "center",
      rowAlign: "left",
    },
    {
      id: "termDate",
      label: "모집 기간",
      minWidth: "220px",
      colAlign: "center",
      rowAlign: "center",
    },
  ];

  return (
    <>
      <Header />
      <div style={{ padding: 20 }}>
        <SearchOptions
          searchCriteria={searchCriteria}
          handleChange={handleChange}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSearch}
          style={{ marginBottom: 20 }}
        >
          Search
        </Button>
        <JobPostList
          columns={columns}
          data={jobPosts}
          currentPage={currentPage}
          totalItemsCount={totalItemsCount}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleRowsPerPageChange}
        />
      </div>
    </>
  );
};

export default SampleSearchPage;
