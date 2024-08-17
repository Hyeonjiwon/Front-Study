export interface JobPostDataType {
  [key: string]: string | number | boolean | [] | {};
  address: { area: string; fullAddress: string };
  id: string;
  title: string;
  lat: number;
  lng: number;
}

export interface JobPostListColumn {
  id: string;
  label: string;
  minWidth?: string;
  colAlign: "inherit" | "left" | "center" | "right" | "justify";
  rowAlign: "inherit" | "left" | "center" | "right" | "justify";
}
