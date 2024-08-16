import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

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
      values: [
        "5Kg 이내의 물건을 다룰 수 있음",
        "5~20Kg의 물건을 다룰 수 있음",
        "20Kg 이상의 물건을 다룰 수 있음",
      ],
    },
    {
      id: "envBothHands",
      label: "양손",
      values: ["양손작업 가능", "한손보조작업 가능", "한손작업 가능"],
    },
  ];

  return (
    <>
      {options.map((opt) => (
        <FormControl
          key={opt.id}
          variant="outlined"
          style={{ minWidth: 200, marginBottom: 20, marginRight: 20 }}
        >
          <InputLabel id={`${opt.id}-label`}>{opt.label}</InputLabel>
          <Select
            name={opt.id}
            value={searchCriteria[opt.id as keyof SearchCriteria] || ""}
            onChange={handleChange}
            label={opt.label}
            labelId={`${opt.id}-label`} // labelId를 추가하여 InputLabel과 연결
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
        </FormControl>
      ))}
    </>
  );
};

export default SearchOptions;
