import { SelectChangeEvent } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import Header from "../components/common/Header";
import SearchOptions from "../components/common/SearchOptions";
import JobPostList from "../components/jobPostList/JobPostList";
import JobPostMap from "../components/map/JobPostMap";
import {
  jobPostListColumns,
  JobPostListData,
  JobPostMapDataType,
  SearchCriteria,
} from "../types/JobPostDataType";
import { useNavigate } from "react-router-dom";

const SampleMapSearchPage = () => {
  const [searchCriteria, setSearchCriteria] = useState<SearchCriteria>({
    compAddr: "",
    jobNm: "",
    empType: "",
    envEyesight: "",
    envLiftPower: "",
    envBothHands: "",
  });
  const [searchKeyword, setSearchKeyword] = useState("");
  const [jobPostMapData, setJobPostMapData] = useState<JobPostMapDataType[]>(
    []
  );
  const [sortedjobPostMapData, setSortedjobPostMapData] = useState<
    JobPostMapDataType[]
  >([]);
  const [jobPosts, setJobPosts] = useState<JobPostListData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [totalItemsCount, setTotalItemsCount] = useState<number>(0);

  const navigate = useNavigate();

  useEffect(() => {
    // API 호출 함수
    const fetchJobPostData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/job_posts/");
        const data = response.data;

        // 받아온 데이터를 원하는 형식으로 변환
        const transformedData = data["job_posts"].map((item: any) => ({
          id: item.id,
          title: item.busplaName,
          address: { area: item.compAddr, fullAddress: item.compAddr },
          lat: parseFloat(item.latitude),
          lng: parseFloat(item.longitude),
        }));

        setJobPostMapData(transformedData);
      } catch (error) {
        console.error("Failed to fetch job post data:", error);
      }
    };

    fetchJobPostData();
    setSearchKeyword("서울시 마포구");
  }, []);

  // 초기 좌표 설정 (전체 지도 보기용)
  const initialCoordinates = { latitude: 37.5665, longitude: 126.978 };

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

  const handleRowClick = (jobPost: JobPostListData) => {
    navigate(`/job-post/${jobPost.id}`, { state: { jobPost } });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <Header></Header>
      <Container>
        <StyledMapContanier>
          <JobPostMap
            coordinates={initialCoordinates}
            jobPostData={jobPostMapData}
            setSortedjobPostData={setSortedjobPostMapData}
          />
        </StyledMapContanier>
        <SearchOptions
          searchCriteria={searchCriteria}
          handleChange={handleChange}
        />
        <div>
          <StyledListHeader>
            <Text>검색결과</Text>
            <SelectBox>tt</SelectBox>
          </StyledListHeader>
          <JobPostList
            columns={jobPostListColumns}
            data={jobPosts}
            currentPage={currentPage}
            totalItemsCount={totalItemsCount}
            itemsPerPage={itemsPerPage}
            onPageChange={handlePageChange}
            onRowsPerPageChange={handleRowsPerPageChange}
            onRowClick={handleRowClick}
          />
        </div>
      </Container>
    </>
  );
};

export default SampleMapSearchPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 1040px;
  max-width: 1040px;
`;

const StyledMapContanier = styled.div`
  padding-top: 60px;
  padding-bottom: 40px;
  width: 100%;
  max-width: 120rem;
  min-width: 1040px;
  height: 100%;
`;

const StyledListHeader = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  text-align: left;
  font-size: 21px;
  color: #191919;
  margin-bottom: 24px;
`;

const Text = styled.div``;

const SelectBox = styled.div``;
