import styled from "styled-components";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <ButtonContainer onClick={onClick}>
      <ButtonText>{children}</ButtonText>
    </ButtonContainer>
  );
};

export default Button;

const ButtonContainer = styled.button`
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
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1a397a;
  }

  &:active {
    background-color: #112856;
  }
`;

const ButtonText = styled.span`
  line-height: 150%;
  font-weight: 500;
`;
