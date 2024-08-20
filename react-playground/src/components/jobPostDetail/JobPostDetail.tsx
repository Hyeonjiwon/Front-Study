import styled from "styled-components";
import { JobPostListData } from "../../types/JobPostDataType";
import IconLike from "../../assets/icon/ic_like.svg";
import IconScrap from "../../assets/icon/ic_scrap.svg";
import Button from "../common/Button";
import JobPostDetailMap from "../map/JobPostDateilMap";

const JobPostDetail = ({ jobPost }: { jobPost: JobPostListData }) => {
  let preferential = "";
  if (jobPost.reqCareer) preferential += `경력: ${jobPost.reqCareer} / `;
  if (jobPost.reqEduc) preferential += `학력: ${jobPost.reqEduc} / `;
  if (jobPost.reqLicens) preferential += `자격증: ${jobPost.reqLicens} / `;
  if (jobPost.reqMajor) preferential += `전공: ${jobPost.reqMajor}`;

  return (
    <DetailContainer>
      <HeadContainer>
        <FrameParent>
          <Parent>
            <Text>{jobPost.busplaName}</Text>
            <Icon small src={IconLike} />
          </Parent>
          <Title>{`[${jobPost.empType}] ${jobPost.jobNm} 모집`}</Title>
          <Group>
            <Text>{jobPost.area}</Text>
            <Text>{jobPost.empType}</Text>
            <Text>{jobPost.termDate}</Text>
          </Group>
        </FrameParent>
        <BtnParent>
          <Button>지원하기</Button>
          <Icon src={IconScrap} />
          <ColoredText>링크 복사</ColoredText>
        </BtnParent>
      </HeadContainer>
      <hr />
      <Section title="모집 상세">
        <InfoGroup>
          <InfoItem>
            <Label>모집 직종</Label>
            <Value>{jobPost.jobNm}</Value>
          </InfoItem>
          <InfoItem>
            <Label>사업장 주소</Label>
            <Value>{jobPost.compAddr}</Value>
          </InfoItem>
          <InfoItem>
            <Label>고용 형태</Label>
            <Value>{jobPost.empType}</Value>
          </InfoItem>
          <InfoItem>
            <Label>임금 형태</Label>
            <Value>{jobPost.empType}</Value>
          </InfoItem>
          <InfoItem>
            <Label>임금</Label>
            <Value>{jobPost.salary}</Value>
          </InfoItem>
        </InfoGroup>
      </Section>
      <hr />
      <Section title="기업 소개">
        <InfoGroup>
          <InfoItem>
            <Label>담당 업무</Label>
            <Value>{jobPost.jobNm}</Value>
          </InfoItem>
          <InfoItem>
            <Label>자격 요건</Label>
            <Value>{preferential}</Value>
          </InfoItem>
          <InfoItem>
            <Label>우대 사항</Label>
            <Value>{preferential}</Value>
          </InfoItem>
          <InfoItem>
            <Label>근무 위치</Label>
            <Value>{jobPost.compAddr}</Value>
          </InfoItem>
          <JobPostDetailMapContainer>
            <JobPostDetailMap
              longitude={jobPost.longitude}
              latitude={jobPost.latitude}
            />
          </JobPostDetailMapContainer>
        </InfoGroup>
      </Section>
    </DetailContainer>
  );
};

export default JobPostDetail;

// 스타일 정의
export const DetailContainer = styled.div`
  background: white;
  border-radius: 12px;
  border: 1px solid #c5c5c5;
  padding: 60px;
  margin-top: 20px;
`;

export const Section = styled.div`
  margin-top: 20px;
`;

// 전체 컨테이너
export const HeadContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  font-size: 18px;
  color: #000;
  padding-bottom: 60px;
`;

// 프레임 컨테이너
export const FrameParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  font-size: 18px;
`;

// 부모 컨테이너
export const Parent = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

// 제목 스타일
export const Title = styled.div`
  font-size: 21px;
  font-weight: 500;
  text-align: left;
`;

// 그룹 컨테이너
export const Group = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

// 버튼 컨테이너
export const BtnParent = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  color: #fff;
`;

// 버튼 스타일
export const Btn = styled.div`
  width: 300px;
  border-radius: 6px;
  background-color: #224a99;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 60px;
  box-sizing: border-box;
`;

// 텍스트 스타일
export const Text = styled.div`
  line-height: 150%;
  font-weight: 500;
`;

// 강조된 텍스트 스타일
export const ColoredText = styled.div`
  width: 140px;
  font-size: 18px;
  line-height: 150%;
  font-weight: 500;
  color: #224a99;
  text-align: center;
  display: inline-block;
`;

// 아이콘 스타일
export const Icon = styled.img<{ small?: boolean }>`
  width: ${(props) => (props.small ? "24px" : "40px")};
  height: ${(props) => (props.small ? "24px" : "40px")};
`;

// 정보 그룹
export const InfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
`;

// 정보 항목
export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
`;

// 라벨 스타일
export const Label = styled.div`
  font-size: 16px;
  line-height: 150%;
  font-weight: 500;
  align-self: stretch;
`;

// 값 스타일
export const Value = styled.div`
  font-size: 16px;
  line-height: 150%;
  align-self: stretch;
  position: relative;
`;

const JobPostDetailMapContainer = styled.div`
  width: 400px;
  height: 200px;
  border-radius: 12px;
`;
