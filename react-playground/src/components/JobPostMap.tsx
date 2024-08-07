import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { JobPostDataType } from "../types/JobPostDataType";

interface Coordinates {
  latitude: number;
  longitude: number;
}

interface JobPostType {
  // searchKeyword: string;
  coordinates: Coordinates;
  jobPostData: JobPostDataType[];
}

const FieldMap: React.FC<JobPostType> = ({ coordinates, jobPostData }) => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!window.naver || !window.naver.maps) {
      console.error("Naver Maps API is not loaded.");
      return;
    }

    if (mapRef.current) {
      const map = new window.naver.maps.Map(mapRef.current, {
        center: new window.naver.maps.LatLng(
          coordinates.latitude,
          coordinates.longitude
        ),
        zoom: 10,
      });

      jobPostData.forEach((data) => {
        new window.naver.maps.Marker({
          position: new window.naver.maps.LatLng(data.lat, data.lng),
          map,
          title: data.title,
        });
      });
    }
  }, [coordinates, jobPostData]);

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
