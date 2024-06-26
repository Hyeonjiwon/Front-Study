import React from "react";
import Card from "../../components/Card";

const OrderPaymentCard = ({ order }) => {
  const changePriceFormat = (price) => {
    const result = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return result;
  };

  return (
    <Card
      header=<strong>
        총 결제금액: {order.totalPrice}원<br></br>
        결제 방법: {order.paymentMethod}
      </strong>
      data={[
        {
          term: "메뉴가격",
          description: changePriceFormat(order.productPrice) + "원",
        },
        {
          term: "배달료",
          description: changePriceFormat(order.deliveryPrice) + "원",
        },
        {
          term: "할인금액",
          description: changePriceFormat(order.discountPrice) + "원",
        },
      ]}
    />
  );
};

export default OrderPaymentCard;
