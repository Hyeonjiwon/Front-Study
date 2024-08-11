import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { JobPostDataType } from "../types/JobPostDataType";

interface Coordinates {
  latitude: number;
  longitude: number;
}

interface JobPostType {
  coordinates: Coordinates;
  jobPostData: JobPostDataType[];
  setSortedjobPostData?: React.Dispatch<
    React.SetStateAction<JobPostDataType[]>
  >;
}

const FieldMap = ({
  coordinates,
  jobPostData,
  setSortedjobPostData,
}: JobPostType) => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const { naver } = window;
  let map: naver.maps.Map;
  const [newMap, setNewMap] = useState<naver.maps.Map | null>(null);
  const createMarkerList: naver.maps.Marker[] = []; //마커를 담을 배열
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!mapRef.current || !naver) {
      console.error("Naver Maps API is not loaded.");
      return;
    }

    const center = new window.naver.maps.LatLng(
      coordinates.latitude,
      coordinates.longitude
    );

    //지도 옵션 설정
    const mapOptions: naver.maps.MapOptions = {
      center: center,
      zoom: 12,
      minZoom: 11,
      maxZoom: 19,
      zoomControl: true,
      zoomControlOptions: {
        style: naver.maps.ZoomControlStyle.SMALL,
        position: naver.maps.Position.TOP_RIGHT,
      },
      mapDataControl: false,
      scaleControl: false,
    };

    //설정해놓은 옵션을 바탕으로 지도 생성
    map = new window.naver.maps.Map(mapRef.current, mapOptions);
    setNewMap(map);
    //마커 생성 함수 호출
    addMarkers();
  }, [coordinates, jobPostData, viewportWidth]);

  const addMarkers = () => {
    if (coordinates) {
      addMarker("1", "init", coordinates.latitude, coordinates.longitude);
    }
    jobPostData.forEach((data) => {
      const { id, title, lat, lng } = data;
      addMarker(id, title, lat, lng);
    });
  };

  const addMarker = (id: string, title: string, lat: number, lng: number) => {
    try {
      var newMarker = new naver.maps.Marker({
        position: new naver.maps.LatLng(lat, lng),
        map,
        title: title,
        clickable: true,
      });
      newMarker.setTitle(title);
      createMarkerList.push(newMarker);
      naver.maps.Event.addListener(newMarker, "click", () =>
        markerClickHandler(id)
      );
    } catch (e) {}
  };

  //마커를 클릭 이벤트 핸들러
  const markerClickHandler = (id: string) => {
    console.log("Marker clicked!");
  };

  return (
    <StyledMapContainer>
      <StyledMap id="map" ref={mapRef}></StyledMap>
    </StyledMapContainer>
  );
};

export default FieldMap;

const StyledMapContainer = styled.div`
  position: relative;
`;

const StyledMap = styled.div`
  width: 100%;
  height: 47rem;
  margin: 0 auto;
`;
