import React from "react";
import ProductApi from "shared/api/ProductApi";
import Navbar from "../../components/Navbar";
import Page from "../../components/Page";
import Title from "../../components/Title";
import ProductItem from "../../components/ProductItem";

class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
    };
  }

  async fetch() {
    try {
      const productList = await ProductApi.fetchProductList();
      this.setState({ productList });
    } catch (e) {
      console.error(e);
    }
  }

  // 컴포넌트가 mount 돼서 dom에 render 됐을 때 fetch() 호출
  componentDidMount() {
    this.fetch();
  }

  render() {
    return (
      <div className="ProductPage">
        <Page header={<Title>메뉴 목록</Title>} footer={<Navbar />}>
          {/* main에 들어가는 children */}
          <ul>
            {this.state.productList.map((product) => (
              <li key={product.id}>
                <ProductItem product={product} />
              </li>
            ))}
          </ul>
        </Page>
      </div>
    );
  }
}

export default ProductPage;
