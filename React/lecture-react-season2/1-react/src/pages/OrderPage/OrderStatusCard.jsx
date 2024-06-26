import React from "react";
import Card from "../../components/Card";
import Button from "../../components/Button";

const OrderStatusCard = ({ order }) => {
  return (
    <Card
      header=<strong>{order.status}</strong>
      data={[
        { term: "주문일시", description: order.orderDate },
        { term: "주문번호", description: order.id },
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
