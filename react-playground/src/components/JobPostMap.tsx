import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { JobPostDataType } from "../types/JobPostDataType";
import CustomMapMarker from "./map/CustomMapMarker";

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
  // const createMarkerList: naver.maps.Marker[] = []; //마커를 담을 배열
  const markerListRef = useRef<naver.maps.Marker[]>([]); // 마커를 담을 배열을 useRef로 관리
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

    map = new window.naver.maps.Map(mapRef.current, mapOptions);
    setNewMap(map);
    addMarkers(map);
  }, [coordinates, jobPostData, viewportWidth]);

  useEffect(() => {
    if (newMap) {
      console.log("!!", markerListRef);
      const MoveEventListner = naver.maps.Event.addListener(
        newMap,
        "idle",
        idleHandler
      );
      return () => {
        naver.maps.Event.removeListener(MoveEventListner);
      };
    }
  }, [newMap]);

  const addMarkers = (map: naver.maps.Map) => {
    // 기존 마커를 제거하고 리스트 초기화
    markerListRef.current.forEach((marker) => marker.setMap(null));
    markerListRef.current = [];

    jobPostData.forEach((data) => {
      const { id, title, lat, lng } = data;
      addMarker(map, id, title, lat, lng);
    });

    console.log("Markers added:", markerListRef.current);
  };

  const addMarker = (
    map: naver.maps.Map,
    id: string,
    title: string,
    lat: number,
    lng: number
  ) => {
    try {
      const newMarker = new naver.maps.Marker({
        position: new naver.maps.LatLng(lat, lng),
        map: map,
        title: title,
        clickable: true,
        icon: {
          //html element를 반환하는 CustomMapMarker 컴포넌트 할당
          content: CustomMapMarker({
            title: title,
            windowWidth: viewportWidth,
          }),
          size: new naver.maps.Size(38, 58),
          anchor: new naver.maps.Point(19, 58),
        },
      });
      newMarker.setTitle(title);
      markerListRef.current.push(newMarker); // 마커를 배열에 추가
      naver.maps.Event.addListener(newMarker, "click", () =>
        markerClickHandler(id)
      );
    } catch (e) {
      console.error(e);
    }
  };

  const updateMarkers = () => {
    const map = newMap;
    const markers = markerListRef.current;

    if (!map) return;

    const mapBounds = map.getBounds();
    let marker: naver.maps.Marker, position;

    // 마커의 위치를 position 변수에 저장
    for (let i = 0; i < markers.length; i++) {
      marker = markers[i];
      position = marker.getPosition();

      // mapBounds와 비교하며 마커가 현재 화면에 보이는 영역에 있는지 확인
      if (mapBounds.hasPoint(position)) {
        showMarker(map, marker);
      } else {
        hideMarker(marker);
      }
    }
  };

  const showMarker = (map: naver.maps.Map, marker: naver.maps.Marker) => {
    if (marker.getMap()) return;
    marker.setMap(map);
  };

  const hideMarker = (marker: naver.maps.Marker) => {
    if (!marker.getMap()) return;
    marker.setMap(null);
  };

  //마커 클릭 이벤트 핸들러
  const markerClickHandler = (id: string) => {
    console.log("Marker clicked!");
  };

  const idleHandler = () => {
    updateMarkers();
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
