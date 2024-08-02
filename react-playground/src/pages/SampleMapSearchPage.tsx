import { useEffect } from "react";

const SampleMapSearchPage = () => {
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
  }, []);

  return (
    <>
      <h1>지도</h1>
      <div id="map" style={{ width: "100%", height: "100vh" }} />
    </>
  );
};

// interface Coordinates {
//   latitude: number;
//   longitude: number;
// }

// const SampleMapSearchPage = () => {
//   const [coordinates, setCoordinates] = useState<Coordinates | null>({
//     latitude: 37.5665, // 서울의 위도
//     longitude: 126.978, // 서울의 경도
//   });

//   useEffect(() => {
//     // 실제 API 호출로 좌표를 가져올 경우:
//     /*
//     axios.get('/api/map-data')
//       .then(response => {
//         setCoordinates({
//           latitude: response.data.latitude,
//           longitude: response.data.longitude,
//         });
//       })
//       .catch(error => {
//         console.error('지도 데이터 가져오기 실패:', error);
//       });
//     */
//   }, []);

//   if (coordinates === null) {
//     return <div>위치 데이터 로딩 중...</div>;
//   }

//   return (
//     <div style={{ padding: 20 }}>
//       <h1>네이버 지도</h1>
//       {/* <NaverMap coordinates={coordinates} /> */}
//       <div id="map" style={{ width: "100%", height: "500px" }}></div>
//     </div>
//   );
// };

export default SampleMapSearchPage;
