import { useEffect, useState } from "react";
import JobPostMap from "../components/JobPostMap";
import { JobPostDataType } from "../types/JobPostDataType";

const SampleMapSearchPage = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [jobPostData, setJobPostData] = useState<JobPostDataType[]>([]);

  useEffect(() => {
    const mapDiv = document.getElementById("map") as HTMLElement;
    const map = new window.naver.maps.Map(mapDiv, {
      center: new window.naver.maps.LatLng(37.5665, 126.978),
      zoom: 10,
    });

    new window.naver.maps.Marker({
      position: new window.naver.maps.LatLng(37.5665, 126.978),
      map: map,
    });

    let jobPost = [
      {
        _id: "1",
        title: "Sample Location 1",
        address: { area: "중구", fullAddress: "서울특별시 중구 세종대로 110" },
        lat: 37.5665,
        lng: 126.978,
      },
      {
        _id: "2",
        title: "Sample Location 2",
        address: { area: "종로구", fullAddress: "서울특별시 종로구 종로 1" },
        lat: 37.5702,
        lng: 126.982,
      },
      {
        _id: "3",
        title: "Sample Location 3",
        address: {
          area: "종로구",
          fullAddress: "서울특별시 종로구 청계천로 1",
        },
        lat: 37.5719,
        lng: 126.976,
      },
    ];

    setJobPostData(jobPost);

    setSearchKeyword("서울시 마포구");
  }, []);

  // 초기 좌표 설정 (전체 지도 보기용)
  const initialCoordinates = { latitude: 37.5665, longitude: 126.978 };

  return (
    <>
      <h1>지도</h1>
      {/* <div id="map" style={{ width: "100%", height: "100vh" }} /> */}
      <br></br>
      <JobPostMap coordinates={initialCoordinates} jobPostData={jobPostData} />
    </>
  );
};

export default SampleMapSearchPage;
