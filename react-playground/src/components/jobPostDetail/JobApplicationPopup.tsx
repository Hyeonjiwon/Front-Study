import styled from "styled-components";

const JobApplicationModalContent = () => {
  return (
    <ModalContainer>
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
        <SubmitButton>제출하기</SubmitButton>
      </ButtonContainer>
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

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-right: 135px;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Label = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #494949;
`;

const Value = styled.div`
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
  background-color: #f9f9f9;
`;

const Checkbox = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  background-color: #fff;
  border: 1px solid #797979;
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
