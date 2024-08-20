import { Checkbox } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";

interface JobApplicationModalContentProps {
  onClose: () => void;
}

const JobApplicationModalContent = ({
  onClose,
}: JobApplicationModalContentProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    // 버튼 클릭시 모달 창 닫기

    <ModalContainer>
      {isSubmitted ? (
        <>
          <TitleContainer>
            <Title>지원하기</Title>
          </TitleContainer>
          <Section>
            <InfoContainer flag={"true"}>
              <InfoRow flag={"true"}>
                <Label flag={"true"}>🎉</Label>
                <Value>지원 완료되었습니다</Value>
              </InfoRow>
            </InfoContainer>
          </Section>
          <div>
            <ActionButton>나의 지원활동 보러 가기</ActionButton>
            <ActionButton onClick={onClose}>확인</ActionButton>
          </div>
        </>
      ) : (
        <>
          <TitleContainer>
            <Title>지원하기</Title>
          </TitleContainer>
          <ContentContainer>
            <Section>
              <SectionTitle>지원 정보</SectionTitle>
              <InfoContainer>
                <InfoRow>
                  <Label>이름</Label>
                  <Value>재들린</Value>
                </InfoRow>
                <InfoRow>
                  <Label>이메일</Label>
                  <Value>jeajejea@gmail.com</Value>
                </InfoRow>
                <InfoRow>
                  <Label>연락처</Label>
                  <Value>010-1234-5678</Value>
                </InfoRow>
              </InfoContainer>
            </Section>
            <Section>
              <SectionTitle>첨부 파일</SectionTitle>
              <FileContainer>
                <FileItem>
                  <Checkbox />
                  <FileLabel>이력서1</FileLabel>
                  <FileDate>2024.07.28</FileDate>
                </FileItem>
              </FileContainer>
            </Section>
          </ContentContainer>
          <ButtonContainer>
            <SubmitButton onClick={handleSubmit}>제출하기</SubmitButton>
          </ButtonContainer>
        </>
      )}
    </ModalContainer>
  );
};

export default JobApplicationModalContent;

// 스타일 정의
const ModalContainer = styled.div`
  width: 460px;
  position: relative;
  border-radius: 12px;
  background-color: #fff;
  height: 487px;
  text-align: center;
  font-size: 18px;
  color: #191919;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* 공간을 위와 아래로 균등하게 배분 */
`;

const TitleContainer = styled.div`
  position: relative;
  height: 47px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
  box-sizing: border-box;
  text-align: center;
  font-size: 18px;
  color: #191919;
  margin-bottom: 20px;
`;

const Title = styled.div`
  line-height: 150%;
  font-weight: 500;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 40px;
  text-align: left;
  font-size: 16px;
  color: #191919;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

const SectionTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #494949;
`;

const InfoContainer = styled.div<{ flag?: string }>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-right: ${(props) => (props.flag ? "0" : "135px")};
`;

const InfoRow = styled.div<{ flag?: string }>`
  display: flex;
  justify-content: ${(props) => (props.flag ? "center" : "space-between")};
  flex-direction: ${(props) => (props.flag ? "column" : "row")};
  align-items: center;
`;
const Label = styled.div<{ flag?: string }>`
  font-size: ${(props) => (props.flag ? "40px" : "16px")};
  font-weight: 500;
  color: #494949;
  width: 80px;
`;

const Value = styled.div<{ flag?: boolean }>`
  flex-grow: 1; /* Value가 남은 공간을 채우도록 설정 */
  text-align: ${(props) =>
    props.flag ? "center" : "left "} /* Value를 왼쪽 정렬 */
  font-size: 16px;
  color: #191919;
`;

const FileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FileItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #797979;
  border-radius: 4px;
  padding: 4px;
`;

const FileLabel = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #191919;
  margin-left: 8px;
`;

const FileDate = styled.div`
  font-size: 16px;
  color: #191919;
  text-align: center;
  margin-left: auto;
  padding: 0 14px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: auto; /* 버튼을 하단으로 이동 */
`;

const SubmitButton = styled.div`
  width: 100%;
  border-radius: 6px;
  background-color: #224a99;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 60px;
  box-sizing: border-box;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
`;

const ActionButton = styled.button`
  width: 100%;
  border-radius: 6px;
  background-color: #224a99;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 60px;
  box-sizing: border-box;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  border: none;
  margin-top: 12px;
`;
