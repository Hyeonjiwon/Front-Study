const Button = ({ styleType, block, ...rest }) => {
  let className = "Button";
  if (styleType) className += ` ${styleType}`;
  if (block) className += ` block`;

  const handleClick = () => {
    // 장바구니로 이동 로직을 넣으면 이 컴포넌트의 역할이 제한된다.
    // 외부로 열어줘야 한다.
  };

  // onClick이라는 이름의 콜백함수를 props인자로 전달 받고 onClick 에 전달
  return <button className={className} {...rest} />;
};

export default Button;
