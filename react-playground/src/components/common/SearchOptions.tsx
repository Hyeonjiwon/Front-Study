import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import styled from "styled-components";

interface SearchCriteria {
  compAddr: string;
  jobNm: string;
  empType: string;
  envEyesight: string;
  envLiftPower: string;
  envBothHands: string;
}

interface SearchOptionsProps {
  searchCriteria: SearchCriteria;
  handleChange: (e: SelectChangeEvent<string>) => void;
}

const SearchOptions = ({
  searchCriteria,
  handleChange,
}: SearchOptionsProps) => {
  const options = [
    {
      id: "compAddr",
      label: "근무 위치",
      values: [
        "서울특별시",
        "경기도",
        "강원도",
        "충청북도",
        "충청남도",
        "전라북도",
        "전라남도",
        "경상북도",
        "경상남도",
        "제주특별자치도",
      ],
    },
    {
      id: "jobNm",
      label: "모집 직종",
      values: ["콜센터 상담원", "IT 개발자", "마케팅 매니저"],
    },
    {
      id: "empType",
      label: "고용 형태",
      values: ["상용직", "계약직", "시간제"],
    },
    {
      id: "envEyesight",
      label: "시력",
      values: [
        "일상적 활동 가능",
        "비교적 큰 인쇄물을 읽을 수 있음",
        "아주 작은 글씨를 읽을 수 있음",
      ],
    },
    {
      id: "envLiftPower",
      label: "드는힘",
      values: ["5Kg 이내", "5~20Kg", "20Kg 이상"],
    },
    {
      id: "envBothHands",
      label: "양손",
      values: ["양손작업", "한손보조작업", "한손작업"],
    },
  ];

  return (
    <>
      <Container>
        {options.map((opt) => (
          <StyledFormControl
            key={opt.id}
            sx={{ m: 1, minWidth: 120 }}
            size="small"
          >
            <InputLabel id={`${opt.id}-label`}>{opt.label}</InputLabel>
            <Select
              name={opt.id}
              value={searchCriteria[opt.id as keyof SearchCriteria] || ""}
              onChange={handleChange}
              label={opt.label}
              labelId={`${opt.id}-label`}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {opt.values.map((value) => (
                <MenuItem key={value} value={value}>
                  {value}
                </MenuItem>
              ))}
            </Select>
          </StyledFormControl>
        ))}
      </Container>
    </>
  );
};

export default SearchOptions;

const Container = styled.div`
  width: 1040px;
  margin-bottom: 40px;
  min-width: 1040px;
`;

const StyledFormControl = styled(FormControl)`
  min-width: 100px;
  flex-grow: 1;
  height: 40px;
  marin-left: 0;

  .MuiInputBase-root {
    height: 40px;
  }
`;
