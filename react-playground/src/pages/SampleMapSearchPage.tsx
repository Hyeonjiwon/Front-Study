import axios from "axios";
import { useEffect, useState } from "react";
import JobPostMap from "../components/JobPostMap";
import { JobPostDataType } from "../types/JobPostDataType";

const SampleMapSearchPage = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [jobPostData, setJobPostData] = useState<JobPostDataType[]>([]);
  const [sortedjobPostData, setSortedjobPostData] = useState<JobPostDataType[]>(
    []
  );

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

        setJobPostData(transformedData);
      } catch (error) {
        console.error("Failed to fetch job post data:", error);
      }
    };

    fetchJobPostData();
    setSearchKeyword("서울시 마포구");
  }, []);

  // 초기 좌표 설정 (전체 지도 보기용)
  const initialCoordinates = { latitude: 37.5665, longitude: 126.978 };

  return (
    <>
      <h1>지도</h1>
      <br></br>
      <JobPostMap
        coordinates={initialCoordinates}
        jobPostData={jobPostData}
        setSortedjobPostData={setSortedjobPostData}
      />
    </>
  );
};

export default SampleMapSearchPage;
