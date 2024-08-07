export interface JobPostDataType {
  [key: string]: string | number | boolean | [] | {};
  address: { area: string; fullAddress: string };
  _id: string;
  lat: number;
  lng: number;
  title: string;
}
