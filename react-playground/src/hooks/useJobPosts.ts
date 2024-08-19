import { useQuery, UseQueryResult } from "react-query";
import { fetchJobPostList, FetchJobPostsParams } from "../api/jobPosts";
import { JobPostsResponse } from "../api/jobPosts"; // 필요한 경우 추가

export const useJobPosts = (
  params: FetchJobPostsParams
): UseQueryResult<JobPostsResponse> => {
  return useQuery<JobPostsResponse, Error>(
    ["jobPostList", params], // 쿼리 키: params를 포함하여 쿼리 캐싱 및 구분
    () => fetchJobPostList(params), // 쿼리 함수
    {
      staleTime: 60000, // 예: 데이터가 신선하게 유지되는 시간
      // 필요에 따라 추가 옵션을 설정
    }
  );
};
