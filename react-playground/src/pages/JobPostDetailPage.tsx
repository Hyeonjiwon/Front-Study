import { useLocation } from "react-router-dom";
import { JobPostListData } from "../types/JobPostDataType";
import Header from "../components/common/Header";
import Rectangle from "../assets/icon/Rectangle.png";
import JobPostDetail from "../components/jobPostDetail/JobPostDetail";
import styled from "styled-components";

const JobPostDetailPage = () => {
  const location = useLocation();
  const { jobPost } = location.state as { jobPost: JobPostListData };

  if (!jobPost) {
    return <div>No job post selected</div>;
  }

  return (
    <>
      <Header />
      <Container>
        <ImageWrapper>
          <StyledImage src={Rectangle} alt="Rectangle" />
        </ImageWrapper>
        <JobPostDetail jobPost={jobPost} />
      </Container>
    </>
  );
};

export default JobPostDetailPage;

// Styled Components

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 100%;
  display: block;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
