import React, { useEffect, useRef } from "react";
import styled from "styled-components";

interface JobPostDetailMapProps {
  longitude: number;
  latitude: number;
}

const JobPostDetailMap = ({ longitude, latitude }: JobPostDetailMapProps) => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const { naver } = window;

    if (!mapRef.current || !naver) {
      console.error("Naver Maps API is not loaded.");
      return;
    }

    const center = new naver.maps.LatLng(latitude, longitude);

    const mapOptions: naver.maps.MapOptions = {
      center: center,
      zoom: 15,
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

    // 지도 생성
    const map = new naver.maps.Map(mapRef.current, mapOptions);

    // 마커 생성
    new naver.maps.Marker({
      position: center,
      map: map,
    });
  }, [latitude, longitude]);

  return <StyledMap ref={mapRef}></StyledMap>;
};

export default JobPostDetailMap;

const StyledMap = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 12px;
`;
