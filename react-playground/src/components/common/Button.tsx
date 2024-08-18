import styled from "styled-components";

type ButtonProps = {
  children: React.ReactNode;
};

const Button = ({ children }: ButtonProps) => {
  return (
    <ButtonContainer>
      <ButtonText>{children}</ButtonText>
    </ButtonContainer>
  );
};

export default Button;

const ButtonContainer = styled.div`
  width: 100%;
  position: relative;
  border-radius: 6px;
  background-color: #224a99;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 12px 60px;
  box-sizing: border-box;
  text-align: center;
  font-size: 18px;
  color: #fff;
`;

const ButtonText = styled.div`
  position: relative;
  line-height: 150%;
  font-weight: 500;
`;
