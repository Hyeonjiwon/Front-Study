export interface JobPostDataType {
  [key: string]: string | number | boolean | [] | {};
  address: { area: string; fullAddress: string };
  id: string;
  title: string;
  lat: number;
  lng: number;
}
