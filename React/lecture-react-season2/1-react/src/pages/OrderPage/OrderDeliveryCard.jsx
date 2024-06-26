import Card from "../../components/Card";

const OrderDeliveryCard = ({ order }) => {
  return (
    <Card
      data={[
        { term: "배달주소", description: order.deliveryAddress },
        { term: "전화번호", description: order.deliveryContact },
        { term: "가게사장님께", description: order.messageToShop },
        { term: "라이더님께", description: order.messageToRider },
      ]}
    />
  );
};

export default OrderDeliveryCard;
