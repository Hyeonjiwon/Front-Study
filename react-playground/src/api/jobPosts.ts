import axios from "axios";
import { JobPostListData } from "../types/JobPostDataType";

export interface FetchJobPostsParams {
  start: number;
  limit: number;
  compAddr?: string;
  jobNm?: string;
  empType?: string;
  envEyesight?: string;
  envLiftPower?: string;
  envBothHands?: string;
}

export interface JobPostsResponse {
  job_posts: JobPostListData[];
  total_count: number;
}

export const fetchJobPostList = async (
  params: FetchJobPostsParams
): Promise<JobPostsResponse> => {
  const { data } = await axios.get<JobPostsResponse>(
    "http://localhost:8000/job_posts/search",
    { params }
  );

  return data;
};
