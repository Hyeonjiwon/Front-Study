import React from "react";
import Card from "../../components/Card";
import Button from "../../components/Button";

const OrderStatusCard = ({ order }) => {
  const { orderDate, id } = order;

  return (
    <Card
      header=<strong>{order.status}</strong>
      data={[
        { term: "주문일시", description: orderDate },
        { term: "주문번호", description: id },
      ]}
      footer={
        <>
          <Button>전화</Button>
          <Button>가게보기</Button>
        </>
      }
    />
  );
};

export default OrderStatusCard;
