import React, { useEffect, useState } from "react";
import axios from "axios";
import JobPostList from "../components/jobPostList/JobPostList";
import SearchOptions from "../components/common/SearchOptions";
import Button from "@mui/material/Button";
import Header from "../components/common/Header";
import { SelectChangeEvent } from "@mui/material";
import {
  JobPostListData,
  jobPostListColumns,
  SearchCriteria,
} from "../types/JobPostDataType";

const SampleSearchPage = () => {
  const [searchCriteria, setSearchCriteria] = useState<SearchCriteria>({
    compAddr: "",
    jobNm: "",
    empType: "",
    envEyesight: "",
    envLiftPower: "",
    envBothHands: "",
  });
  const [jobPosts, setJobPosts] = useState<JobPostListData[]>([]);
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

        response.data.job_posts.forEach((jobPost: JobPostListData) => {
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
          columns={jobPostListColumns}
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
