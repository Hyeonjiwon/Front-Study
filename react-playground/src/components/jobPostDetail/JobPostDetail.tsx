import { useState } from "react";
import styled from "styled-components";
import { JobPostListData } from "../../types/JobPostDataType";
import IconLike from "../../assets/icon/ic_like.svg";
import IconScrap from "../../assets/icon/ic_scrap.svg";
import Button from "../common/Button";
import JobPostDetailMap from "../map/JobPostDateilMap";
import Modal from "../common/Modal";
import JobApplicationModalContent from "./JobApplicationPopup";

const JobPostDetail = ({ jobPost }: { jobPost: JobPostListData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
            <Icon small={"true"} src={IconLike} />
          </Parent>
          <Title>{`[${jobPost.empType}] ${jobPost.jobNm} 모집`}</Title>
          <Group>
            <Text>{jobPost.area}</Text>
            <Text>{jobPost.empType}</Text>
            <Text>{jobPost.termDate}</Text>
          </Group>
        </FrameParent>
        <BtnParent>
          <Button onClick={openModal}>지원하기</Button>
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
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <JobApplicationModalContent onClose={closeModal} />
      </Modal>
    </DetailContainer>
  );
};

export default JobPostDetail;

const DetailContainer = styled.div`
  background: white;
  border-radius: 12px;
  border: 1px solid #c5c5c5;
  padding: 60px;
  margin-top: 20px;
`;

const Section = styled.div`
  margin-top: 20px;
`;

const HeadContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  font-size: 18px;
  color: #000;
  padding-bottom: 60px;
`;

const FrameParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  font-size: 18px;
`;

const Parent = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Title = styled.div`
  font-size: 21px;
  font-weight: 500;
  text-align: left;
`;

const Group = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const BtnParent = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  color: #fff;
`;

const Text = styled.div`
  line-height: 150%;
  font-weight: 500;
`;

const ColoredText = styled.div`
  width: 140px;
  font-size: 18px;
  line-height: 150%;
  font-weight: 500;
  color: #224a99;
  text-align: center;
  display: inline-block;
`;

const Icon = styled.img<{ small?: string }>`
  width: ${(props) => (props.small ? "24px" : "40px")};
  height: ${(props) => (props.small ? "24px" : "40px")};
`;

const InfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
`;

const Label = styled.div`
  font-size: 16px;
  line-height: 150%;
  font-weight: 500;
  align-self: stretch;
`;

const Value = styled.div`
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
