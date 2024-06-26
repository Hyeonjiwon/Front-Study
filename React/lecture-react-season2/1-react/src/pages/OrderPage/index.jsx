import Card from "../../components/Card";
import Navbar from "../../components/Navbar";
import Page from "../../components/Page";
import Title from "../../components/Title";

const OrderPage = () => (
  <>
    <Page header={<Title>주문내역</Title>} footer={<Navbar />}>
      <Card />
    </Page>
  </>
);

export default OrderPage;
