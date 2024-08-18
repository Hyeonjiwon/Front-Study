export interface JobPostMapDataType {
  [key: string]: string | number | boolean | [] | {};
  address: { area: string; fullAddress: string };
  id: string;
  title: string;
  lat: number;
  lng: number;
}

export interface JobPostListData {
  id: string;
  busplaName: string;
  cntctNo: string;
  compAddr: string;
  empType: string;
  enterType: string;
  jobNm: string;
  offerregDt: string;
  regDt: string;
  regagnName: string;
  reqCareer: string;
  reqEduc: string;
  rno: string;
  rnum: string;
  salary: string;
  salaryType: string;
  termDate: string;
  reqMajor?: string;
  envBothHands: string;
  envEyesight: string;
  envLiftPower: string;
  envLstnTalk: string;
  envStndWalk: string;
  envHandwork: string;
  reqLicens?: string;
}

export interface SearchCriteria {
  compAddr: string;
  jobNm: string;
  empType: string;
  envEyesight: string;
  envLiftPower: string;
  envBothHands: string;
}

export interface JobPostListColumn {
  id: string;
  label: string;
  minWidth?: string;
  colAlign: "inherit" | "left" | "center" | "right" | "justify";
  rowAlign: "inherit" | "left" | "center" | "right" | "justify";
}

export const jobPostListColumns: JobPostListColumn[] = [
  {
    id: "busplaName",
    label: "사업장명",
    minWidth: "80px",
    colAlign: "center",
    rowAlign: "left",
  },
  {
    id: "compAddr",
    label: "사업장 주소",
    minWidth: "130px",
    colAlign: "center",
    rowAlign: "left",
  },
  {
    id: "empType",
    label: "고용 형태",
    minWidth: "100px",
    colAlign: "center",
    rowAlign: "center",
  },
  {
    id: "jobNm",
    label: "모집 직종",
    minWidth: "120px",
    colAlign: "center",
    rowAlign: "left",
  },
  {
    id: "salaryType",
    label: "임금 형태",
    minWidth: "100px",
    colAlign: "center",
    rowAlign: "center",
  },
  {
    id: "salary",
    label: "임금",
    minWidth: "90px",
    colAlign: "center",
    rowAlign: "left",
  },
  {
    id: "envBothHands",
    label: "양손",
    minWidth: "60px",
    colAlign: "center",
    rowAlign: "left",
  },
  {
    id: "envEyesight",
    label: "시력",
    minWidth: "60px",
    colAlign: "center",
    rowAlign: "left",
  },
  {
    id: "envLiftPower",
    label: "드는힘",
    minWidth: "60px",
    colAlign: "center",
    rowAlign: "left",
  },
  {
    id: "termDate",
    label: "모집 기간",
    minWidth: "220px",
    colAlign: "center",
    rowAlign: "center",
  },
];
