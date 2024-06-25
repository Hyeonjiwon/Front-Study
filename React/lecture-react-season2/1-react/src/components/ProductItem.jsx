import Button from "./Button";

const ProductItem = ({ product }) => {
  // 객체 해체
  const { name, price, thumbnail } = product;

  return (
    <div className="ProductItem">
      <div className="description">
        <h2>{name}</h2>
        <div>{price.toLocaleString()}원</div>
        <Button
          styleType={"brand"}
          onClick={(e) => {
            console.log("TODO: 주문하기 클릭");
          }}
        >
          주문하기
        </Button>
      </div>
      <div className="thumbnail">
        <img src={thumbnail} alt={`${name} ${price.toLocaleString()}원`} />
      </div>
    </div>
  );
};

export default ProductItem;
